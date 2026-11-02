# English Atelier — không gian IELTS cá nhân

Bản đầu tiên: 02/11/2026 (Asia/Bangkok). Website tĩnh, không cần tài khoản, npm, API key hay cơ sở dữ liệu máy chủ. Chưa được xuất bản lên Internet hoặc đồng bộ OneDrive.

## Mở và sử dụng

Cách thuận tiện: mở `English-Atelier.html` bằng trình duyệt cá nhân. File này chứa toàn bộ giao diện và nội dung học; các liên kết nguồn bên ngoài vẫn cần Internet. Một số trình duyệt/chính sách máy có thể chặn file:// hoặc xử lý lưu trữ của file:// khác nhau.

Cách khuyến nghị để lưu tiến độ ổn định: nếu máy có Python, mở terminal trong thư mục này và chạy:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Trên Windows có thể dùng `py -m http.server 8765 --bind 127.0.0.1` nếu lệnh python không có. Mở địa chỉ loopback và cổng đã chọn trong trình duyệt cá nhân. Giữ nguyên tên máy chủ/cổng và hồ sơ trình duyệt khi muốn dùng lại dữ liệu cục bộ. Dừng server bằng Ctrl+C. Server chỉ phục vụ file, không nhận upload hoặc tự ghi bài viết vào thư mục.

Bản phát triển: `index.html` dùng `style.css`, `content.js`, `lessons.js`, `app.js` trong cùng thư mục. Không cần build để dùng các file này. `make_portable.py` tái tạo bản một file sau khi bạn chỉnh sửa mã nguồn; chỉ cần Python chuẩn. Không phải chạy lại công cụ này chỉ vì đổi máy.

## Nội dung đã có

- 15 chủ đề, 90 cụm từ: nghĩa Việt, ví dụ, kết hợp từ, lật thẻ và lịch ôn đơn giản.
- 15 mindmap, mỗi bản có 3 nhánh từ liên quan danh–động–tính (9 ô). Một số là từ liên quan về nghĩa, không phải cùng gốc; có chú thích tránh thay thế sai.
- 15 đoạn mẫu tự biên soạn, 45 điểm ngữ pháp trong ngữ cảnh và đề viết vận dụng.
- 12 cấu trúc Task 1/2, ô luyện câu và câu hỏi tự kiểm.
- Phòng viết Task 1/2: nháp tự lưu, đếm từ gần đúng, bộ đếm thời gian, checklist và tải TXT. Chưa có chấm bài tự động.
- Lộ trình 8 tuần có đánh dấu hoàn thành; cần điều chỉnh theo đầu vào. Không cam kết đạt band 7–8 trong 8 tuần.
- Nhật ký bài đọc: nguồn HTTPS, ngày đăng, ngày ghi chú, tóm tắt, từ, ngữ pháp và đề viết do bạn nhập. Chưa có trình thu thập tin hoặc tin mới đã xác minh.
- Xuất/nhập JSON cho lịch ôn, bài nháp Task 1/2 và theo chủ đề, lộ trình và bài đọc đã lưu. Ô luyện câu ở trang cấu trúc, trạng thái bấm giờ, checklist tự kiểm và form bài báo chưa bấm lưu không có trong bản sao.

## Tài liệu đã tham khảo và phạm vi

1. `Ideas for IELTS topics` (.doc): đọc nội dung trích xuất, làm nền cho các nhóm ý tưởng ban đầu. Không xem các ý kiến trong sách là kết luận khoa học đã được kiểm chứng.
2. `Templates for writing task 1 and 2` (.docx): đọc phần văn bản, tham khảo phân loại cấu trúc. Đã tránh các lỗi thay number cho proportion, coi over/under là approximately hoặc coi 30% chính xác bằng 1/3.
3. `Complete IELTS Bands 6.5–7.5`, Guy Brook-Hart & Vanessa Jakeman, Cambridge University Press, 2013, bản nén 190 trang: phần nội dung là ảnh. Đã OCR bìa/xuất bản/mục lục/map/giới thiệu (PDF trang 3–8) và word lists (PDF trang 126–133); đối chiếu hình trang mẫu. Chưa đọc chi tiết toàn sách. Trang sách và PDF lệch 2 trang trong các phần đã kiểm tra. Bìa ghi Student’s Book without Answers; chưa có audio/CD-ROM được xác minh.

Ví dụ và giải nghĩa Việt là nội dung biên soạn riêng. Website không nhúng, sao chép toàn bộ hoặc phân phối lại các sách/PDF. Các tài liệu gốc vẫn ở phần file đính kèm của cuộc trò chuyện, không nằm trong gói website.

