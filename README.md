# English Atelier

Ngôi nhà tiếng Anh cá nhân, độc lập với Deutsch Alltag / Deutsch im Leben.

Website học IELTS qua 15 chủ đề, 90 cụm từ, mindmap danh–động–tính, đoạn mẫu và ngữ pháp trong ngữ cảnh. Có IPA Mỹ, nhấn từ để nghe bằng giọng trình duyệt, chọn giọng/tốc độ đọc, thẻ ôn, xưởng viết theo chủ đề, phòng viết Task 1/2, nhật ký bài đọc và xuất/nhập dữ liệu JSON.

## Chạy và sửa

Mã nguồn tại thư mục gốc: `index.html`, `style.css`, `content.js`, `lessons.js`, `app.js`. Không cần cài thư viện hoặc build để phục vụ website.

Chạy server cục bộ bằng Python:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

`English-Atelier.html` là bản một file để mang theo. Khi sửa mã nguồn, chạy `python make_portable.py` để cập nhật bản một file.

## GitHub Pages

Repository: **[Hongmy2102/english-atelier](https://github.com/Hongmy2102/english-atelier)**. Mã nguồn đã được đẩy lên GitHub. Nhánh chính: **main**. Phục vụ từ thư mục gốc **/ (root)**, có `.nojekyll`.

Đường dẫn website dự kiến sau khi GitHub Pages được bật và triển khai thành công: `https://hongmy2102.github.io/english-atelier/`. Đây chưa phải xác nhận rằng website đã được xuất bản.

## Dữ liệu học

Tiến độ, nháp Task 1/2, nháp theo chủ đề và nhật ký bài đọc lưu trong trình duyệt. GitHub không tự nhận các bài viết này. Xuất JSON trong phần **Nguồn & sao lưu** trước khi chuyển máy hoặc đổi địa chỉ website, rồi nhập lại trên địa chỉ mới.

Không có đồng bộ OneDrive tự động, chấm band bằng AI hoặc tự động thu thập tin tức. Xem `HUONG-DAN.md` để biết nguồn tài liệu, phạm vi đã đọc và giới hạn hiện tại.

## Bố cục và học liệu

Bố cục tham khảo từ website Deutsch của chủ tài khoản; nội dung tiếng Anh và các ví dụ được biên soạn riêng. Không phân phối lại các tài liệu Word/PDF gốc hoặc đưa bài viết cá nhân vào repository.

## IPA và phát âm

- Nhấn từ có gạch chấm để nghe và xem IPA. IPA hiện ngay dưới từ/cụm từ trong mindmap, nhóm từ, collocations và thẻ ôn. Nút ▶ đọc cả cụm hoặc câu.
- IPA là dạng từ điển theo giọng Mỹ, dùng dữ liệu mở có ghi nguồn trong `THIRD_PARTY_NOTICES.md`. Cụm từ được ghép từ các phiên âm từng từ, không phải bản chép phiên âm nối âm của cả câu.
- Giọng đọc dùng Web Speech của trình duyệt/thiết bị. Chọn giọng tiếng Anh và tốc độ trên thanh phát âm; một số giọng cần Internet. Nếu thiết bị không có giọng đọc, website vẫn hiển thị IPA và có link tra từ điển.
- Nhánh động từ trong mindmap dùng nền xanh teal trầm với chữ sáng; chủ đề Giáo dục có thêm các nhóm từ trong collocations, gồm vocational, training, achievement, broaden, horizons, academic, curriculum, structured và critical.

## Ví dụ trong từng ô từ

Mỗi ô từ trong mindmap có từ, IPA, nghĩa, câu ví dụ tiếng Anh và bản dịch tiếng Việt ngay bên dưới. Từ đang học được in đậm trong ví dụ; nhấn từng từ hoặc nút ▶ để nghe. Có 163 ví dụ theo đúng dạng từ, bao phủ mọi ô có từ trong 15 chủ đề; ô — được giữ rõ khi không có dạng thông dụng. Trên điện thoại, ba ô của cùng một nhóm được xếp dọc để dễ đọc. Phần ví dụ nhóm từ riêng đã được gộp vào mindmap, tránh lặp lại nội dung.

## Nội dung song ngữ

Toàn bộ 90 thẻ từ có `exampleVi` (dịch câu ví dụ) và `usageVi` (nghĩa cụm kết hợp). Cả mặt sau thẻ ôn và danh mục collocations đều hiển thị hai phần này. 12 thẻ cấu trúc có bản dịch câu; 15 đoạn mẫu và đề viết theo chủ đề có bản dịch đầy đủ. Nội dung mới cần điền đầy đủ các trường tiếng Việt tương ứng trước khi xuất bản.

Phần đọc chờ 180 ms khi bắt đầu hoặc 240 ms sau lượt đọc trước, đồng thời chờ việc hủy/khởi tạo giọng hoàn tất trong giới hạn ngắn. Khi nhấn liên tục, chỉ yêu cầu mới nhất được đọc; nút Dừng hủy cả yêu cầu đang chờ. Văn bản gửi tới giọng đọc giữ nguyên từ đầu tiên. Các điều khiển này đã được kiểm tra bằng trình duyệt và API giọng đọc mô phỏng; chất lượng âm thanh thực tế vẫn phụ thuộc giọng đọc và thiết bị.
