# Chọn cơ sở dữ liệu chính

* Trạng thái: yêu cầu góp ý
* Ngày: 2026-03-22
* Người ra quyết định: CTO (cần xác nhận)
* Chủ sở hữu: Trưởng bộ phận Kỹ thuật nền tảng

Tóm tắt: Công việc đang thực hiện. Đây là điểm khởi đầu cho một nhóm đang chọn cơ sở dữ liệu chính cho một sản phẩm đang tăng trưởng. Đây là ví dụ công nghệ duy nhất trong bộ này, và cho thấy các quyết định kiến trúc theo cùng mô hình như các quyết định kinh doanh ở những nơi khác trong bộ sưu tập. Nó cho thấy một nhóm có thể đặt câu hỏi, tranh luận các phương án và thu thập thông tin như thế nào. Nó không ghi lại quyết định nào.

## Vấn đề

Cơ sở dữ liệu hiện tại đang tiến gần giới hạn mở rộng, và nhóm kỹ thuật dự kiến tăng trưởng sẽ chạm các giới hạn đó chẳng bao lâu nữa. Phải chọn một giải pháp thay thế hoặc một cách mở rộng khác trước đợt ra mắt sản phẩm lớn tiếp theo.

Các câu hỏi cần trả lời:

* Các giới hạn thực tế hiện nay là gì (đọc, ghi, lưu trữ, độ trễ, vận hành), và chúng ta đang tiến gần chúng nhanh đến đâu?
* Những chất lượng nào quan trọng nhất (nhất quán, sẵn sàng, độ trễ, chi phí, khả năng vận hành, tuân thủ), và theo thứ tự nào?
* Chúng ta mở rộng cái đang có, chuyển sang dịch vụ được quản lý, hay tự vận hành một thứ gì đó?
* Chúng ta sẽ di chuyển thế nào, và sẽ rời đi ra sao nếu buộc phải làm vậy?

## Giả định

Mỗi giả định là một điều cần kiểm chứng.

* **Dự báo tăng trưởng là thực tế.** Kiểm chứng: so sánh với tăng trưởng trong quá khứ và các kế hoạch bán hàng, sản phẩm; cân nhắc một trường hợp cao và một trường hợp thấp.
* **Cơ sở dữ liệu hiện tại có thể mở rộng thêm, với một cái giá.** Kiểm chứng: hỏi nhà cung cấp và nhóm còn bao nhiêu dư địa và chi phí là bao nhiêu.
* **Khối lượng công việc của chúng ta phù hợp với thiết kế mở rộng theo chiều ngang.** Kiểm chứng: nghiên cứu truy vấn và giao dịch; tìm các thao tác cần nhất quán mạnh giữa các bản ghi.
* **Nhóm có thể vận hành phương án được chọn.** Kiểm chứng: liệt kê các kỹ năng cần thiết và ai có chúng.

## Ràng buộc

* Thay đổi phải sẵn sàng trước đợt ra mắt, với di chuyển theo giai đoạn không gây xáo trộn cho đợt ra mắt.
* Chi phí định kỳ phải nằm trong ngân sách đã duyệt.
* Nghĩa vụ bảo vệ dữ liệu và bảo mật áp dụng cho mọi lựa chọn.
* Chưa rõ, cần xác nhận: khối lượng dữ liệu, yêu cầu lưu giữ, yêu cầu theo khu vực, tích hợp với các hệ thống khác và cam kết với nhà cung cấp.

## Các phương án đã xem xét

Với mỗi phương án, hãy ước tính giá trị, chi phí, mốc thời gian và nhu cầu năng lực, và ghi lại bằng chứng nào sẽ thay đổi suy nghĩ của nhóm.

* **Mở rộng cơ sở dữ liệu hiện tại theo chiều dọc** (máy hoặc gói lớn hơn).
  * Giá trị: rủi ro di chuyển thấp nhất; không phải thay đổi ứng dụng.
  * Rủi ro: chỉ mua được một khoảng thời gian hạn chế; chi phí tăng dốc.
* **Chuyển sang dịch vụ cơ sở dữ liệu được quản lý, mở rộng theo chiều ngang.**
  * Giá trị: loại bỏ việc mở rộng và nhiều công việc vận hành; có hỗ trợ của nhà cung cấp.
  * Yếu tố chi phí: phí dịch vụ định kỳ; di chuyển; thay đổi ứng dụng; chi phí truyền dữ liệu ra và chi phí rời đi.
  * Rủi ro: phụ thuộc vào tính năng và giá của nhà cung cấp.
