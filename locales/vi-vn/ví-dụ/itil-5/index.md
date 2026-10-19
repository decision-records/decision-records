# ITIL 5

* Trạng thái: yêu cầu góp ý
* Ngày: 2026-09-30
* Người ra quyết định: Giám đốc Thông tin (CIO) (cần xác nhận)
* Chủ sở hữu: Trưởng bộ phận Quản lý dịch vụ CNTT

Tóm tắt: Công việc đang thực hiện. Đây là điểm khởi đầu cho một tổ chức CNTT đang cân nhắc áp dụng ITIL 5 cho quản lý dịch vụ CNTT như thế nào và theo thứ tự nào. Nó cho thấy một nhóm có thể đặt câu hỏi, tranh luận các phương án và thu thập thông tin như thế nào. Nó không ghi lại quyết định nào và không nhắc lại nội dung của ITIL 5.

## Vấn đề

Bàn dịch vụ CNTT và các nhóm xung quanh đã lớn lên mà không có cách làm việc chung: sự cố, yêu cầu và thay đổi được các nhóm khác nhau xử lý khác nhau, và các sự cố lặp lại hiếm khi được phân tích. Ban lãnh đạo quan tâm đến việc dựa quản lý dịch vụ CNTT trên ITIL, hướng dẫn được dùng rộng rãi cho quản lý dịch vụ CNTT, ở phiên bản mới nhất (ITIL 5), để các nhóm nội bộ, nhà cung cấp và kiểm toán viên cùng chia sẻ thực hành và từ vựng.

ITIL 5 còn mới và đang được phát hành theo từng giai đoạn, nên nhóm trước hết phải xác lập cái gì thực sự đã có và ổn định. Các câu hỏi cần trả lời:

* Chúng ta đang cố giải quyết vấn đề gì, và ITIL 5 có phải cách đúng để giải quyết không, hay tổ chức sẽ được phục vụ tốt hơn khi áp dụng một số thực hành chọn lọc, giữ phiên bản đã biết, hoặc điều chỉnh theo tiêu chuẩn quốc tế ISO/IEC 20000-1?
* Nếu nhóm tiến hành, theo thứ tự nào và với nhịp độ nào?
* Chúng ta cần làm được gì (năng lực, công cụ, dữ liệu) trước mỗi bước?

## Giả định

Mỗi giả định là một điều cần kiểm chứng.

* **Nỗi đau chủ yếu nằm ở một vài thực hành** (ví dụ xử lý sự cố, yêu cầu và thay đổi). Kiểm chứng: xem một mẫu các sự cố và thay đổi gần đây và lập bản đồ nơi thời gian và chất lượng bị mất.
* **Các thực hành có thể được áp dụng riêng lẻ** chứ không chỉ theo gói. Kiểm chứng: đọc hướng dẫn của khung và trao đổi với các tổ chức đã áp dụng theo từng giai đoạn.
* **Bàn dịch vụ có thể đào tạo lại trong khi vẫn vận hành dịch vụ.** Kiểm chứng: ước tính thời gian mỗi thực hành đòi hỏi từ nhân viên, so với thời gian họ có.
* **Nhà cung cấp và kiểm toán viên sẽ coi trọng một từ vựng chung.** Kiểm chứng: hỏi những đơn vị chính xem hiện họ dùng gì và kỳ vọng gì.
* **Tài liệu ITIL 5 đã đủ chín muồi để áp dụng ngay bây giờ hay chưa.** Kiểm chứng: kiểm tra những gì đã được công bố và chứng nhận cho đến nay, và những gì còn sắp tới.

## Ràng buộc

* Dịch vụ phải tiếp tục chạy trong mọi thay đổi; bàn dịch vụ không thể dừng lại để đào tạo lại.
* Thay đổi công cụ nên giới hạn ở những gì một bước đòi hỏi; thay đổi nền tảng lớn là một quyết định riêng.
* Cách làm việc cũ và mới sẽ cùng tồn tại một thời gian. Nhóm nên nêu thời gian đó chấp nhận được là bao lâu.
* Chưa rõ, cần xác nhận: mô hình chi phí cấp phép và đào tạo của khung, điều khoản hợp đồng nhà cung cấp đề cập đến một khung nhất định, và mọi kỳ vọng về kiểm toán hoặc pháp quy.

