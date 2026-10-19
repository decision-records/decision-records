# Extreme Programming

* Trạng thái: yêu cầu góp ý
* Ngày: 2025-10-06
* Người ra quyết định: Trưởng bộ phận Kỹ thuật (cần xác nhận)
* Chủ sở hữu: Quản lý Kỹ thuật

Tóm tắt: Công việc đang thực hiện. Đây là điểm khởi đầu cho một nhóm kỹ thuật đang cân nhắc cách đưa vào các thực hành của Extreme Programming (XP), như phát triển hướng kiểm thử, lập trình theo cặp, tích hợp liên tục và phát hành nhỏ. Nó cho thấy một nhóm có thể đặt câu hỏi, tranh luận các phương án và thu thập thông tin như thế nào. Nó không ghi lại quyết định nào.

## Vấn đề

Các nhóm sản phẩm giao tính năng theo lô lớn, và lỗi được phát hiện muộn rất tốn kém: một tỷ lệ đáng kể các bản phát hành cần sửa khẩn cấp sau khi phát hành. Các nhà lãnh đạo kỹ thuật quan tâm đến các thực hành của Extreme Programming, một phương pháp phát triển phần mềm agile nhấn mạnh các thực hành kỹ thuật như phát triển hướng kiểm thử, lập trình theo cặp, tích hợp liên tục, phát hành nhỏ, tái cấu trúc mã và sở hữu mã tập thể.

Các thực hành này hỗ trợ lẫn nhau, nhưng cũng thay đổi cách các kỹ sư làm việc hằng ngày. Áp dụng tất cả cùng lúc có khả năng gặp sự kháng cự và được thực hiện hời hợt. Các câu hỏi cần trả lời:

* Chúng ta muốn giải quyết những vấn đề nào (lỗi phát hiện muộn, phản hồi chậm, tri thức nằm trong tay một vài người), và những thực hành nào xử lý chúng?
* Các thực hành nên được đưa vào theo thứ tự nào, và ai đi trước?
* Chúng ta sẽ đo gì để biết các thực hành có giúp ích?
* Sự cân bằng đúng giữa một tiêu chuẩn chung và lựa chọn của từng nhóm là gì?

## Giả định

Mỗi giả định là một điều cần kiểm chứng.

* **Lỗi phát hiện muộn chủ yếu do thiếu phản hồi tự động nhanh.** Kiểm chứng: lần theo một mẫu các bản sửa khẩn cấp về nơi lỗi lẽ ra có thể được phát hiện.
* **Các thực hành nền tảng (tích hợp liên tục và kiểm thử tự động) làm cho các thực hành khác khả thi.** Kiểm chứng: hỏi các nhóm đã thử các thực hành này cái nào phụ thuộc vào cái nào.
* **Các kỹ sư sẽ áp dụng các thực hành mà họ thấy hiệu quả ở nhóm bên cạnh.** Kiểm chứng: hỏi các kỹ sư điều gì sẽ thuyết phục họ và điều gì khiến họ lo lắng.
* **Tỷ lệ sửa khẩn cấp sau phát hành là thước đo tiến độ hợp lý.** Kiểm chứng: thống nhất cách đếm nó, và kiểm tra các thước đo khác (thời gian dẫn, tỷ lệ thay đổi thất bại) không kể một câu chuyện khác.

## Ràng buộc

* Các nhóm vẫn phải giao tính năng trong khi học, nên sản lượng trong giai đoạn đầu có lẽ sẽ thấp hơn.
* Các kỹ sư nên giữ quyền lựa chọn cách ghép cặp và công cụ họ dùng.
* Hạ tầng xây dựng và kiểm thử hiện có có thể cần được cải thiện trước khi tích hợp liên tục trở nên hữu ích.
* Chưa rõ, cần xác nhận: hiện nay bao nhiêu phần của cơ sở mã có thể kiểm thử, và các ràng buộc pháp quy hoặc từ khách hàng có ảnh hưởng đến tần suất phát hành không.

## Các phương án đã xem xét

Với mỗi phương án, hãy ước tính giá trị, chi phí, mốc thời gian và nhu cầu năng lực, và ghi lại bằng chứng nào sẽ thay đổi suy nghĩ của nhóm.

* **Áp dụng tất cả các thực hành cùng lúc ở mọi nhóm.**
  * Giá trị: các thực hành củng cố lẫn nhau.
  * Yếu tố chi phí: đào tạo; giao hàng chậm hơn trong khi học; công việc về công cụ trên mọi nhóm cùng lúc.
  * Rủi ro: thay đổi lớn; các nhóm không có kỹ năng nền tảng có thể bỏ các thực hành trong vài tuần.
* **Áp dụng các thực hành theo thứ tự được chọn, từng nhóm một.** Ví dụ tích hợp liên tục và kiểm thử tự động trước (nền tảng), rồi phát hành nhỏ và lập trình theo cặp, rồi phát triển hướng kiểm thử.
  * Giá trị: mỗi thực hành có thời gian ổn định; các thực hành đầu làm cho các thực hành sau khả thi; kinh nghiệm của nhóm đầu hướng dẫn những nhóm còn lại.
  * Yếu tố chi phí: huấn luyện; thời gian ghép cặp và viết kiểm thử được đưa vào kế hoạch; công việc hạ tầng cho đường ống.
  * Hình thái mốc thời gian: tuần tự, nhóm kế tiếp tham gia khi nhóm trước đã giữ đường ống phát hành khỏe mạnh trong một khoảng thời gian đã nêu.
  * Năng lực cần có: một huấn luyện viên; đường ống xây dựng đáng tin cậy; sự hỗ trợ của quản lý trước sự sụt giảm sản lượng.
  * Rủi ro: chậm; các thực hành được áp dụng không đồng đều.
