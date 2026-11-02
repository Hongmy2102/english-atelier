'use strict';
window.Pronunciation = (() => {
  const dictionary = window.PHONETICS || {};
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const key = word => word.toLowerCase().replaceAll('’', "'");
  const getIPA = word => dictionary[key(word)] || '';
  const wordPattern = /(?<![\p{L}\p{M}])[A-Za-z]+(?:['’][A-Za-z]+)*(?![\p{L}\p{M}])/gu;
  const tokenButton = (word, focus=false) => `<button type="button" class="speak-word ${focus?'example-focus':''}" lang="en" data-say="${escape(word)}" title="${escape(getIPA(word) || 'Nhấn để nghe và xem IPA')}" aria-label="${escape('Nghe '+word)}">${escape(word)}</button>`;
  function text(value, focusWord='') {
    let out = '', start = 0;
    for (const match of String(value).matchAll(wordPattern)) {
      out += escape(String(value).slice(start, match.index)) + tokenButton(match[0],key(match[0])===key(focusWord));
      start = match.index + match[0].length;
    }
    return out + escape(String(value).slice(start));
  }
  function phraseIPA(value) {
    const tokens = [...String(value).matchAll(wordPattern)].map(m => m[0]);
    if (!tokens.length) return '';
    const forms = tokens.map(token => getIPA(token).split(', ')[0].replace(/^\//, '').replace(/\/$/, ''));
    return forms.every(Boolean) ? '/'+forms.join(' ')+'/' : '';
  }
  function word(value) {
    if (!value) return '<span class="empty-form">—</span>';
    return `<span class="word-pron">${tokenButton(value)}<span class="ipa-line" lang="en">${escape(getIPA(value) || 'Chưa có IPA')}</span></span>`;
  }
  function term(value) {
    return `<span class="term-pron"><span class="term-top">${text(value)} <button type="button" class="listen-whole" data-say="${escape(value)}" aria-label="${escape('Nghe cả cụm '+value)}">▶</button></span><span class="ipa-line" lang="en">${escape(phraseIPA(value) || 'Nhấn từng từ để xem IPA')}</span></span>`;
  }
  function sentence(value, focusWord='') {
    return `${text(value,focusWord)} <button type="button" class="listen-whole" data-say="${escape(value)}" aria-label="Nghe cả câu">▶</button>`;
  }
  const synthesis = window.speechSynthesis;
  const supported = !!synthesis && typeof window.SpeechSynthesisUtterance === 'function';
  let voices = [], serial = 0, watchdog = null, activeUtterance = null, lastText = '';
  const controls = document.getElementById('speech-controls');
  controls.innerHTML = `<div class="speech-intro"><strong>IPA & phát âm</strong><span>IPA Mỹ · Nhấn từ để nghe · ▶ nghe cả cụm/câu</span></div><div class="speech-options"><label for="speech-voice">Giọng đọc</label><select id="speech-voice" aria-label="Chọn giọng đọc tiếng Anh"><option value="">Mặc định tiếng Anh Mỹ</option></select><label for="speech-rate">Tốc độ</label><select id="speech-rate"><option value="0.7">Chậm · 0.7×</option><option value="0.85" selected>Rõ ràng · 0.85×</option><option value="1">Bình thường · 1×</option></select><button id="speech-stop" class="secondary" type="button">Dừng đọc</button></div><p id="speech-status" role="status">${supported?'Chọn một từ tiếng Anh có gạch chấm để nghe.':'Trình duyệt này không hỗ trợ đọc thành tiếng. Bạn vẫn có thể xem IPA và mở từ điển.'}</p>`;
  const popup = document.createElement('section');
  popup.className = 'speech-popover'; popup.hidden = true;
  popup.setAttribute('aria-label','Từ và phiên âm đang nghe');
  popup.innerHTML = '<button type="button" id="speech-close" aria-label="Đóng phần phát âm">×</button><span class="label">PRONUNCIATION · IPA MỸ</span><h3 id="spoken-word" lang="en"></h3><p id="spoken-ipa" lang="en"></p><p id="spoken-note"></p><div class="row"><button type="button" id="speech-replay">Nghe lại ▶</button><a id="speech-dictionary" target="_blank" rel="noopener noreferrer">Tra từ điển ↗</a></div>';
  document.body.append(popup);
  const status = message => {document.getElementById('speech-status').textContent = message;};
  function loadVoices() {
    if (!supported) return;
    const select = document.getElementById('speech-voice');
    const previous = select.value;
    voices = synthesis.getVoices().filter(v => /^en(?:-|_)/i.test(v.lang) || /^en$/i.test(v.lang));
    voices.sort((a,b) => Number(/^en[-_]US$/i.test(b.lang))-Number(/^en[-_]US$/i.test(a.lang)));
    select.replaceChildren(new Option('Mặc định tiếng Anh Mỹ',''));
    voices.forEach((v,i) => select.add(new Option(`${v.name} (${v.lang})`,String(i))));
    if (previous !== '' && voices[Number(previous)]) select.value=previous;
    else {
      const us = voices.findIndex(v => /^en[-_]US$/i.test(v.lang));
      if(us>=0)select.value=String(us);
    }
  }
  function stop(message='Đã dừng phát âm.') {
    serial++; clearTimeout(watchdog); activeUtterance=null;
    if(supported)synthesis.cancel();
    status(message);
  }
  function play(value) {
    const spoken = String(value).trim();
    if(!spoken)return;
    lastText=spoken;
    popup.hidden=false;
    document.getElementById('spoken-word').textContent=spoken;
    document.getElementById('spoken-ipa').textContent=getIPA(spoken)||phraseIPA(spoken)||'Chưa có IPA cho toàn cụm; hãy nhấn từng từ.';
    document.getElementById('spoken-note').textContent=spoken.includes(' ')?'IPA ghép theo từng từ. Khi đọc cả câu có thể có nối âm và âm yếu.':'IPA theo giọng Mỹ. Giọng đọc phụ thuộc lựa chọn ở thanh phát âm.';
    document.getElementById('speech-dictionary').href='https://dictionary.cambridge.org/search/direct/?datasetsearch=english&q='+encodeURIComponent(spoken);
    if(!supported){status('Không hỗ trợ giọng đọc trên trình duyệt này. Bạn có thể xem IPA hoặc nhấn Tra từ điển.');return;}
    const request=++serial;
    clearTimeout(watchdog);
    synthesis.cancel();
    const utterance=new window.SpeechSynthesisUtterance(spoken);
    activeUtterance=utterance; // Retain the utterance until its end/error event.
    const choice=document.getElementById('speech-voice').value;
    if(choice!==''&&voices[Number(choice)])utterance.voice=voices[Number(choice)];
    utterance.lang=utterance.voice?.lang||'en-US';
    utterance.rate=Number(document.getElementById('speech-rate').value);
    utterance.pitch=1;
    const isCurrent=()=>request===serial;
    status('Đang chuẩn bị giọng đọc: '+spoken);
    utterance.onstart=()=>{if(isCurrent()){clearTimeout(watchdog);status('Đang đọc: '+spoken);}};
    utterance.onend=()=>{if(isCurrent()){clearTimeout(watchdog);activeUtterance=null;status('Đã đọc: '+spoken);}};
    utterance.onerror=event=>{if(!isCurrent())return;clearTimeout(watchdog);activeUtterance=null;if(['canceled','interrupted'].includes(event.error))return;status('Chưa phát được âm thanh. Thử chọn giọng tiếng Anh khác, kiểm tra âm lượng hoặc mở Tra từ điển.');};
    try {
      watchdog=setTimeout(()=>{if(!isCurrent())return;stop('Chưa khởi động được giọng đọc. Thử giọng tiếng Anh khác hoặc mở Tra từ điển.');},8000);
      synthesis.speak(utterance);
    } catch(error) {
      clearTimeout(watchdog);activeUtterance=null;
      status('Trình duyệt chưa phát được âm thanh. Hãy chọn giọng khác hoặc mở Tra từ điển.');
    }
  }
  document.addEventListener('click',event=>{
    const target=event.target.closest?.('[data-say]');
    if(target){event.preventDefault();play(target.dataset.say);}
  });
  document.getElementById('speech-stop').onclick=()=>stop();
  document.getElementById('speech-close').onclick=()=>{stop();popup.hidden=true;};
  document.getElementById('speech-replay').onclick=()=>play(lastText);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!popup.hidden){stop();popup.hidden=true;}});
  window.addEventListener('hashchange',()=>{stop('Chọn một từ để nghe phát âm.');popup.hidden=true;});
  if(supported){loadVoices();synthesis.addEventListener?.('voiceschanged',loadVoices);}
  return {text,word,term,sentence,getIPA,phraseIPA,play,stop};
})();
