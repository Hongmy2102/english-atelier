# Trạng thái đưa lên GitHub

Đã chuẩn bị mã nguồn và repository cục bộ riêng, nhánh main. Chưa tạo được repository trên GitHub do kết nối api.github.com bị chính sách mạng từ chối tại bước CONNECT. Chưa có push hoặc deployment được xác nhận.

Tên đích: Hongmy2102/english-atelier. Trang Deutsch hiện tại không cần thay đổi.

Sau khi quyền truy cập mạng được áp dụng, cần thực hiện và kiểm tra các bước sau (chưa chạy thành công trong phiên hiện tại):

1. Kiểm tra GitHub API với cấu hình xác thực sẵn có; không ghi token vào mã nguồn.
2. Kiểm tra repository đích, tạo repository riêng nếu chưa có. Nếu đã tồn tại, kiểm tra nội dung trước khi push; không force-push hoặc ghi đè mã nguồn không liên quan.
3. Push nhánh main và xác minh SHA phía remote.
4. Bật GitHub Pages cho main, thư mục gốc; xác minh trạng thái build và truy cập trang công khai.
5. Chỉ thông báo website đã online sau khi kiểm tra được.

Việc tạo repo và Pages cần quyền tương ứng trên tài khoản. Một lần đọc Git thành công không chứng minh có quyền ghi hay quyền quản lý Pages.
