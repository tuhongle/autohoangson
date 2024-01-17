<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="content">
      <div class="container-lg">
        <div class="row my-5">
          <div class="col-12 col-xl-8">
            <div class="nested-nav p-2 border border-1 border-dark mb-5 lh-lg">
              <a href="#list">Detailing là gì?</a>
              <ol>
                <li>
                  <a href="#list-1">Các yếu tố thúc đẩy sự phát triển của Detailing</a>
                  <ol>
                    <li><a href="#list-11">Thời gian</a></li>
                    <li><a href="#list-12">Thói quen</a></li>
                    <li>
                      <a href="#list-13">Sự phát triển kinh tế</a>
                      <ul>
                        <li><a href="#list-131">Sự phát triển của Detailing trên thế giới</a></li>
                        <li><a href="#list-132">Detailing tại Việt Nam</a></li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#list-2">Các dịch vụ phổ biến tại các car Detailing Việt Nam</a>
                  <ol>
                    <li><a href="#list-21">Detailing nội thất xe ô tô</a></li>
                    <li><a href="#list-22">Detailing xe ngoại thất</a></li>
                  </ol>
                </li>
              </ol>
            </div>
            <div class="main-content lh-lg">
              <h3 id="list" class="text-danger fw-bold">Detailing là gì?</h3>
              <p>Detailing chính là công việc chăm sóc xe hơi hay gọi một cách xa hoa hơn tí đó là Car Spa. Cụ thể là thực hiện các công việc như như làm đẹp nội ngoại thất, khoang máy cho xe rất kỹ lưỡng bao gồm các bước như rửa xe, dọn dẹp, tẩy ố, đánh bóng… bằng các thiết bị, vật liệu chuyên dụng. Sau khi trải qua các bước detail chuyên nghiệp, chiếc xe sẽ quay về tình trạng thẩm mỹ có thể coi là như mới.</p>
              <div class="text-center mb-4"><img :src="image[0]" alt="hình Detailing số 1" class="img-fluid rounded"></div>
              <p>Thậm chí, một chiếc xe mới cũng có thể được detail để tăng tuổi thọ, khả năng bảo vệ nước sơn và các chi tiết. Do đó đừng bao giờ nghỉ Detailing giống như “rửa xe cao cấp” bạn nhé!</p>
              <ol>
                <li id="list-1">
                  <b class="h4 text-decoration-underline d-block mb-3">Các yếu tố thúc đẩy sự phát triển của Detailing</b>
                  <p>Ban đầu nó chỉ đơn giản chỉ gói gém trong việc rửa xe mãi đến năm 1950 khi số lượng ô tô ngày càng nhiều lên thì nó mới bắt đầu bùng nổ tại Los Angeles tuy nhiên Detailing chỉ được cung cấp bởi các công ty ty lớn, các hãng xe…Tại thời điêm này nghề chăm sóc xe hơi bắt đầu được hình thành tuy nhiên nhu cầu thị trường thì qua ít bởi không ai quan tâm đến việc này….. Sự hình thành của Detailing có phần đóng góp không nhỏ của 3 yếu tố sau.</p>
                  <ol>
                    <li id="list-11">
                      <b class="h5 fw-bold mb-2 d-block fst-italic">Thời gian</b>
                      <p>Xã hội ngày càng phát triển nhu cầu đi lại càng nhiều số lượng xe hơi tăng lên đang kể đã góp phần không nhỏ làm cho Detailing ngày một phát triển.</p>
                    </li>
                    <li id="list-12">
                      <b class="h5 fw-bold mb-2 d-block fst-italic">Thói quen</b>
                      <p>Trước đây thay vì tự làm lấy mọi thứ con người ngày càng có xu hướng là đi thuê dịch vụ và hiện nay thuê dịch vụ rất thịnh hành. Do đó mà ngày càng nhiều người sử dụng đến dịch vụ Detailing</p>
                    </li>
                    <li id="list-13">
                      <b class="h5 fw-bold mb-2 d-block fst-italic">Sự phát triển kinh tế</b>
                      <p>Người giàu ngày càng nhiều xe sang cũng tăng lên nhu cầu bảo vệ tài sản là điều tất yếu và rất được quan tâm do đó Detailing là điều không thể thiếu để bảo vệ tài sản ô tô của bạn.</p>
                      <ul>
                        <li id="list-131">
                          <b class="d-block mb-2">Sự phát triển của Detailing trên thế giới</b>
                          <p>Năm 1980, hàng ngàn tiệm rửa xe tư nhân đã mọc lên như nấm trải dài khắp nước Mỹ tuy nhiên dịch vụ chăm sóc xe cao cấp High-end detailing vẫn được dành riêng cho các đại lý ô tô là chủ yếu</p>
                          <p>Tuy nhiên nhu cầu của những người có xe ô tô họ không muốn xe của mình chỉ được rửa mà còn cần phải dưỡng Wax, tẩy bề mặt sơn xe, vệ sinh chi tiết toàn bộ nội thất, dưỡng ghế da…. Bắt nhịp được các tín hiệu của thị trường các cửa hàng rửa xe bắt đầu tuyển dụng, thực hiện các chương trình đào tạo, thành lập cửa hàng Detailing để tận dụng cơ hội từ thị trường mới vô cùng tiềm năng này.</p>
                          <p>Năm 1990 đến năm 2000, dịch vụ Detailing toàn bộ xe (Full Detail) ra đời như một điều tất yếu khi người dân hoàn toàn sẵn sàng bỏ ra một số tiền lớn để duy trì tình trạng tốt cho chiếc xe của họ. Ngành công nghiệp dịch vụ chăm sóc xe đã rẽ sang một hướng khá xa so với ngành rửa xe tiền thân ban đầu.</p>
                          <p>Rất nhiều cửa hàng Detailing được thành lập chỉ chuyên làm dịch vụ High-end Detailing với các quy trình đòi hỏi phải tháo rời các chi tiết trên xe với giá thành giao động từ 100 đến hàng ngàn USD.</p>
                        </li>
                        <li id="list-132">
                          <b class="d-block mb-2">Detailing tại Việt Nam</b>
                          <p>Sau nhiều năm gia gia nhập vào thị trường hiện tại nghành Detailing tại Việt Nam có tốc độ phát triển chóng mặt điển hình như số lượng các đơn vị cung cấp dịch vụ chăm sóc xe hơi tăng liên tục không ngừng.</p>
                          <p>Tuy nhiên, chất lượng kỹ thuật và chất lượng dịch vụ nhiều nơi còn chưa tốt khiến cho khách hàng có thể có đánh giá chưa cao dành cho nghề mới này.</p>
                          <div class="text-center mb-4"><img :src="image[1]" alt="hình Detailing số 2" class="img-fluid rounded"></div>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li id="list-2">
                  <b class="h4 text-decoration-underline d-block mb-3">Các dịch vụ phổ biến tại các car Detailing Việt Nam</b>
                  <ol>
                    <li id="list-21">
                      <b class="h5 fw-bold mb-2 d-block fst-italic">Detailing nội thất xe ô tô</b>
                      <p>Vẻ đẹp bên ngoài hay vẻ đẹp bên trong đều là 2 yếu tốt quan trọng của ngành dịch vụ detailing ở Việt Nam hay bất kỳ nơi đâu trên thế giới. Do đó, không có gì ngạc nhiên khi detailing nội thất ô tô đòi hỏi nhiều nỗ lực và thời gian hơn so với detailing ngoại thất xe (trừ một số dịch vụ hiệu chỉnh sơn xe như đánh bóng, phủ ceramic). Một cabin bên trong bẩn không chỉ có mùi hôi, mà còn ảnh hưởng đến chất lượng cuộc sống, giá trị tài sản của người sử dụng xe đó.</p>
                      <p>Khí thải bẩn, mùi hôi lan truyền các chất gây dị ứng, khó chịu trong cabin nội thất ô tô; vết bẩn trên ghế da, chi tiết nhựa có thể làm giảm vẻ đẹp của nội thất ô tô; và các cửa sổ mờ có thể che khuất tầm nhìn của người lái xe. Trong trường hợp đó, làm sạch nội thất của xe hơi không chỉ là rửa bằng nước và xà phòng.</p>
                      <p>Tùy thuộc vào chi tiết bạn truy cập, có nhiều cách khác nhau để làm chi tiết tự động nội thất. Tuy nhiên, các quy trình tiêu chuẩn bao gồm:</p>
                      <ul class="mb-3">
                        <li><b>Hút bụi</b> – Bước đầu tiên để làm sạch nội thất của xe bao gồm hút bụi ghế, đèn pha, khu vực chứa hàng phía sau, cốp và kệ. Để tận dụng tốt nhất việc hút bụi, sàn ô tô, thảm sàn ô tô nên được hút luôn. Đối với các khu vực khó khăn không thể đạt được bằng cách sử dụng chân không, có thể sử dụng vòi hơi khí nén để thổi (Không cần sử dụng máy điện bởi nghiên cứu cho thấy chỉ cần sử dụng hơi khí nén là đạt hiệu quả tốt nhất rồi).</li>
                        <li><b>Giặt thảm và làm sạch bằng hơi nước</b> – Điều này được sử dụng để làm sạch thảm và thảm. Chà kỹ được thực hiện trên thảm để loại bỏ bất kỳ vết bẩn và nhược điểm có thể tích lũy trong những năm qua. Để hiệu quả hơn, nên sử dụng máy làm sạch bằng hơi nước. Tuy nhiên, nên để thảm khô hoàn toàn để tránh nấm mốc.</li>
                        <li><b>Lau kính</b> – Một chất tẩy kính được sử dụng để làm sạch kính. Nó đảm bảo rằng kính vẫn lấp lánh và đảm bảo tầm nhìn của người lái không bị cản trở.</li>
                        <li><b>Giặt ghế da nỉ ô tô</b> – Một chất tẩy da, nỉ, xà phòng yên và xà phòng da được sử dụng để làm sạch tất cả các bộ phận da. Đối với các khu vực xà phòng, một miếng vải ẩm được sử dụng để loại bỏ xà phòng dư thừa. Nếu da ghế khô, có thể sử dụng các dung dịch dưỡng ghế da ô tô.</li>
                        <li><b>Hút bụi và lau chùi</b> – Hút bụi lại rất quan trọng ngay sau khi hút bụi. Bất kỳ bụi bẩn còn lại trong cabin bên trong được loại bỏ. Bảng điều khiển và cửa sổ nên được lau sạch bằng vải sạch bằng chất tẩy rửa. Sau khi tất cả điều này được thực hiện, độ sáng bóng ban đầu của một chiếc xe được phục hồi.</li>
                        <li><b>Nước hoa ô tô</b> – Cuối cùng, để chiếc xe có mùi hương tốt, một chất khử mùi được sử dụng trong xe.</li>
                      </ul>
                    </li>
                    <li id="list-22">
                      <b class="h5 fw-bold mb-2 d-block fst-italic">Detailing xe ngoại thất</b>
                      <p>Việc rửa xe kiểu detailing ngoại thất ô tô không chỉ là việc rửa nhanh các bộ phận bên ngoài của ô tô. Một người detailer giỏi sẽ làm cho xe sáng bóng, giảm thiểu trầy xước bề mặt, và phải luôn phủ một lớp keo sơn che chắn.</p>
                      <p>Quy trình ngoại thất chung bao gồm:</p>
                      <ul class="mb-3">
                        <li><b>Rửa và lau chi tiết</b> – Không giống như rửa xe, các detailing được thực hiện bằng tay. Bước đầu tiên là xịt rửa xe bằng bình xịt chuyên dụng có công suất lớn, tiếp theo là rửa kỹ vành xe, khe cửa, kính và tất cả các bộ phận bên ngoài cần làm sạch.</li>
                        <li><b>Clay bề mặt sơn xe ô tô</b> – Một thanh đất sét được sử dụng để loại bỏ bất kỳ tạp chất, dấu vết của sơn phủ và các chất cặn khác không thể loại bỏ bằng chất tẩy rửa thông thường.</li>
                        <li><b>Đánh bóng xe ô tô</b> – Sau một thời gian sử dụng xe hơi, xe bị mất độ bóng hoặc sáng là điều bình thường. Do đó, trong quá trình này, độ bóng của xe ban đầu được phục hồi.</li>
                        <li><b>Phủ bảo vệ bề mặt sơn ô tô</b> – Để mang lại vẻ sáng bóng cho xe, người ta sẽ bôi một lớp dung dịch bảo vệ bề mặt sơn ô tô và trong một số trường hợp, có thể sử dụng wax hoặc phủ ceramic.</li>
                        <li><b>Wrap bảo vệ bề mặt sơn</b> – Wrap vinly hay dán keo xe cũng là một hình thức bảo vệ ngoại thất ô tô.</li>
                      </ul>
                      <p>Các dịch vụ ngoại thất khác có thể được thực hiện bao gồm sơn lại trang trí, detailing động cơ (vệ sinh khoang máy ô tô), đánh bóng đèn pha, làm sạch áp suất động cơ, sửa chữa cản, sửa chữa chip kính và sơn sửa lại.</p>
                      <p>Cuối cùng, rửa xe và detailing phải liên quan đến việc phân tích tất cả các loại sơn, các hư hỏng trước đây và hiện tại như bong, tróc, nứt và sơn lại, tình trạng bên ngoài và phân tích rỉ sét, hư hỏng do axit và các tác động khác của quá trình oxy hóa. Phân tích ố nước xe, tẩy ố kính ô tô như thế nào. Làm dịch vụ detailing thường xuyên làm tăng giá trị cho chiếc xe của bạn và cũng làm cho nó trông hấp dẫn bất chấp số năm nó đã được sử dụng.</p>
                      <div class="text-center mb-4"><img :src="image[2]" alt="hình Detailing số 3" class="img-fluid rounded"></div>
                      <div class="text-center mb-4"><img :src="image[3]" alt="hình Detailing số 4" class="img-fluid rounded"></div>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div class="col-12 col-xl-4 d-none d-xl-block">
            <div class="text-cetner mb-4">
              <img :src="image[4]" alt="hình Detailing" class="img-fluid rounded">
            </div>
            <div class="card ps-2 border-0">
              <div class="card-body text-light p-4">
                <h5 class="card-title fw-bold mb-4">THÔNG TIN LIÊN HỆ</h5>
                <ul class="list-unstyled">
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-telephone-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block py-3">0982.93.97.79</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-envelope-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="mailto:cvdv@autohoangson.com" class="text-light text-decoration-none">cvdv@autohoangson.com</a></div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-house-check fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block pe-3">08 Bùi Công Trừng - Đông Thạnh - Hóc Môn - HCM</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-browser-chrome fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="https://www.autohoangson.com" class="text-light text-decoration-none">autohoangson.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

import detailing1 from '../../../assets/main/detailing-1.jpg'
import detailing2 from '../../../assets/main/detailing-2.jpg'
import detailing3 from '../../../assets/main/detailing-3.jpg'
import detailing4 from '../../../assets/main/detailing-4.jpg'

import detailing from '../../../assets/cards/card-2.jpg'

const backgroundText = "Detailing";

const image = [detailing1, detailing2, detailing3, detailing4, detailing];

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
