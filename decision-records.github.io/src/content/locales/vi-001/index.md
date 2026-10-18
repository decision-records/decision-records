# Bản ghi quyết định (DR)

Bản ghi quyết định (DR) là một cách để khởi xướng, tranh luận và lưu trữ một lựa chọn quan trọng, cùng với bối cảnh và hệ quả của nó.

Mục lục:

- [Bản ghi quyết định là gì?](#bản-ghi-quyết-định-là-gì)
- [Mẫu bản ghi quyết định](#mẫu-bản-ghi-quyết-định)
- [Cách bắt đầu sử dụng bản ghi quyết định](#cách-bắt-đầu-sử-dụng-bản-ghi-quyết-định)
- [Vì sao bản ghi quyết định tốt hơn ghi chú thông thường?](#vì-sao-bản-ghi-quyết-định-tốt-hơn-ghi-chú-thông-thường)
- [Cách bắt đầu sử dụng bản ghi quyết định với các công cụ](#cách-bắt-đầu-sử-dụng-bản-ghi-quyết-định-với-các-công-cụ)
- [Kỹ năng trên AI](#kỹ-năng-trên-ai)
- [Gợi ý để viết bản ghi quyết định tốt](#gợi-ý-để-viết-bản-ghi-quyết-định-tốt)
- [Lời khuyên làm việc nhóm cho bản ghi quyết định](#lời-khuyên-làm-việc-nhóm-cho-bản-ghi-quyết-định)
- [Câu hỏi làm việc nhóm cho bản ghi quyết định](#câu-hỏi-làm-việc-nhóm-cho-bản-ghi-quyết-định)
- [Thông tin thêm](#thông-tin-thêm)

Nội dung của kho lưu trữ này:

- [hướng-dẫn](hướng-dẫn) - bản ghi quyết định là gì, vì sao mọi người dùng nó, vòng đời, quản trị và nhiều nội dung khác.
- [mẫu](mẫu) - mẫu sao chép và dán, có định dạng Markdown và các gợi ý từng bước.
- [bài-thực-hành](bài-thực-hành) - hướng dẫn thực hành từng bước: viết bản ghi quyết định đầu tiên của bạn trong chưa đầy 20 phút.
- [ví-dụ](ví-dụ) - các ví dụ điểm khởi đầu (công việc đang thực hiện, không phải quyết định đã hoàn tất) về các quyết định chiến lược, bán hàng, tiếp thị, sản phẩm, nhân sự, rủi ro, dự án và công nghệ.
- [danh-mục-kiểm-tra](danh-mục-kiểm-tra): các danh mục kiểm tra để quyết định có nên viết một bản ghi hay không, viết cho tốt, xem xét, và vận hành thực hành này trong toàn tổ chức.
- [trợ-giúp](trợ-giúp) — câu hỏi thường gặp, khắc phục sự cố và bảng thuật ngữ cho những câu hỏi phổ biến mà các nhà lãnh đạo nêu ra khi áp dụng nội dung này.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — đặc tả của kho lưu trữ này: bố cục, nội dung, ngôn ngữ, trang web và tác tử.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — nội dung, mỗi ngôn ngữ một thư mục; `en-us` là nguồn chuẩn tiếng Anh.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — các Claude Skills áp dụng mẫu và danh mục kiểm tra của kho lưu trữ này bên trong trợ lý AI: một cho việc viết bản ghi quyết định, một cho việc bảo trì kho lưu trữ này.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — mã nguồn SvelteKit 3 của [decision-records.github.io](https://decision-records.github.io), trang quảng bá các kỹ năng nêu trên.

## Bản ghi quyết định là gì?

**Bản ghi quyết định** (DR) là một cách để khởi xướng, tranh luận và lưu trữ một lựa chọn quan trọng, cùng với bối cảnh và hệ quả của nó.

**Nhật ký quyết định** (DL) là tập hợp tất cả các DR được tạo và duy trì cho một dự án (hoặc tổ chức) cụ thể.

**Quyết định** trong ngữ cảnh này là lựa chọn của một tổ chức nhằm đáp ứng một yêu cầu quan trọng.

**Yêu cầu quan trọng** (SR) là nhu cầu của một dự án có tác động đo lường được lên hệ thống của dự án.

Tất cả các thuật ngữ này thuộc chủ đề **quản lý tri thức** (KM).

Mục tiêu của tài liệu này là cung cấp một cái nhìn tổng quan nhanh về bản ghi quyết định.

## Bản ghi quyết định là một cách làm việc của tổ chức

Ở bất cứ nơi nào một lựa chọn khó đảo ngược, ảnh hưởng đến người khác hoặc sẽ bị chất vấn sau này, nơi đó xứng đáng có một bản ghi quyết định.

- Chiến lược: gia nhập hoặc rút khỏi một thị trường, chọn thế trận tăng trưởng hay lợi nhuận, đặt một canh bạc 3 năm
- Bán hàng: thay đổi mô hình lãnh thổ, chọn CRM, tái cấu trúc chế độ thù lao
- Tiếp thị: định vị lại thương hiệu, chọn tổ hợp kênh, chọn thuê đại lý hay tự làm nội bộ
- Sản phẩm: đặt mô hình giá, chọn tự xây hay mua, ngừng một tính năng hoặc dòng sản phẩm
- Tài chính: chọn cấu trúc tài trợ, đặt chính sách phân bổ vốn
- Nhân sự: đặt chính sách làm việc từ xa, thiết kế lại cấp bậc và khung lương
- Rủi ro và pháp lý: chấp nhận, giảm thiểu hoặc chuyển giao một rủi ro cụ thể; chọn hạn mức tập trung nhà cung cấp
- Vận hành: tự xây hay mua, tự làm hay thuê ngoài, chọn phương pháp luận triển khai
- Quan hệ công chúng: chọn thế trận truyền thông khủng hoảng, đặt chính sách làm việc với truyền thông
- Phát triển nghề nghiệp: đặt chính sách thăng tiến hoặc đầu tư đào tạo
- Công nghệ: chọn nhà cung cấp đám mây, cơ sở dữ liệu, mẫu tích hợp, phương pháp luận phần mềm

Nếu bạn có thể hình dung một người trong nhóm hỏi "khoan, tại sao chúng ta lại làm như thế này?" một năm sau, thì quyết định đó là ứng viên cho một bản ghi quyết định.

## Mẫu bản ghi quyết định

Xem tệp [mẫu](mẫu/index.md) của chúng tôi, sử dụng các mục chính sau:

- **Tiêu đề**: câu mệnh lệnh ở thì hiện tại, ngắn gọn, tối đa 50 ký tự.

- **Trạng thái**: yêu cầu góp ý | đề xuất | đã chấp thuận | bị từ chối | không còn khuyến nghị | đã bị thay thế

- **Vấn đề**: mô tả vấn đề bạn muốn giải quyết, không để lại câu hỏi nào về lý do.

- **Giả định**: mô tả mọi giả định, tiền đề, yêu cầu xuyên dự án, v.v.

- **Ràng buộc**: ghi lại mọi ràng buộc mà quyết định này có thể đặt ra cho môi trường.

- **Lập trường**: liệt kê các phương án ứng viên dưới dạng sự kiện và dữ liệu, không phải ý kiến.

- **Ý kiến**: của nhóm và các bên liên quan, cũng như các cố vấn và người đánh giá bên thứ ba.

- **Lựa chọn**: giải thích vì sao bạn chọn một lập trường, với mục đích và trách nhiệm giải trình.

- **Tác động**: nêu các tác động của quyết định, chẳng hạn mọi nhu cầu thay đổi.

- **Liên quan**: chẳng hạn tài liệu tham khảo, công việc xuyên dự án và các nhu cầu tiếp theo.

## Cách bắt đầu sử dụng bản ghi quyết định

Để bắt đầu sử dụng bản ghi quyết định, hãy trao đổi với đồng đội về các lĩnh vực sau.

Xác định quyết định:

- Quyết định khẩn cấp và quan trọng đến mức nào?

- Có phải quyết định ngay bây giờ, hay có thể chờ đến khi biết thêm thông tin?

- Cả kinh nghiệm cá nhân và tập thể, cũng như các phương pháp và thực hành thiết kế được công nhận, đều có thể hỗ trợ việc xác định quyết định.

- Lý tưởng nhất là duy trì một danh sách việc cần làm về quyết định, bổ sung cho danh sách việc cần làm về sản phẩm.

Ra quyết định:

- Có nhiều kỹ thuật ra quyết định, cả loại chung lẫn loại dành riêng cho phần mềm, chẳng hạn lập bản đồ đối thoại.

- Ra quyết định theo nhóm là một chủ đề nghiên cứu sôi động.

Thực thi và bảo đảm tuân thủ quyết định:

- Quyết định phải được truyền đạt tới, và được chấp nhận bởi, các bên liên quan của hệ thống, những người cấp vốn, phát triển và vận hành nó.

- Phong cách viết mã thể hiện rõ kiến trúc và việc xem xét mã tập trung vào các mối quan ngại và quyết định về kiến trúc là hai thực hành có liên quan.

- Quyết định có thể được xem xét lại khi thực hiện những thay đổi đáng kể đối với một hệ thống, chẳng hạn phát triển hệ thống, nâng cấp hệ thống hoặc điều chỉnh hệ thống theo các yêu cầu thay đổi.

Chia sẻ quyết định (tùy chọn):

- Nhiều quyết định lặp lại giữa các dự án.

- Do đó, kinh nghiệm với các quyết định trong quá khứ, cả tốt lẫn xấu, có thể là tài sản tái sử dụng có giá trị khi áp dụng một chiến lược quản lý tri thức rõ ràng.

- Ra quyết định theo nhóm là một chủ đề nghiên cứu sôi động.

Lập tài liệu quyết định:

- Có nhiều mẫu và công cụ để lập kế hoạch và ghi lại quyết định.

- Xem các cộng đồng agile, ví dụ các bản ghi quyết định kiến trúc của M. Nygard.

- Xem các quy trình kỹ thuật phần mềm và thiết kế kiến trúc truyền thống, ví dụ bố cục bảng do IBM UMF và do Tyree và Akerman của CapitalOne đề xuất.

Hướng dẫn quyết định:

- Các bước trên được lấy từ mục của Wikipedia về [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Có nhiều kỹ thuật ra quyết định, cả loại chung lẫn loại dành riêng cho phần mềm và kiến trúc phần mềm, chẳng hạn lập bản đồ đối thoại.

## Vì sao bản ghi quyết định tốt hơn ghi chú thông thường?

Bản ghi quyết định bổ sung một chút cấu trúc cho các ghi chú tự do.

Mẫu bản ghi quyết định bổ sung một danh sách các mục cần bao quát, đóng vai trò như một danh mục kiểm tra.

Kết quả quan trọng là các nhóm có thể dùng bản ghi quyết định và mẫu để cải thiện việc làm việc nhóm: bản ghi quyết định và mẫu đều hoạt động như danh mục kiểm tra, giúp nhóm bảo đảm bao quát mọi khía cạnh và giao tiếp hiệu quả.

Lợi ích của bản ghi quyết định có xu hướng tăng theo quy mô nhóm, sự mở rộng dự án, cơ hội tích hợp, sự tham gia của các bên liên quan, bảo trì dài hạn và sự phát triển theo thời gian.

Ví dụ, chúng tôi dùng bản ghi quyết định với các nhóm lớn, giữa nhiều phòng ban, với nhiều tổ chức đối tác, trong các dự án nhiều năm và ngân sách hàng triệu đô la. Với quy mô và phạm vi như vậy, chúng tôi thích dùng một số hình thức giao tiếp có cấu trúc hơn là ghi chú tự do.

Trong thực tế, chúng tôi cũng thích dùng bản ghi quyết định vì chúng khuyến khích sự tham gia nhiều hơn của đồng đội làm việc từ xa, giao tiếp không đồng bộ nhiều hơn, đánh giá các phương án hiệu quả hơn và tóm tắt nhiều hơn về sau. Tất cả các khía cạnh này cũng giúp đồng đội mới hòa nhập vì các quyết định rõ ràng, đầy đủ, súc tích và được ghi lại.

## Cách bắt đầu sử dụng bản ghi quyết định với các công cụ

Bạn có thể bắt đầu sử dụng bản ghi quyết định với các công cụ theo bất kỳ cách nào bạn muốn.

Ví dụ:

- Nếu bạn thích Google Drive và Google Docs, hãy tạo thư mục `decisions` và mỗi bản ghi quyết định một tài liệu.

- Nếu bạn thích kiểm soát phiên bản mã nguồn, hãy tạo thư mục `decisions` và mỗi bản ghi quyết định một tệp văn bản.

- Nếu bạn thích các công cụ lập kế hoạch dự án, chẳng hạn Atlassian Jira, hãy dùng bộ theo dõi kế hoạch của công cụ đó.

- Nếu bạn thích wiki, chẳng hạn MediaWiki, hãy tạo một wiki bản ghi quyết định, mỗi bản ghi quyết định một trang wiki.

## Kỹ năng trên AI

Nếu bạn dùng [Claude Code](https://claude.com/claude-code) hoặc một tác tử khác hỗ trợ [Claude Skills](https://code.claude.com/docs/en/skills), kho lưu trữ này cung cấp hai kỹ năng trên AI trong [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — dành cho bất kỳ ai viết bản ghi quyết định. Hướng dẫn qua việc một lựa chọn có cần bản ghi hay không, chọn mẫu gọn nhẹ hay toàn diện, soạn thảo, lưu trữ và danh mục kiểm tra trước khi công bố.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — dành cho người bảo trì chính kho lưu trữ này: thêm một ví dụ thực hành, giữ cho mục lục ví dụ và các tham chiếu chéo nhất quán, và các quy ước tệp của kho lưu trữ này.

Để dùng một kỹ năng, hãy sao chép kho lưu trữ này và chép thư mục kỹ năng bạn muốn vào nơi tác tử của bạn nạp kỹ năng dự án (với Claude Code, thường là `.claude/skills/<name>` trong dự án của bạn), rồi nhờ trợ lý sử dụng nó. Xem thêm tại [decision-records.github.io/skills](https://decision-records.github.io/skills/), và xem [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) để biết mã nguồn của trang đó.

## Gợi ý để viết bản ghi quyết định tốt

Đặc điểm của một bản ghi quyết định tốt:

- Tại một thời điểm - Xác định quyết định được đưa ra khi nào

- Tính hợp lý - Giải thích lý do đưa ra quyết định cụ thể đó.

- Bản ghi bất biến - Các quyết định trong một bản ghi quyết định đã được công bố trước đó không nên bị thay đổi.

- Tính cụ thể - Mỗi bản ghi quyết định chỉ nên nói về một quyết định.

Đặc điểm của một bối cảnh tốt trong bản ghi quyết định:

- Giải thích tình hình và các ưu tiên kinh doanh của tổ chức bạn

- Bao gồm lý do và các cân nhắc dựa trên cấu trúc xã hội và kỹ năng của các nhóm bạn.

Đặc điểm của hệ quả tốt trong bản ghi quyết định:

- Cách tiếp cận đúng - "Chúng ta cần bắt đầu làm X thay vì Y"

- Cách tiếp cận sai - Đừng giải thích quyết định theo "Ưu điểm" và "Nhược điểm" của việc đã đưa ra AD cụ thể đó

Một bản ghi quyết định mới có thể thay thế một bản ghi quyết định trước đó:

- Khi một quyết định được đưa ra thay thế hoặc làm mất hiệu lực một bản ghi quyết định trước đó, hãy tạo một quyết định mới và tham chiếu đến quyết định cũ.

## Lời khuyên làm việc nhóm cho bản ghi quyết định

Nếu bạn đang cân nhắc dùng bản ghi quyết định với nhóm của mình, đây là những lời khuyên chúng tôi rút ra từ việc làm việc với nhiều nhóm.

Bạn có cơ hội dẫn dắt đồng đội bằng cách cùng nhau trao đổi về "tại sao", thay vì áp đặt "cái gì". Ví dụ, bản ghi quyết định là cách để các nhóm suy nghĩ thông minh hơn và giao tiếp tốt hơn; bản ghi quyết định không có giá trị nếu chỉ là yêu cầu giấy tờ bị ép buộc sau sự việc.

Một số nhóm thích tên "quyết định" hơn nhiều so với chữ viết tắt "bản ghi quyết định". Khi một số nhóm dùng tên thư mục "decisions", mọi thứ như bừng sáng, và nhóm bắt đầu đưa nhiều thông tin hơn vào thư mục, chẳng hạn quyết định về nhà cung cấp, quyết định lập kế hoạch, quyết định về lịch trình, v.v. Tất cả các loại thông tin này có thể dùng chung một mẫu. Chúng tôi đưa ra giả thuyết rằng mọi người học nhanh hơn với từ ngữ ("quyết định") so với chữ viết tắt ("bản ghi quyết định"), rằng mọi người có động lực hơn để viết tài liệu đang thực hiện khi bỏ chữ "bản ghi", và rằng một số nhà phát triển và quản lý không thích chữ "kiến trúc".

Về lý thuyết, tính bất biến là lý tưởng. Trong thực tế, tính khả biến hiệu quả hơn với các nhóm của chúng tôi. Chúng tôi chèn thông tin mới vào bản ghi quyết định hiện có, kèm dấu ngày và ghi chú rằng thông tin đến sau quyết định. Cách tiếp cận này dẫn đến một "tài liệu sống" mà tất cả chúng tôi có thể cập nhật. Các cập nhật điển hình xảy ra khi chúng tôi có thông tin nhờ đồng đội mới, hoặc dịch vụ mới, hoặc kết quả thực tế từ việc sử dụng, hoặc những thay đổi của bên thứ ba sau sự việc như khả năng của nhà cung cấp, gói giá, thỏa thuận cấp phép, v.v.

## Câu hỏi làm việc nhóm cho bản ghi quyết định

### Ai có thể tạo bản ghi quyết định?

Hãy cân nhắc các lĩnh vực như những người cụ thể, vai trò cụ thể, nhóm cụ thể hoặc phòng ban cụ thể; cũng cân nhắc xem có người, vai trò, nhóm hay phòng ban nào có thể ủy thác một bản ghi quyết định hay không, tức là họ yêu cầu một bản mà người khác sẽ viết.

Câu trả lời mẫu: Bất kỳ ai trong tổ chức của chúng tôi đã đọc trang README về bản ghi quyết định kiến trúc đều có thể đề xuất một bản ghi quyết định, nghĩa là người đó có thể bắt đầu viết và chia sẻ với nhóm.

### Điều gì biện minh cho việc lập một bản ghi quyết định?

Hãy cân nhắc các lĩnh vực như cách làm việc của các nhóm trong tổ chức, cấu trúc hệ thống phần mềm, phối hợp giữa các nhóm, khả năng bảo trì dài hạn, giao diện bên ngoài, bạn muốn ai được hưởng lợi, v.v.

Câu trả lời mẫu: Chúng tôi muốn tạo một bản ghi quyết định khi muốn các nhà phát triển tương lai hiểu "tại sao" của những gì chúng tôi đang làm.

### Điều gì biện minh cho việc không lập một bản ghi quyết định?

Hãy cân nhắc các lĩnh vực như những quyết định không liên quan đến kiến trúc, hoặc nhỏ như rủi ro tối thiểu, tự chứa hay chỉ một nhà phát triển, hoặc đã được bao quát đầy đủ ở nơi khác như trong tiêu chuẩn, chính sách hay tài liệu, hoặc mang tính tạm thời như giải pháp tình thế, bằng chứng khái niệm hay thử nghiệm.

Câu trả lời mẫu: Chúng tôi muốn bỏ qua bản ghi quyết định khi một quyết định bị giới hạn về phạm vi, thời gian, rủi ro và chi phí, hoặc đã được bao quát ở nơi khác.

### Vòng đời của một bản ghi quyết định là gì?

Hãy cân nhắc các lĩnh vực như quy trình tạo, quy trình nghiên cứu, quy trình ra quyết định, quy trình triển khai và quy trình kết thúc. Hãy cân nhắc cách theo dõi vòng đời bản ghi quyết định theo thời gian, chẳng hạn cách chuyển bản ghi từ trạng thái này sang trạng thái tiếp theo, và cách truyền đạt điều này cho các bên liên quan.

Câu trả lời mẫu: Chúng tôi muốn một bản ghi quyết định có năm giai đoạn vòng đời: Khởi xướng → Nghiên cứu → Đánh giá → Triển khai → Duy trì → Kết thúc.

### Tiêu chí cho các bước vòng đời của một bản ghi quyết định là gì?

Hãy cân nhắc các lĩnh vực như tiêu chí chấp nhận cho một bản ghi quyết định, nghĩa là làm sao biết nó đủ tốt để chuyển từ bước vòng đời này sang bước tiếp theo? Vấn đề đã được nêu rõ chưa? Các phương án thay thế đã được xem xét chưa? Các đánh đổi đã được hiểu và ghi lại đủ rõ chưa?
Mọi bối cảnh liên quan đã đầy đủ chưa? Mọi bên liên quan đã tham gia chưa? Mọi phản hồi đã được tiếp nhận chưa?

Câu trả lời mẫu: Chúng tôi muốn một bản ghi quyết định được các bên liên quan biểu quyết khi nhóm đang thực hiện đã 1) hoàn thành nghiên cứu, 2) hoàn thành đánh giá, 3) công bố đề xuất bản ghi quyết định cho các bên liên quan kèm yêu cầu góp ý và khung thời gian một tuần, 4) mọi góp ý của các bên liên quan đã được tiếp nhận và xử lý.

### Những vai trò và trách nhiệm nào tương tác với một bản ghi quyết định?

Hãy cân nhắc các vai trò như người đề xuất, người nghiên cứu, người đánh giá, người xem xét, người phê duyệt, người bảo trì, v.v. Hãy cân nhắc các trách nhiệm như giao tiếp với các bên liên quan, bảo đảm đáp ứng kỳ vọng, chia sẻ trên trang web hoặc mạng nội bộ, và xem xét công việc định kỳ, nhất là khi có thay đổi liên quan.

Câu trả lời mẫu: Chúng tôi muốn mỗi bản ghi quyết định luôn có một người liên hệ chính, một người liên hệ phụ và một nhóm chịu trách nhiệm; những người này chịu trách nhiệm về truyền thông, công bố, bảo trì, xem xét định kỳ ít nhất mỗi năm một lần và việc kết thúc cuối cùng khi cần.

### Quản trị tương tác với một bản ghi quyết định như thế nào?

Hãy cân nhắc các lĩnh vực như cách làm việc của tổ chức, mọi nhu cầu tuân thủ đặc biệt như khía cạnh pháp lý hoặc nhân sự, cách bạn muốn xử lý đồng thuận so với xung đột so với leo thang. Có lĩnh vực, người hay nhóm nào có thể có ảnh hưởng lớn hơn những người khác đối với một bản ghi quyết định, chẳng hạn có thể phê duyệt, biểu quyết hoặc phủ quyết nó không?

Câu trả lời mẫu: Quản trị của một bản ghi quyết định theo thứ tự ưu tiên này: CEO, CTO, CLO, nhóm thực hiện bản ghi quyết định, các chuyên gia trong nhóm am hiểu nhất về ADD. Không ai khác có quyền quản trị trừ khi được mô tả trong bản ghi quyết định.

### Những nguyên tắc nào tương tác với một bản ghi quyết định?

Hãy cân nhắc các lĩnh vực như cách làm việc của tổ chức, gồm di chuyển nhanh hay chậm, đồng thuận hay xung đột trong quyết định, ưa thích rủi ro hay ưa thích an toàn, thảo luận công khai hay riêng tư, v.v.

Câu trả lời mẫu: Chúng tôi dùng các nguyên tắc lãnh đạo: thiên về hành động, bất đồng nhưng cam kết, ước lượng 70% là đủ tốt cho các quyết định dễ đảo ngược và dễ cô lập, và cách làm việc công khai trừ thông tin mật như mô tả trong thỏa thuận bảo mật của tổ chức chúng tôi.

## Thông tin thêm

Giới thiệu:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Mẫu:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Chuyên sâu:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - bài học kiến trúc phần mềm miễn phí hằng tháng

Công cụ:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Hướng dẫn riêng của từng công ty:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Ví dụ:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Video:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Sách:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Xem thêm:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
