<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="list-menu my-5 p-2 border border-1 border-dark">
      <div class="container-lg">
        <ol>
          <li><a href="">Đồng sơn ô tô là gì?</a></li>
          <li><a href="">Khi nào cần làm đồng sơn xe ô tô?</a></li>
          <li>
            <a href="">Quy trình đồng sơn ô tô chuẩn 6 công đoạn</a>
            <ul>
              <li><a href="">Đầu tiên là tra mã màu</a></li>
              <li><a href="">Xác định khối lượng sơn và phẩm chất màu sơn xe</a></li>
              <li><a href="">Công thức và lượng sơn</a></li>
              <li><a href="">Kỹ thuật pha sơn</a></li>
              <li><a href="">Xử lý thông tin màu sơn, váng và đông kết</a></li>
              <li><a href="">Hoàn thành mẫu sơn trùng với độ bạc màu xe cũ</a></li>
            </ul>
          </li>
          <li>
            <a href="">Các công nghệ sơn phổ biến</a>
            <ul>
              <li><a href="">Sơn siêu phản quang (Super – reflective paint)</a></li>
              <li><a href="">Sơn tự làm sạch (Self-cleaning paint)</a></li>
              <li><a href="">Sơn tự phục hồi (Self-healing paint)</a></li>
              <li><a href="">Sơn nhạy nhiệt (Heat-sensitive color-changing paint)</a></li>
            </ul>
          </li>
          <li>
            <a href="">Quy trình sơn xe ô tô chuẩn 8 bước tại Auto Hoàng Sơn</a>
            <ul>
              <li><a href="">Bước 1: Tiếp nhận xe</a></li>
              <li><a href="">Bước 2: Mài nhám chuẩn bị bề mặt</a></li>
              <li><a href="">Bước 3: Sơn chống rỉ</a></li>
              <li><a href="">Bước 4: Làm bả matit</a></li>
              <li><a href="">Bước 5: Sơn lót bề mặt</a></li>
              <li><a href="">Bước 6: Phun màu</a></li>
              <li><a href="">Bước 7: Sơn bóng</a></li>
              <li><a href="">Bước 8: Kiểm tra lần cuối</a></li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
    <section class="main-content">
      <div class="container-lg">
        <ol>
          <li>
            <b>Đồng sơn ô tô là gì?</b>
            <p>Đồng sơn ô tô là những kỹ thuật nhằm sửa chữa, lấy lại diện mạo, hình dáng và màu sơn ban đầu của một chi tiết, bộ phận trên xe hay toàn bộ xe. Khi đồng sơn, xe trải qua 2 giai đoạn là làm đồng gồm các kỹ thuật như gò, chà, nắn kéo… và làm sơn gồm nhiều bước can thiệp vào từng lớp sơn, từng chi tiết nhỏ để đem lại màu sơn chuẩn xác, có độ mịn và bóng như sơn gốc. <span class="text-primary">Trong tương lai, nó sẽ còn phát triển ở một tầm cao mới.</span></p>
            <b>Lợi ích của đồng sơn xe ô tô:</b>
            <ul>
              <li>Phục hồi thân vỏ xe cũng như màu sơn hiệu quả, loại bỏ những vết trầy xước, móp méo do va chạm.</li>
              <li>Đảm bảo tính thẩm mỹ, độ phẳng của thân, vỏ xe và độ mịn của màu sơn, giúp xe lấy lại ngoại hình như mới.</li>
              <li>Là một trong những bước chăm sóc xe cần thiết khi xe dần xuống cấp, bong tróc lớp sơn bên ngoài.</li>
            </ul>
          </li>
          <li>
            <b>Khi nào cần làm đồng sơn xe ô tô?</b>
            <p>Ở những thành phố lớn như Hà Nội, Hồ Chí Minh; lượng xe máy và xe ô tô lưu thông cực kỳ đông và lại không có đường riêng khiến cho các vấn đề tai nạn hay va quẹt với nhau gây trầy xước ô tô là điều không tránh khỏi khi lưu thông trên đường. Hoặc chỉ đơn giản là qua một thời gian sử dụng lâu dài, lớp áo ngoài chiếc xế hộp của bạn cũng dần xuống cấp, xuất hiện các vết trầy xước, bong tróc là điều vô cùng bình thường.</p>
            <p>Lúc này, việc đi làm đồng sơn xe ô tô là điều cần thiết và tất yếu. Bởi không ai lại không muốn chăm sóc và bảo vệ cho chiếc xe đắt tiền của mình cả. Bên cạnh đó, việc để tình trạng vết xước lâu ngày sẽ khiến xe hơi bị hư hỏng nặng hơn do điều kiện thời tiết có thể khiến vỏ xe bị oxy hóa, gây mất thẩm mỹ, nhanh hỏng…</p>
            <img class="img-fluid" src="../../../assets/main/dongson-1.jpg" alt="hình Đồng sơn số 1">
            <p>Ngoài ra, vào cuối năm thường có nhiều người muốn đi tân trang lại vẻ đẹp cho chiếc xe yêu quý của mình; để đón tết và cùng gia đình tận hưởng những phút giây thư giãn trọn vẹn nhất. Do đó, thời điểm này chúng ta thường thấy các dịch vụ chăm sóc xe hơi như làm đồng sơn xe ô tô; bảo dưỡng xe ô tô… trở nên rất nhộn nhịp. Tuy nhiên, vấn đề đặt ra ở đây là làm thế nào để chọn được địa chỉ chăm sóc và bảo dưỡng xe hơi uy tín, chất lượng.</p>
            <h5>Những điều lưu ý trước khi mang xe đi làm đồng sơn:</h5>
            <p>Để tránh bị tốn tiền không đáng có thì trước tiên cần đánh giá chỗ xe bị biến dạng, trầy xước như thế nào. Nếu nhỏ không đáng kể, một số vết trầy xước có thể xử lý bằng 1 số hóa chất chuyên dụng. Nếu biến dạng ảnh hưởng nhiều đến xe, bạn hãy đem đến Auto Hoàng Sơn để xử lý hoặc garagar uy tín gần bạn. Lưu ý cho 1 số xe có sử dụng bảo hiểm thân vỏ có thể lựa chon Auto Hoàng Sơn liên kết với tất cả các công ty bảo hiểm hiện nay.</p>
          </li>
          <li>
            <b>Quy trình đồng sơn ô tô chuẩn 6 công đoạn</b>
            <ol>
              <li>
                <b>Đầu tiên là tra mã màu</b>
                <p>Kỹ thuật viên sẽ tiến hành so màu chiếc xe cần sửa với tập thẻ mã số màu của loại xe đó để chọn ra thẻ tương thích (với những đời xe sơn nhiều tông sẽ có cả bộ thẻ màu cho từng bộ phận xe). Chuyên viên pha sơn cần xác định diện tích bề mặt cần sơn để tính ra lượng sơn đủ dùng. Việc xác định này dựa theo ba-rem định lượng sơn do hãng sơn cung cấp, cho từng module như thân, vỏ, khung, sườn các loại xe.</p>
                <p>Ví dụ sơn toàn bộ chiếc sedan Mondeo V6 cần 4 kg sơn, còn nếu sơn riêng 4 cánh cửa sẽ dùng hết 0,3 kg.</p>
                <img src="../../../assets/main/dongson-2.jpg" alt="hình Đồng sơn số 2" class="img-fluid">
              </li>
              <li>
                <b>Xác định khối lượng sơn và phẩm chất màu sơn xe</b>
                <p>Đối với những mảng sơn nhỏ không chiếm hết một module định lượng, kỹ thuật viên sẽ tự xác định khối lượng sơn cần thiết theo kinh nghiệm, sai số không đáng kể. Chuyên gia pha sơn cũng cần đánh giá kỹ lưỡng những phẩm chất thực của màu sơn xe trên từng module như độ bạc nhiệt (nắp khoang hành lý, nắp ca-pô, mui xe…), bạc gió (mũi xe, cản trước, lưng gương,…), độ xuống màu chung theo thời gian sử dụng để gia giảm công thức lúc pha sơn, tạo mảng màu mới trùng hoàn toàn với thân xe cũ.</p>
              </li>
              <li>
                <b>Công thức và lượng sơn</b>
                <p>Bước tiếp theo cần làm là tính công thức và lượng sơn cần pha trên máy tính. Kỹ thuật viên nhập tên xe, mã số màu và tổng khối lượng sơn cần pha vào bảng tra trên máy tính. Phần mềm chuyên dụng do hãng sản xuất cung cấp kèm theo dây chuyền sơn lập tức tính ra tỷ lệ các màu sơn thành phần để pha ra màu sơn xe.</p>
                <img src="../../../assets/main/dongson-3.jpg" alt="hình Đồng sơn số 3" class="img-fluid">
              </li>
              <li>
                <b>Kỹ thuật pha sơn</b>
                <p>Căn cứ khối lượng tổng mà kỹ thuật viên nhập vào, khối lượng từng màu sơn thành phần cũng được xác định chính xác tới 1/10 gam. Sau lệnh in, kỹ thuật viên sơn sấy sẽ có trong tay trang giấy chỉ dẫn công thức pha màu sơn với khối lượng sơn cần cho chiếc xe đang sửa chữa.</p>
                <p>Với những dòng xe đang được sử dụng rộng rãi trên thị trường thì công thức pha sơn thường có sẵn ngay trong tủ đựng thẻ mã màu vì chúng được sử dụng thường xuyên, thậm chí chuyên gia pha sơn có thể nhớ hết màu thành phần và tỷ lệ pha. Các kỹ thuật viên sẽ thực hiện bước pha sơn và gia giảm màu theo chỉ dẫn của máy tính.</p>
              </li>
              <li>
                <b>Xử lý thông tin màu sơn, váng và đông kết</b>
                <p>Các thông tin về các màu sơn thành phần chia làm 3 cột: tên miêu tả màu sơn, mã số màu và khối lượng cần dùng. Căn cứ trang in chỉ dẫn, kỹ thuật viên chọn các hộp sơn thành phần theo mã số ghi trên vỏ rồi đưa chúng lên dàn khuấy tự động để xử lý váng và đông kết.</p>
              </li>
              <li>
                <b>Hoàn thành mẫu sơn trùng với độ bạc màu xe cũ</b>
                <p>Đặt một hộp rỗng sạch lên cân điện tử và lần lượt rót vào đó các màu sơn thành phần theo đúng khối lượng ghi trong chỉ dẫn. Cuối cùng, hộp sơn vừa pha được đưa lên máy khuấy thật kỹ, chuyên gia pha sơn sẽ kiểm tra màu đã pha và gia giảm thành phần đôi chút cho màu pha mới trùng hợp với độ bạc của màu xe cũ.</p>
                <p>Trước khi sơn, cần làm khô, sạch phần vỏ xe định sơn, đồng thời che chắn các chi tiết xung quanh vùng sơn nếu chúng khác màu, dán băng keo che các nẹp mạ, mặt kính (với những chi tiết khó che chắn có thể quét phủ lên chúng một lớp mỡ loãng).</p>
              </li>
            </ol>
          </li>
          <li>
            <b>Các công nghệ sơn phổ biến</b>
            <ol>
              <li>
                <b>Sơn siêu phản quang (Super – reflective paint)</b>
                <p>Tại Hội nghị & Triển lãm Quốc gia lần thứ 250 của Hiệp hội Hóa học Hoa Kỳ (ACS) năm 2015, các nhà nghiên cứu của Phòng thí nghiệm Vật lý Ứng dụng của Đại học Johns Hopkins đã làm nên lịch sử trong ngành sơn. Họ đã sáng tạo ra một loại sơn gốc thủy tinh mới (làm từ Silic và Kali Silicat). </p>
                <p>Loại sơn này hay ở chỗ thay vì hấp thụ các tia nắng mặt trời như hầu hết các loại sơn khác, chúng sẽ phản quang. Từ đó giảm sự hấp thụ nhiệt cho xe. Sơn thân thiện với môi trường này sẽ giữ cho xe ô tô mát mẻ, ngay cả trong mùa hè nóng bức. Và hiện nó đều có sẵn để sơn trên các Model xe có nhu cầu.</p>
              </li>
              <li>
                <b>Sơn tự làm sạch (Self-cleaning paint)</b>
                <p>Đi xe ô tô mà không bao giờ phải rửa vì chúng luôn sạch sẽ là ước mơ của tất cả chúng ta. Giờ đây, ước mơ này hoàn toàn có thể trở thành hiện thực nhờ vào một phát minh đầy lý thú của Nissan.</p>
                <p>Vào năm 2016, Nissan đã thông báo rằng họ đã sáng tạo ra một loại sơn xe tự làm sạch siêu kỵ nước. Kết quả của các thí nghiệm nguyên mẫu được thực hiện vào năm 2014. Tương tự như sản phẩm Rust Never’s Wet Never Wet, các đỉnh nano trên bề mặt sơn này “khước từ” sự bám của nước, bụi bẩn, dầu và các vật liệu khác. Vì vậy chúng chỉ đơn giản trượt trên bề mặt xe và rơi xuống mặt đất, không để lại bất kỳ dấu vết gì. Do đó, chiếc xe trở nên ít bẩn hơn một chiếc xe không ứng dụng công nghệ sơn này.</p>
              </li>
              <li>
                <b>Sơn tự phục hồi (Self-healing paint)</b>
                <p>Không phải rửa xe đã đủ khiến tất cả những ai đi ô tô vui sướng rồi. Nhưng nếu như ngay cả những vết xước cũng không phải lo lắng thì liệu bạn có phải hét lên hạnh phúc? Thật đấy, loại sơn tự phục hồi sẽ giúp bạn không phải lo lắng nếu chẳng may có xảy ra va chạm khi đang đi trên đường nữa.</p>
                <p>Nissan cũng đã thử nghiệm một loại sơn tự phục hồi, giúp sửa chữa các vết trầy xước trên bề mặt của nó – giống như làn da của bạn vậy – nhưng sẽ nhanh hơn! Nó được xây dựng bằng cách sử dụng một vật liệu gọi là Chitosan, có nguồn gốc từ Chitin trong vỏ cua và tôm hùm.</p>
                <p>Khi bề mặt bị trầy xước, chitosan trong sơn, được kích hoạt bởi mặt trời, liên kết các thiệt hại thông qua các chuỗi tổng hợp được tạo ra cùng với các hợp chất khác trong sơn, tự chữa lành trong vòng chưa đầy một giờ! Công nghệ này vẫn đang được hoàn thiện, do đó, bạn cần đợi chờ thêm một thời gian nữa nhé.</p>
              </li>
              <li>
                <b>Sơn nhạy nhiệt (Heat-sensitive color-changing paint)</b>
                <p>Sơn nhạy nhiệt còn được hiểu là sơn thay đổi màu nhạy cảm với nhiệt, hoặc sơn nhiệt, thay đổi màu sắc, được ví như là một hàm của nhiệt độ. Dưới ngưỡng nhiệt độ, sơn sẽ xuất hiện dưới dạng một màu đơn sắc, nhưng khi vượt qua ngưỡng nhiệt độ đó, nó trở nên trong suốt và sẽ hiển thị bất kỳ màu sắc hoặc hình ảnh nào đã được sơn bên dưới.</p>
                <p>Điều này có thể dẫn đến một số hiệu ứng rất thú vị, giống như các công nghệ tự phục hồi và tự làm sạch, sơn nhạy nhiệt chưa có sẵn trên thị trường đại chúng.</p>
              </li>
            </ol>
          </li>
          <li>
            <b>Quy trình sơn xe ô tô chuẩn 8 bước tại Auto Hoàng Sơn</b>
            <ul>
              <li>
                <b>Bước 1: Tiếp nhận xe</b>
                <p>Khi tiếp nhận xe, cố vấn dịch vụ kiểm tra kỹ bề mặt, đánh dấu khu vực cần xử lý bằng bút lông, trao đổi đầy đủ yêu cầu của khách hàng để giải quyết tốt nhất.</p>
                <p>Ghi phiếu tiếp nhận xe, tình trạng xe, yêu cầu khách hang bằng văn bản.</p>
              </li>
              <li>
                <b>Bước 2: Mài nhám chuẩn bị bề mặt</b>
                <p>Chuẩn bị bề mặt là công việc cực kì quan trọng trong quy trình sơn ô tô. Nếu bề mặt không được làm sạch và mài nhẵn thì lớp sơn sẽ không thể đẹp. Chuẩn bị bề mặt gồm các bước:</p>
                <ul>
                  <li>Mài bốc sơn: Sử dụng nhám P80 bóc hết sơn những vùng bị trầy sướt, có tác động của đe búa.</li>
                  <li>Phá mí và hạ mí: Sử dụng nhám P120 – P180 mài rộng vùng chân mí ít nhất 10mm, tạo độ bám dính cho các bước tiếp theo. Lưu ý, cần chà bề mặt đủ rộng để chuẩn bị cho bã matit.</li>
                  <li>Vệ sinh bề mặt: Dùng súng khí thổi sạch bề mặt, sau đó dùng xăng lau đều lên bề mặt chi tiết. Như vậy, việc chuẩn bị bề mặt đã xong, chúng ta chuyển sang lớp chống rỉ.</li>
                  <img src="../../../assets/main/dongson-4.jpg" alt="hình Đồng sơn số 4" class="img-fluid">
                </ul>
              </li>
              <li>
                <b>Bước 3: Sơn chống rỉ</b>
                <p>Khung xe ô tô đa số là kim loại, vì vậy cần một lớp chống rỉ để bảo vệ bề mặt kim loại bị ăn mòn. Quy trình sơn chống rỉ ô tô gồm:</p>
                <ul>
                  <li>Pha sơn chống rỉ: Dụng cụ pha sơn gồm có cốc pha sơn, que quậy sơn, cân điện tử. Khi pha, anh em cần pha đúng tỉ lệ do nhà cung cấp đưa ra.</li>
                  <li>Phun sơn chống rỉ: Dùng súng 1,5 mm phun một lớp lên bề mặt chi tiết. Anh em cần đảm bảo không phun lên lớp sơn cũ và phải sơn phủ kín thép.</li>
                  <li>Sấy sơn chống rỉ: sấy khô khoảng 60 độ C trong 5 phút hoặc để khô tự nhiên từ 20-30 phút.</li>
                  <li>Vệ sinh bề mặt chi tiết: Xịt xăng, dùng khăn sạch lau đều lại bề mặt để chuẩn bị làm matit.</li>
                  <img src="../../../assets/main/dongson-5.jpg" alt="hình Đồng sơn số 5" class="img-fluid">
                </ul>
              </li>
              <li>
                <b>Bước 4: Làm bả matit</b>
                <p>Bả matit để điền đầy những khu vực bị thiếu và tạo độ đường nét phù hợp cho bề mặt. Bả mattit gồm các công đoạn sau:</p>
                <ul>
                  <li>Trộn matit: Trước khi sử dụng, chúng ta cần trộn matit với chất đông cứng. Anh em cần trộn chính xác tỉ lệ theo chỉ định của nhà cung cấp.</li>
                  <li>Bả matit: Làm matit thường từ 3 đến 4 lớp. Lớp đầu cần bả một lớp mỏng, ép chặt tay để tạo chân bám. Sau đó bả thêm để điền đầy khu vực bị hư hỏng. Lưu ý: không bả lên vùng chưa mài nhám.</li>
                  <li>Kiểm tra điền đầy matit: dùng thước hoặc tay kiểm tra thật kĩ độ điền đầy của matit. Anh em cần kiểm tra nơi đầy đủ ánh sáng, có thể dùng đèn hoặc ánh sáng mặt trời.</li>
                  <li>Sấy Matit: dùng đèn hồng ngoại sấy trong thời gian 15 – 20 phút ở nhiệt độ 60 độ C.</li>
                  <li>Phủ mực phủ: dùng mút xốp đính mực phủ xoa đều trên bề mặt bã matit.</li>
                  <li>Chà matit (thanh chà): chà nhám P80-P240 trên bề mặt matit, lần nhám tiếp theo mở rộng dần, chà theo nhiều hướng khác nhau. Lưu ý: cần tránh để lại vết xước nhám.</li>
                  <li>Kiểm tra lại bề mặt: đánh dấu những khu vực bị lỗi để xử lý, sơn lại chống rỉ nếu chà hở thép.</li>
                  <li>Chà matit (máy quỹ đạo): cần chà nhiều hướng khác nhau, bề mặt máy luôn vuông góc với chi tiết.</li>
                  <li>Vệ sinh bề mặt chi tiết: dùng súng khí thổi sạch bề mặt chi tiết, xịt xăng, dùng giẻ sạch lau đều bề mặt chi tiết.</li>
                  <img src="../../../assets/main/dongson-6.jpg" alt="hình Đồng sơn số 6" class="img-fluid">
                </ul>
              </li>
              <li>
                <b>Bước 5: Sơn lót bề mặt</b>
                <p>Sơn lót bề mặt bước không thể thiếu trong quy trình sơn sửa chữa ô tô. Sơn lót bề mặt giúp chống độ hút của matit, tăng cường độ của màu, giúp nước sơn đẹp và hoàn hảo hơn.</p>
                <ul>
                  <li>Che chắn chi tiết: lật ngược mí khi che chắn, tránh tạo gờ, khoảng cách che chắn cách khu vực 20-25 cm. Lưu ý: Che chắn toàn bộ khu vực không sửa chữa, không dùng giấy báo để che chắn.</li>
                  <li>Pha sơn lót: pha theo tỉ lệ hướng dẫn của sản phẩm.</li>
                  <li>Phun sơn lót: Dùng súng 1,5, áp suất khí 1,3 – 1,5 bar, phun 2 đến 3 lượt theo thứ tự nhỏ dần. Mỗi lần sơn cách nhau 3 – 5 phút.</li>
                  <li>Sấy sơn lót: sấy trong vòng 15 phút ở nhiệt độ khoảng 60 độ C.</li>
                  <li>Kiểm tra và xử lý lỗ mọt: Dùng mắt quan sát bề mặt chi tiết sơn lót, kết hợp với ánh sáng để tìm ra những lỗi bề mặt. Dùng dao bả ép chặt các khu vực có lỗ mọt.</li>
                  <li>Phủ mực phủ: Dùng mút xốp đính mực phủ xoa đều trên bề mặt bả matit. Dùng mực để kiểm tra bề mặt thường xuyên.</li>
                  <li>Chà sơn lót (Thanh chà): Chà nhám P240 chỉ trên bề mặt matit, cấp nhám tiếp theo mở rộng dần, chà theo nhiều hướng khác nhau.</li>
                  <li>Chà sơn lót (máy quỹ đạo): Xoa nhiều hướng khác nhau, bề mặt máy luôn vuông góc với chi tiết. Nếu chà hở matit, cần sơn lót lại.</li>
                  <li>Vệ sinh và kiểm tra chi tiết: Dùng súng khí thổi sạch bề mặt chi tiết; Xịt xăng lau, dùng giẻ sạch lau đều trên bề mặt chi tiết.</li>
                  <img src="../../../assets/main/dongson-7.jpg" alt="hình Đồng sơn số 7" class="img-fluid">
                </ul>
              </li>
              <li>
                <b>Bước 6: Phun màu</b>
                <ul>
                  <li>Che chắn chi tiết: tương tự như lần che chắn trước, cần lật ngược mí đối với khu vực sơn dặm, che chắn toàn bộ khu vực không sửa chữa.</li>
                  <li>Pha màu sơn: Đây là công việc quan trọng nhất trong quy trình sơn sửa ô tô. Bạn cần xác định code màu, sau đó tìm công thức và pha chính xác tỉ lệ cần thiết. Bạn cần kiếm tra và thử thật kỹ trước khi chính thức phun lên xe.</li>
                  <li>Sử dụng giẻ dính bụi: Lau toàn bộ bề mặt đã được chà nhám hoặc phun sơn.</li>
                  <li>Điều chỉnh súng sơn màu: Sơn màu áp suất khí (1.8 -2.0 bar), lượng sơn (2 -2.5 vòng), độ xòe (2 -2.5 vòng). Lưu ý: Kiểm tra súng trước khi rót sơn vào và loại súng khi điều chỉnh.</li>
                  <li>Sơn màu ô tô: Độ chồng đè lớp sơn 50%, cách lượt phun 3 -5 phút, khoảng cách 20cm, luôn giữ súng vuông góc với bề mặt.</li>
                </ul>
              </li>
              <li>
                <b>Bước 7: Sơn bóng</b>
                <ul>
                  <li>Sơn bóng ô tô: tương tự như sơn màu.</li>
                  <li>Sấy chi tiết: thiết lập nhiệt độ sấy khoảng 60 độ, sấy từ 25-30 phút. Cần kiểm tra nhiệt độ phỏng sấy thường xuyên để tránh rộp, chân kim.</li>
                  <li>Đánh bóng: Dùng cục mài sửa lỗi bụi sơn (nếu có); Phét lượng xi mỏng trên bề mặt (30- 30cm), đi nhẹ máy trên bề mặt rồi mới qua.</li>
                  <img src="../../../assets/main/dongson-8.jpg" alt="hình Đồng sơn số 8" class="img-fluid">
                </ul>
              </li>
              <li>
                <b>Bước 8: Kiểm tra lần cuối</b>
                <ul>
                  <li>Kiểm tra lại lần cuối trong điều kiện đầy đủ ánh sáng, ghi lại các điểm bất thường.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
        <p>Việc lựa chọn địa điểm để tân trang cho chiếc xe hơi của mình là một vấn đề vô cùng quan trọng. Thế nhưng, trên thực tế thì để chọn ra được một nơi làm đồng xe ô tô chất lượng, uy tín thì lại không hề dễ dàng chút nào. Bởi kỹ thuật làm đồng xe ô tô yêu cầu đội ngũ thợ phải có tay nghề cao, am hiểu kiến thức về xe hơi kết hợp cùng kinh nghiệm lâu năm thì mới có thể đáp ứng được.</p>
        <p>Với nhiều năm làm việc trong lĩnh vực sơn sửa, bảo dưỡng và chăm sóc xe hơi, Auto Hoàng Sơn không ngừng khẳng định vị thế thương hiệu trên thị trường và niềm tin đối với khách hàng qua hệ thống showroom và Xưởng dịch vụ hiện đại, công suất lớn tại Hồ Chí Minh với dịch vụ chuyên nghiệp và chất lượng như Bảo dưỡng sửa chữa, làm đẹp ô tô...</p>
        <p>Auto Hoàng Sơn đầu tư vào hệ thống công nghệ hiện đại, năng lực quản trị điều hành, đội ngũ nhân sự chuyên nghiệp, tay nghề cao sẽ hỗ trợ cho công tác sửa chữa diễn ra tốt nhất.</p>
      </div>
    </section>
  </main>
  <!-- Plugins -->
  <div id="plugins" class="position-fixed z-1">
    <Plugins />
  </div>
  <!-- Footer -->
  <footer class="bg-dark">
    <Footer />
  </footer>
</template>

<script setup>
import Navbar from '../../../components/Navbar.vue'
import Footer from '../../../components/Footer.vue'
import Background from '../../../components/Background.vue'
import Plugins from '../../../components/Plugins.vue'

const backgroundText = "Đồng Sơn Ôtô";

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