Đã tham khảo bố cục từ link bạn gửi: https://hongmy2102.github.io/deutsch-alltag/ và trang Deutsch im Leben trong cùng website. Địa chỉ GitHub Pages trả 403 trong môi trường này, nên đã đọc mã nguồn công khai qua Git proxy tại https://github.com/hongmy2102/deutsch-alltag, commit 9d22401ea49adb79eaf06fb7e195d0fa1c9493d6 (index.html và deutsch-im-leben.html). Đây là đối chiếu bố cục qua mã nguồn, không phải xác minh phiên bản đang phục vụ trực tiếp trên GitHub Pages.

Bản IELTS dùng thanh đầu trang tối màu, tông xanh lam, danh mục chủ đề dạng ô và bốn phần trong mỗi chủ đề: Mindmap / Thẻ từ & ví dụ / Đọc & ngữ pháp / Xưởng viết. Phân tích ngữ pháp, đoạn mẫu trong xưởng viết và checklist có thể mở rộng. Bản nháp mỗi chủ đề tự lưu riêng và được đưa vào JSON sao lưu. Các file HTML và ZIP là sản phẩm mới; chưa chỉnh hoặc xuất bản lên repository deutsch-alltag của bạn.

## Chủ đề bổ sung theo yêu cầu

Có các nhóm Động vật & phúc lợi, Thiên nhiên & đa dạng sinh học, Gen Z & tham gia xã hội. Nhóm Gen Z là bài luyện trung lập tự biên soạn, không phải bản tường thuật biểu tình thực tế. Chưa xác định được quốc gia hoặc bài báo mà bạn đang nhắc tới; chưa có dữ kiện đủ để gọi một phong trào cụ thể ở châu Âu là đại diện cho cả thế hệ.

## Bài báo và mạng

Ngày 02/11/2026, truy cập Study4 trả 403; BBC RSS bị từ chối ở bước CONNECT bởi chính sách proxy. Vì vậy chưa có bài báo thời sự nào được xác minh và đưa vào bài học. Các link BBC, NASA, IELTS.org, British Council, Cambridge Dictionary là nguồn gợi ý, không phải bằng chứng đã đọc bài tại đó.

Đã lưu bản nháp quyền truy cập cho: study4.com, feeds.bbci.co.uk, www.bbc.com, www.bbc.co.uk, www.nasa.gov, science.nasa.gov, ielts.org, learnenglish.britishcouncil.org, dictionary.cambridge.org. Giữ nguyên preset mạng có sẵn. Bản nháp không tự áp dụng; cần review/save và publish trong cài đặt môi trường. Sau đó phải thử truy cập lại: quyền mạng không bảo đảm mọi trang sẽ cho đọc tự động.

Không có cơ chế tự cập nhật tin trong gói này. Sau khi có nguồn đọc được, mỗi bài học tin tức cần URL bài cụ thể, tên nguồn, ngày đăng, ngày kiểm tra, tóm tắt riêng, dữ kiện đã kiểm chứng và phân biệt suy luận. Bài bạn nhập trong nhật ký được ghi rõ là chưa xác minh độc lập.

## OneDrive và chuyển máy

Mình không tự sao lưu vào OneDrive và chưa truy cập tài khoản Microsoft của bạn.

1. Lưu cả thư mục website hoặc file `English-Atelier.html` vào OneDrive để giữ sản phẩm.
2. Trong website, chọn **Tài liệu & sao lưu → Xuất dữ liệu .json**. Lưu JSON vào thư mục OneDrive cùng website, nên giữ nhiều phiên bản có ngày.
3. Trước khi cut/chuyển máy, xác nhận OneDrive đã đồng bộ và file có thể tải/mở lại. Nên copy và kiểm tra trước rồi mới xóa bản cũ.
4. Trên máy mới, tải file/thư mục về, mở website rồi nhập JSON. Thao tác nhập thay thế tiến độ hiện tại; xuất bản hiện tại trước nếu cần giữ.

Nội dung trong thư mục dùng đường dẫn tương đối, nên giữ nguyên cấu trúc thì không phải build lại khi di chuyển. Bản một file không có đường dẫn tới các file mã nguồn khác. Nhưng tiến độ được lưu trong localStorage theo trình duyệt và địa chỉ (origin); nó KHÔNG tự nằm trong OneDrive, KHÔNG tự đi theo mã nguồn và KHÔNG tự đồng bộ giữa nhiều máy. Xóa dữ liệu trình duyệt hoặc dùng cửa sổ riêng tư cũng có thể làm mất tiến độ nếu chưa xuất JSON.