* **Chỉ áp dụng các thực hành dễ.** Ít công sức, nhưng có thể bỏ qua những thực hành có lợi ích lớn nhất, như kiểm thử tự động.
* **Áp dụng một bộ thực hành khác** (ví dụ những thực hành được nghiên cứu DORA về phân phối phần mềm mô tả, như phân phối liên tục, phát triển trên nhánh chính và kiến trúc liên kết lỏng) và coi XP là một nguồn trong số nhiều nguồn.
* **Không làm gì mới** và xử lý trực tiếp các nguyên nhân cụ thể của lỗi. Một mức cơ sở thực sự.

## Lập luận

Các điểm tranh luận mà nhóm nên lường trước:

* **Lập trình theo cặp.** Một thực hành mà nhiều kỹ sư dè dặt. Nó giúp ích ở đâu (chia sẻ tri thức, công việc phức tạp), và không giúp ở đâu?
* **Tiêu chuẩn hóa hay để các nhóm chọn?** Các kết quả chung (ít sửa khẩn cấp hơn, phản hồi nhanh hơn) với sự tự do của nhóm về cách đạt được, hay một tiêu chuẩn chặt chẽ hơn?
* **Chất lượng hay tốc độ trong ngắn hạn.** Các nhà lãnh đạo có sẵn sàng chấp nhận sản lượng thấp hơn trong khi các nhóm học không?
* **TDD, phương tiện hay mục đích?** Một số thực hành (như phát triển hướng kiểm thử) còn tranh luận ngay cả giữa những người thực hành có kinh nghiệm. Nhóm nên quyết định thực hành đó giải quyết vấn đề gì trước khi áp dụng.

Cách nhóm có thể đánh giá chi phí và đánh đổi:

1. Tính chi phí của cách tiếp cận hiện tại: công sức dành cho các bản sửa khẩn cấp, trì hoãn do lỗi phát hiện muộn, tác động đến khách hàng. Dùng khoảng theo ngôn ngữ của chính tổ chức.
2. Tính chi phí của chương trình: huấn luyện, đào tạo, thời gian ghép cặp và viết kiểm thử, hạ tầng cho đường ống và sự sụt giảm tạm thời trong giao hàng.
3. Chọn các thước đo trước: tỷ lệ các bản phát hành cần sửa khẩn cấp, thời gian dẫn của thay đổi, tần suất triển khai, thời gian khôi phục dịch vụ (các thước đo DORA) và phản hồi của kỹ sư.
4. So sánh các phương án trong kịch bản tốt nhất, khả dĩ và xấu nhất; hỏi câu trả lời thay đổi thế nào nếu lợi ích xuất hiện muộn hơn hoặc nhỏ hơn mong đợi.
5. Dùng ma trận có trọng số và một phân tích tiền nghiệm (pre-mortem).

## Quyết định

**Chưa quyết định.** Đây là điểm khởi đầu. Nhóm sử dụng nó nên thay phần này bằng quyết định của riêng mình.

Cách gợi ý để đi đến quyết định:

* Xác nhận ai quyết định và vào lúc nào.
* Thống nhất tiêu chí và trọng số trước.
* Thu thập các bằng chứng nêu trên và ghi lại những gì tìm thấy.
* Chia sẻ để lấy ý kiến, sau đó quyết định và cập nhật Trạng thái.

## Tác động

Nếu nhóm chọn cách tiếp cận theo giai đoạn, họ sẽ cần:

* Chỉ định một huấn luyện viên và đề nghị nhóm đầu tiên báo cáo trung thực điều gì có ích và điều gì không.
* Lên kế hoạch thời gian cho việc ghép cặp và cho việc đưa việc viết kiểm thử vào kế hoạch giao hàng.
* Đầu tư vào đường ống xây dựng và kiểm thử trước khi dựa vào nó.
* Thống nhất quy tắc dừng: nếu một thực hành không giúp ích sau một khoảng thời gian đã nêu, nhóm có thể đề xuất dừng nó và ghi lại lý do.
* Giữ quyền lựa chọn của kỹ sư về cách ghép cặp và công cụ dùng; các thực hành nên đặt ra kết quả, không phải mọi chi tiết về cách đạt được nó.

## Các quyết định liên quan

* [Tuyên ngôn Agile](../tuyên-ngôn-agile/): quyết định rộng hơn về các giá trị mà những thực hành này hỗ trợ.
* [Chọn các khung làm việc công nghệ thông tin của chúng ta](../khung-làm-việc-công-nghệ-thông-tin/): XP phù hợp thế nào với các khung khác.
* Các quyết định chưa được đưa ra: đầu tư đường ống và công cụ; mô hình sở hữu mã.

## Ghi chú liên quan

* Các mục còn mở: lấy mẫu các bản sửa khẩn cấp gần đây; hỏi các kỹ sư về mối lo của họ với ghép cặp và kiểm thử; kiểm tra đường ống xây dựng hiện làm được gì.
* Tìm hiểu thêm:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Đọc: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