## Các phương án đã xem xét

Với mọi phương án, nhóm nên ước tính giá trị, chi phí, mốc thời gian và nhu cầu năng lực, và ghi lại bằng chứng sẽ thay đổi suy nghĩ của họ.

* **Áp dụng mọi thứ cùng lúc ở tất cả các nhóm.**
  * Giá trị: một cách làm việc chung sớm nhất.
  * Yếu tố chi phí: đào tạo cho toàn bộ nhân viên; thiết kế lại quy trình cho mọi thực hành; thay đổi công cụ; năng lực mất đi trong khi các nhóm đào tạo lại; chi phí đảo ngược một khởi đầu kém.
  * Hình thái mốc thời gian: kế hoạch ngắn, phục hồi dài nếu diễn ra kém.
  * Năng lực cần có: lãnh đạo thay đổi mạnh và đủ năng lực dư để hấp thụ thay đổi.
* **Áp dụng theo thực hành**, bắt đầu nơi nỗi đau lớn nhất và người dùng bị ảnh hưởng nhiều nhất (thường là xử lý sự cố và yêu cầu), rồi thay đổi, rồi phân tích vấn đề và cải tiến liên tục, với mỗi giai đoạn có thước đo riêng.
  * Giá trị: mỗi giai đoạn dạy nhóm điều cần đổi ở giai đoạn sau; thành quả sớm hiển hiện với người dùng.
  * Yếu tố chi phí: chương trình tổng thể dài hơn; chạy song song thực hành cũ và mới; đào tạo lặp lại; duy trì các thước đo kết thúc.
  * Hình thái mốc thời gian: một chuỗi giai đoạn, mỗi giai đoạn đủ dài để thấy thay đổi đo được trước khi giai đoạn sau bắt đầu.
  * Năng lực cần có: dữ liệu dịch vụ đáng tin cậy (thời gian giải quyết, tỷ lệ sửa đúng ngay lần đầu, tỷ lệ thay đổi gây ra sự cố) và một chủ sở hữu cho mỗi thực hành.
* **Áp dụng theo nhóm**: một nhóm áp dụng mọi thực hành trước như thí điểm, rồi các nhóm khác theo sau.
  * Giá trị: một ví dụ hoạt động hoàn chỉnh sớm.
  * Yếu tố chi phí: một dịch vụ bị chia thành hai cách làm việc trong khi thí điểm chạy; việc bàn giao giữa nhóm thí điểm và các nhóm khác trở nên khó hơn.
  * Rủi ro: gây nhầm lẫn cho người dùng và nhà cung cấp; bối cảnh của nhóm thí điểm có thể không điển hình.
* **Điều chỉnh theo ISO/IEC 20000-1 thay cho, hoặc song song với, ITIL.** Một tiêu chuẩn yêu cầu có thể chứng nhận cho hệ thống quản lý dịch vụ, mà một số tổ chức ưa dùng cho kiểm toán và bảo đảm nhà cung cấp.
  * Giá trị: được công nhận bên ngoài; yêu cầu rõ ràng.
  * Yếu tố chi phí: công sức đánh giá và chứng nhận; tài liệu hóa.
  * Rủi ro: có thể khuyến khích tư duy tuân thủ hơn là cải tiến.
* **Chưa thay đổi khung nào** và xử lý trực tiếp các nỗi đau cụ thể. Một phương án cơ sở thực sự để tính chi phí trung thực.

## Lập luận

Các điểm tranh luận mà nhóm nên lường trước:

