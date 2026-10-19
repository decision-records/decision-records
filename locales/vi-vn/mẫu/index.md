# Mẫu bản ghi quyết định

Có hai mẫu, đều là Markdown thuần: hãy sao chép mẫu bạn muốn vào một tệp mới và điền vào.

## Chọn mẫu nào để dùng

Mặc định hãy dùng **mẫu gọn nhẹ**: hầu hết các quyết định chỉ cần sáu trường của nó, và một trang đang phình ra vượt quá mức đó thường là hơn một quyết định.

Chuyển sang **mẫu toàn diện** khi một quyết định có rủi ro cao, có nhiều bên liên quan mà ý kiến của từng người đều quan trọng, hoặc thực sự cần phân tích chi phí/SWOT/PEST có cấu trúc để bảo vệ lựa chọn về sau. Xem [danh mục kiểm tra](../danh-mục-kiểm-tra/index.md#danh-mục-kiểm-tra-quyết-định-này-có-cần-bản-ghi-quyết-định-không) cho câu hỏi rộng hơn là liệu một quyết định có cần bản ghi hay không, và [hướng dẫn](../hướng-dẫn/index.md#cấu-trúc-của-một-bản-ghi-quyết-định) để biết các trường của hai mẫu tương ứng với nhau thế nào.

## Mẫu gọn nhẹ

```markdown
# Tiêu đề (ngắn, thì hiện tại, chủ động, tối đa khoảng 50 ký tự)

- Trạng thái: yêu cầu góp ý | đề xuất | đã chấp thuận | bị từ chối | không còn khuyến nghị | đã bị thay thế
- Ngày: YYYY-MM-DD
- Người ra quyết định: [tên hoặc vai trò có thẩm quyền chấp thuận quyết định này]
- Chủ sở hữu: [người duy trì và xem xét định kỳ bản ghi này]

## Bối cảnh

Mô tả tình huống và các ràng buộc khiến quyết định này cần thiết, viết sao cho người đọc không nhớ gì về cuộc họp vẫn hiểu vì sao câu hỏi nảy sinh.

## Các phương án đã xem xét

Liệt kê các phương án thay thế thực tế, kể cả "không làm gì" nếu phù hợp, dưới dạng sự kiện và đánh đổi, không phải một danh sách làm nền khiến phương án được chọn trông hiển nhiên đúng.

## Quyết định

Nêu lựa chọn bằng ngôn ngữ giản dị, chủ động: "Chúng tôi sẽ làm X." Không phải bản tóm tắt ưu và nhược điểm, mà là một tuyên bố rõ ràng về điều đã được chọn.

## Hệ quả

Nêu điều gì thay đổi do kết quả đó: chi phí, rủi ro, các quyết định tiếp theo và mọi thứ phải từ bỏ khi không chọn phương án thay thế. Hãy viết như "bây giờ chúng ta làm X thay vì Y", không phải bản tổng kết ưu/nhược điểm của quyết định đã đưa ra.
```

Xem [bài thực hành](../bài-thực-hành/index.md) để có hướng dẫn đầy đủ về mẫu này, và [ví-dụ/index.md](../ví-dụ/index.md) để xem các ví dụ đã điền hoàn chỉnh.

## Mẫu toàn diện

```markdown
# Tiêu đề (ngắn, thì hiện tại, chủ động, tối đa khoảng 50 ký tự)

- Trạng thái: yêu cầu góp ý | đề xuất | đã chấp thuận | bị từ chối | không còn khuyến nghị | đã bị thay thế
- Ngày: YYYY-MM-DD
- Người ra quyết định: [tên hoặc vai trò có thẩm quyền chấp thuận quyết định này]
- Chủ sở hữu: [người duy trì và xem xét định kỳ bản ghi này]

Tóm tắt: một hoặc hai câu về lập trường hiện tại và mọi nhu cầu còn mở.

## Vấn đề

Mô tả vấn đề bạn muốn giải quyết. Đừng để lại câu hỏi nào về lý do vì sao bạn giải quyết vấn đề này ngay bây giờ.

Hãy theo cách tiếp cận tối giản. Chỉ giải quyết những vấn đề cần được giải quyết tại các thời điểm khác nhau trong vòng đời.

Bạn có thể muốn thêm một số thông tin nhóm, chẳng hạn thẻ, từ khóa, liên kết cơ sở tri thức, v.v.

## Giả định

Mô tả mọi giả định nền tảng trong môi trường mà bạn đang ra quyết định.

Hãy bảo đảm giải quyết mọi thuộc tính chất lượng liên quan, còn gọi là yêu cầu liên chức năng.

Ví dụ về giả định có thể liên quan đến phạm vi, chi phí, lịch trình, công nghệ, nguồn lực sẵn có, nhu cầu chất lượng dịch vụ, thỏa thuận mức dịch vụ, v.v.

Lưu ý rằng các ràng buộc môi trường (chẳng hạn tiêu chuẩn công nghệ được chấp nhận, kiến trúc doanh nghiệp, các mẫu thường dùng, v.v.) có thể giới hạn những phương án bạn xem xét.

## Ràng buộc

Ghi lại mọi ràng buộc bổ sung đối với môi trường mà quyết định này có thể đặt ra.

Hãy bảo đảm giải quyết mọi thuộc tính chất lượng liên quan, còn gọi là yêu cầu liên chức năng, như trên.

Ví dụ về ràng buộc có thể liên quan đến lựa chọn nền tảng, lựa chọn nhà cung cấp, mức độ dễ đảo ngược quyết định, v.v.

## Các phương án đã xem xét (Lập trường)

Liệt kê các lập trường, tức là các phương án khả thi mà bạn đang xem xét hoặc đã xem xét.

Dùng sự kiện và dữ liệu, không dùng ý kiến. Các lập trường thường cần giải thích dài, đôi khi thậm chí cần mô hình và sơ đồ.

Danh sách này không cần đầy đủ; tuy nhiên, bạn không muốn nghe câu hỏi "Bạn đã nghĩ đến… chưa?" trong buổi xem xét cuối cùng, vì điều đó dẫn đến mất uy tín và các quyết định kiến trúc khác bị nghi ngờ.

Phần này cũng giúp bảo đảm rằng bạn đã nghe ý kiến của người khác; nêu rõ các ý kiến khác giúp thu hút những người ủng hộ họ vào quyết định của bạn.

### Phân tích chi phí (tùy chọn)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Ví dụ:

- Khởi tạo, chẳng hạn chi phí thiết lập, thời gian và nguồn lực.

- Vận hành, chẳng hạn hỗ trợ và bảo trì

- Đào tạo, chẳng hạn nâng cao kỹ năng và quản lý thay đổi

- Cấp phép, chẳng hạn thỏa thuận hợp đồng và cam kết pháp lý

- Đo lường mức dùng, chẳng hạn băng thông và mức sử dụng CPU

### Phân tích SWOT (tùy chọn)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

- Điểm mạnh

- Điểm yếu

- Cơ hội

- Thách thức

### Phân tích PEST (tùy chọn)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

- Yếu tố chính trị

- Yếu tố kinh tế

- Yếu tố xã hội

- Yếu tố công nghệ

Một số nhóm thích thêm các mục sau thành danh mục riêng:

- Yếu tố pháp lý - chúng tôi thích đưa vào yếu tố chính trị hơn.

- Yếu tố quy định - chúng tôi thích đưa vào yếu tố chính trị hơn.

- Yếu tố môi trường - chúng tôi thích đưa vào yếu tố kinh tế hơn.

- Yếu tố nhân khẩu học - chúng tôi thích đưa vào yếu tố xã hội hơn.

### Phân tích khác (thêm ý tưởng của bạn tại đây)

Thêm ý tưởng của bạn tại đây...

## Ý kiến

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

- Của nhóm, lý tưởng là do chính đồng đội viết.

- Của các bên liên quan nội bộ khác, lý tưởng là do chính bên liên quan viết.

- Của những người bên ngoài, chẳng hạn cố vấn, người đánh giá, người xem xét bên thứ ba, v.v.

Với mỗi ý kiến, hãy nêu rõ:

- Ai đưa ra ý kiến

- Những ứng viên nào khác đã được xem xét,

- Tác giả đã đánh giá các ứng viên như thế nào?

- Vì sao tác giả chọn người thắng cuộc?

- Từ đó đến nay đã xảy ra điều gì?

- Với những gì biết bây giờ, bạn sẽ khuyên mọi người làm khác đi điều gì?

### Tiêu đề ý kiến 1 (thêm ý kiến của bạn tại đây)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Giải thích ý kiến của bạn tại đây.

### Tiêu đề ý kiến 2 (thêm ý kiến của bạn tại đây)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Giải thích ý kiến của bạn tại đây.

### Tiêu đề ý kiến 3 (thêm ý kiến của bạn tại đây)

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Giải thích ý kiến của bạn tại đây.

## Lập luận

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Giải thích vì sao bạn chọn một lập trường.

Quyết định nên hướng theo mục đích. Để thể hiện trách nhiệm giải trình, hãy ánh xạ rõ ràng các quyết định của bạn với các mục tiêu hoặc yêu cầu.

Lập luận có lẽ quan trọng không kém chính quyết định.

Đây không cần là một bản viết đầy đủ; tuy nhiên, bạn không muốn nghe câu hỏi "Bạn đã nghĩ đến… chưa?" trong buổi xem xét cuối cùng, vì (như trên) điều đó dẫn đến mất uy tín và các quyết định kiến trúc khác bị nghi ngờ.

## Tác động

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Nêu rõ các tác động của quyết định của bạn. Điều này có thể rất hiệu quả trong việc tạo sự đồng thuận và xây dựng lộ trình thực hiện.

Ví dụ, một quyết định có thể làm nảy sinh nhu cầu đưa ra các quyết định khác, tạo ra yêu cầu mới hoặc sửa đổi yêu cầu hiện có; đặt thêm ràng buộc cho môi trường; đòi hỏi đàm phán lại phạm vi hoặc lịch trình với khách hàng; hoặc đòi hỏi đào tạo thêm nhân sự.

## Các quyết định liên quan

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Liệt kê mọi quyết định liên quan tại đây.

Chúng tôi nhận thấy trong thực tế, ma trận truy vết, cây quyết định hoặc siêu mô hình hữu ích hơn. Siêu mô hình hữu ích để thể hiện các mối quan hệ phức tạp bằng sơ đồ (chẳng hạn các mô hình Rose).

## Các yêu cầu liên quan

Tóm tắt: giải thích ngắn gọn phần này, và lý tưởng là nêu bật các giá trị ngoại lệ.

Liệt kê mọi yêu cầu liên quan tại đây.

Chúng tôi thấy tham chiếu một ma trận truy vết tiện hơn. Bạn có thể đánh giá đóng góp của từng quyết định vào việc đáp ứng từng yêu cầu, rồi đánh giá mức độ yêu cầu được đáp ứng qua mọi quyết định. Nếu một quyết định không đóng góp vào việc đáp ứng một yêu cầu, thì đừng đưa ra quyết định đó.

## Các sản phẩm liên quan

Liệt kê mọi sản phẩm bàn giao liên quan tại đây.

Ví dụ là mọi tài liệu phạm vi, tài liệu kế hoạch, mô hình quy trình kinh doanh, v.v. mà quyết định này tác động tới.

## Các nguyên tắc liên quan

Nếu doanh nghiệp có một bộ nguyên tắc đã thống nhất, hãy bảo đảm quyết định nhất quán với một hoặc nhiều nguyên tắc trong số đó. Điều này giúp bảo đảm sự thống nhất giữa các lĩnh vực hoặc hệ thống.

## Ghi chú liên quan

Vì các quy trình ra quyết định có thể tốn nhiều thời gian, chúng tôi thấy hữu ích khi ghi lại những ghi chú và vấn đề mà nhóm thảo luận trong quá trình trao đổi.
```