* **Chuyển sang cơ sở dữ liệu tự lưu trữ, mở rộng theo chiều ngang.**
  * Giá trị: chi phí định kỳ có thể thấp hơn; kiểm soát nhiều hơn.
  * Yếu tố chi phí: xây dựng kỹ năng vận hành; tải trực ca; công cụ; nâng cấp.
  * Rủi ro: chi phí vận hành chung có thể cao hơn dự kiến.
* **Thiết kế lại tầng dữ liệu** (ví dụ bộ nhớ đệm, bản sao đọc, phân vùng hoặc tách khối lượng công việc) để kéo dài cơ sở dữ liệu hiện tại.
* **Dùng các cơ sở dữ liệu khác nhau cho các khối lượng công việc khác nhau** (lưu trữ đa ngữ), đổi lại là phải vận hành thêm nhiều hệ thống.

## Lập luận

Các điểm tranh luận mà nhóm nên lường trước:

* **Nhất quán hay sẵn sàng.** Định lý CAP nói rằng một hệ thống phân tán bị phân vùng không thể bảo đảm cả hai. Điều nào quan trọng hơn với từng phần của sản phẩm? Nhiều khối lượng công việc chịu được sự nhất quán trễ; một số thì không.
* **Được quản lý hay tự lưu trữ.** Chi phí dịch vụ cao hơn so với rủi ro vận hành thấp hơn. Nhóm nên định giá thời gian của kỹ sư thế nào?
* **Khóa nhà cung cấp.** Mất gì khi dùng tính năng riêng của nhà cung cấp, và được gì?
* **Tiêu chuẩn.** Chúng ta dựa bao nhiêu vào SQL (được chuẩn hóa trong ISO/IEC 9075) so với mô hình truy vấn riêng của nhà cung cấp?

Cách nhóm có thể đánh giá chi phí và đánh đổi:

1. Kiểm thử với khối lượng công việc của chính bạn: tạo một bài đo chuẩn thực tế và đo từng ứng viên dưới tải kỳ vọng và tải đỉnh, kể cả các kịch bản lỗi.
2. Ước tính tổng chi phí sở hữu trong một khoảng thời gian đã nêu bằng ngôn ngữ của chính tổ chức: phí dịch vụ hoặc giấy phép, lưu trữ, di chuyển, thời gian kỹ thuật, trực ca, đào tạo, hỗ trợ và rời đi. Nêu theo khoảng.
3. Chấm điểm các ứng viên theo ma trận có trọng số của các chất lượng quan trọng (mô hình chất lượng sản phẩm ISO/IEC 25010 cung cấp từ vựng cho việc này), và kiểm tra độ nhạy với các trọng số.
4. Ước tính mỗi phương án mua được bao lâu, và chi phí khi lại chạm giới hạn.
5. Lập kế hoạch rời đi: dữ liệu và mã sẽ rời khỏi từng lựa chọn như thế nào?

## Quyết định

**Chưa quyết định.** Đây là điểm khởi đầu. Nhóm sử dụng nó nên thay phần này bằng quyết định của riêng mình.

Cách gợi ý để đi đến quyết định:

* Xác nhận ai quyết định và ai phải được tham vấn (bảo mật, tài chính, sản phẩm).
* Thống nhất tiêu chí và trọng số trước.
* Thu thập các bằng chứng nêu trên, gồm kết quả đo chuẩn, và ghi lại những gì tìm thấy.
* Chia sẻ để lấy ý kiến, sau đó quyết định và cập nhật Trạng thái.

## Tác động

Nếu nhóm quyết định di chuyển, họ sẽ cần:

* Lập kế hoạch di chuyển theo giai đoạn với giai đoạn chạy song song trước khi chuyển hẳn.
* Xác nhận ngân sách cho các chi phí định kỳ.
* Lập kế hoạch cho các quyết định tiếp theo, ví dụ về gộp kết nối và bản sao đọc.
* Ghi lại lộ trình rời đi kỳ vọng.

## Các quyết định liên quan

* [Tự xây hay mua cho một dự án](../tự-xây-hay-mua/): lập luận chung về tự xây/mua.
* [Giảm rủi ro tập trung vào một nhà cung cấp](../phụ-thuộc-một-nhà-cung-cấp/): sự phụ thuộc vào một nhà cung cấp.
* Các quyết định chưa được đưa ra: chiến lược bộ nhớ đệm và bản sao; lưu giữ dữ liệu.

## Ghi chú liên quan

* Các mục còn mở: thu thập số liệu sản xuất; viết ra đặc điểm khối lượng công việc; lập danh sách rút gọn ứng viên cho bài đo chuẩn.
* Tìm hiểu thêm:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