* **Khung hay vấn đề?** Mục tiêu là áp dụng một khung, hay giảm sự cố lặp lại và thay đổi chậm? Hãy chọn phương án được đánh giá theo điều thứ hai.
* **Nhịp độ hay năng lực.** Chương trình nhanh hơn có lợi ích sớm hơn nhưng lấy chính những người đó ra khỏi việc vận hành dịch vụ.
* **Rủi ro phiên bản.** Áp dụng thứ mới phát hành đi kèm ít ví dụ thực tế và tài liệu đào tạo hơn; giữ phiên bản đã biết an toàn hơn nhưng có thể lỗi thời.
* **Từ vựng hay thực hành.** Dùng cùng từ ngữ với nhà cung cấp dễ hơn thay đổi cách làm việc. Điều nào quan trọng hơn?

Cách nhóm có thể đánh giá chi phí và đánh đổi:

1. Xây mô hình chi phí theo ngôn ngữ của chính tổ chức. Một lần: đào tạo, thiết kế quy trình, thay đổi công cụ, tư vấn, người thay thế. Định kỳ: giấy phép, thời gian của chủ sở hữu quy trình, kiểm toán. Ẩn: giảm thông lượng trong giai đoạn chuyển đổi, thay đổi hợp đồng nhà cung cấp. Nêu khoảng, không phải con số đơn lẻ.
2. Chọn các thước đo lợi ích trước khi bắt đầu, để thành công không bị định nghĩa sau: thời gian giải quyết, giải quyết ngay lần đầu, tỷ lệ thay đổi gây sự cố, tỷ lệ sự cố lặp lại, mức hài lòng của người dùng, phát hiện kiểm toán.
3. Ước tính thời gian hoàn vốn trong kịch bản tốt nhất, khả dĩ và xấu nhất, và kiểm tra câu trả lời nhạy đến đâu với những giả định nhóm ít chắc chắn nhất.
4. Chấm điểm các phương án bằng ma trận có trọng số (giá trị, chi phí, tốc độ, rủi ro, độ phù hợp với nhà cung cấp, năng lực cần có).
5. Hỏi mỗi phương án tác động thế nào đến khả năng đảo ngược: phương án nào có thể dừng sau một giai đoạn mà không lãng phí công việc?

## Quyết định

**Chưa quyết định.** Đây là điểm khởi đầu. Nhóm sử dụng nó nên thay phần này bằng quyết định của riêng mình.

Cách gợi ý để đi đến quyết định:

* Xác nhận ai quyết định và vào lúc nào.
* Chốt tiêu chí và trọng số của chúng trước.
* Thu thập các bằng chứng nêu trên, gồm những gì hiện có cho ITIL 5.
* Công bố bản nháp để lấy ý kiến kèm hạn chót, sau đó quyết định và cập nhật Trạng thái.

## Tác động

Nếu nhóm chọn cách tiếp cận theo giai đoạn, họ sẽ cần:

* Công bố các thước đo kết thúc cho từng giai đoạn và báo cáo thường xuyên theo chúng cho nhà bảo trợ.
* Đào tạo nhân viên về từng thực hành ngay trước giai đoạn của nó.
* Giữ các thực hành chưa nằm trong phạm vi chạy như hiện nay, và nói rõ điều đó.
* Trì hoãn mọi giao dịch mua nền tảng quản lý dịch vụ lớn cho đến khi có bằng chứng từ các giai đoạn đầu.
* Quyết định điều gì xảy ra khi một giai đoạn không đạt thước đo: lặp lại, điều chỉnh hoặc dừng.

## Các quyết định liên quan

* [Khung làm việc kinh doanh](../khung-làm-việc-kinh-doanh/): cùng mô hình áp dụng theo giai đoạn cho một khung khác.
* [Chọn các khung làm việc công nghệ thông tin của chúng ta](../khung-làm-việc-công-nghệ-thông-tin/): ITIL phù hợp thế nào với các khung khác mà nhóm đang cân nhắc.
* Các quyết định chưa được đưa ra: công cụ; thay đổi hợp đồng nhà cung cấp; có chứng nhận hay không.

## Ghi chú liên quan

* Các mục còn mở: xác nhận hiện nay có gì cho ITIL 5; liệt kê các thực hành hiện làm tốt và làm kém; hỏi các nhà cung cấp và kiểm toán viên chính họ kỳ vọng gì.
* Tìm hiểu thêm:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO: [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Đọc: [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