Link chia sẻ OneDrive không phải dịch vụ host website đầy đủ. Các link Internet bên ngoài vẫn phụ thuộc nguồn; link tới file khác sẽ hỏng nếu bạn di chuyển file đích mà không cập nhật đường dẫn. Nếu sau này có domain/hosting cố định, chuyển bản sao mã nguồn về máy không tự làm hỏng website đang host; xóa file khỏi nơi host sẽ ảnh hưởng website đó.

Đồng bộ tự động thực sự là bước riêng, cần Microsoft OAuth/Graph hoặc backend thích hợp; không nhúng token Microsoft vào website tĩnh.

## Kiểm tra đã chạy

- Kiểm tra cú pháp JavaScript.
- Kiểm tra Chromium trên HTTP nội bộ: 9 trang, 15 mindmap, lật thẻ, tìm kiếm, lịch ôn, lưu nháp qua reload, chuyển Task 1/2, bấm giờ, đánh dấu tuần, ghi chú bài báo.
- Xuất JSON → xóa dữ liệu thử → nhập JSON → phục hồi bài viết; từ chối link javascript trong bản nhập và giữ dữ liệu cũ; kiểm tra ghi chú HTML được hiển thị như chữ, không thực thi. Kiểm tra thêm bốn phần học trong chủ đề, mở phân tích ngữ pháp, lưu/khôi phục bản nháp theo chủ đề.
- Kiểm tra các trang ở bề rộng 390px không tràn ngang.
- Các kiểm tra dùng ghi chú mẫu trên hồ sơ trình duyệt thử; gói phân phối không kèm tiến độ giả.

Kiểm tra qua HTTP không chứng minh mọi trình duyệt sẽ cho phép file:// lưu dữ liệu. Chưa kiểm tra publication, host Internet, OneDrive, toàn bộ nội dung sách, độ chính xác chấm thi hoặc cập nhật bài báo tự động.

## Cập nhật IPA và phát âm

IPA Mỹ được lưu sẵn trong `phonetics.js`. Nguồn, giấy phép và cách biên tập xem `THIRD_PARTY_NOTICES.md`. Không có yêu cầu gọi API từ điển để hiển thị IPA. Nút từ, nút đọc cụm/câu, chọn giọng và tốc độ nằm trong `pronunciation.js`. Những từ trong câu ví dụ có thể nhấn để mở IPA và nghe.

Âm thanh là giọng tổng hợp của trình duyệt/thiết bị, không phải file ghi âm từ điển. Các giọng đọc có thể không sẵn trên một số trình duyệt hoặc cần kết nối mạng. Khi không có hỗ trợ hoặc phát âm thất bại, giao diện báo rõ và cho mở từ điển. Phiên âm của cụm là các dạng từ điển ghép lại; âm yếu và nối âm khi nghe có thể khác.

Chủ đề Giáo dục hiện có 14 nhóm từ trong mindmap, gồm các từ từ phần collocations. Những ô — không có dạng từ thông dụng trong nhóm; không tạo động từ giả để điền đủ ba cột.

Kiểm tra mới: mức phủ IPA cho toàn bộ headword và ví dụ trong 90 thẻ, mọi mục từ trong các nhóm mindmap; điều khiển giọng/tốc độ và thao tác nhấn từ/cụm bằng API trình duyệt giả lập, đường xử lý lỗi/không hỗ trợ, layout điện thoại. Kiểm tra điều khiển phát âm không thay thế việc nghe thử trên loa và giọng đọc thực tế của thiết bị người dùng.

## Ví dụ ngay trong mindmap

Có 163 câu ví dụ và bản dịch Việt đi cùng từng ô từ (gồm các nhóm bổ sung của Giáo dục). Các câu dùng đúng mục từ và loại từ đang học; bản dịch nhằm giải thích nghĩa trong ngữ cảnh. Những câu đã có phù hợp ở nhóm Education được giữ lại. Ví dụ và bản dịch là nội dung tự biên soạn, không phải dữ kiện từ tin thời sự.

Từ trọng tâm được in đậm trong câu. Cả mục từ và những từ trong câu đều có thể nhấn để xem IPA/nghe; nút ▶ đọc cả câu. Ba ô danh–động–tính của một nhóm nằm cùng hàng trên màn hình rộng và cùng nhóm xếp dọc trên điện thoại.
