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
              <ol>
                <li>
                  <a href="#list-1">Tổng quan về sửa chữa máy gầm điện ô tô</a>
                  <ol>
                    <li>
                      <a href="#list-11">Sửa chữa bộ máy ô tô</a>
                      <ol>
                        <li><a href="#list-111">Một số vấn đề gặp phải cần phải sửa chữa động cơ ô tô bao gồm:</a></li>
                        <li><a href="#list-112">Một số vấn đề cần phải sửa chữa hộp số ô tô bao gồm:</a></li>
                      </ol>
                    </li>
                    <li><a href="#list-12">Sửa chữa gầm ô tô chuyên nghiệp</a></li>
                    <li><a href="#list-13">Sửa chữa hệ thống điện – điện tử ô tô</a></li>
                  </ol>
                </li>
                <li><a href="#list-2">Bảo dưỡng máy gầm điện ô tô</a></li>
                <li><a href="#list-3">Quy trình sửa chữa, bảo dưỡng máy gầm điện ô tô tại Auto Hoàng Sơn</a></li>
              </ol>
            </div>
            <div class="main-content lh-lg">
              <ol>
                <li id="list-1">
                  <b class="h4 text-decoration-underline d-block mb-3">Tổng quan về sửa chữa máy gầm điện ô tô</b>
                  <p>Ai chẳng muốn chiếc xe của mình luôn được “Mạnh khỏe” Tuy nhiên thì thời gian cùng với những thói quen sử dụng ô tô của chính những chủ nhân chiếc xế hộp đó gây nên những vấn đề về máy gầm điện. Những chủ nhân của các dòng ô tô đặc biệt là các dòng ô tô sang như Mercedes, BMW, Audi, Range Rover…</p>
                  <p>Thật vậy việc máy, gầm, điện ô tô là những bộ phận tối quan trọng, nếu máy gầm điện sẽ càng trở nên phức tạp và khó khăn hơn nữa nếu không được khắc phục các lỗi hư hỏng. Vậy hãy lựa chọn cho bạn một garage ô tô chuyên nghiệp để giải quyết vấn đề máy gầm điện ô tô một cách nhanh nhất và xử lý toàn bộ lỗi cùng với những hư hỏng ở máy gầm điện ô tô của bạn nhé.</p>
                  <ol>
                    <li id="list-11">
                      <b class="h5 fw-bold mb-3 d-block fst-italic mb-4">Sửa chữa bộ máy ô tô</b>
                      <figure class="figure text-center mb-4">
                        <img :src="image[0]" alt="hình máy gầm điện số 1" class="img-fluid figure-img rounded">
                        <figcaption class="figure-caption text-muted">Kiểm tra Máy, Gầm, Điện – Auto Hoàng Sơn</figcaption>
                      </figure>
                      <p>Bộ máy của ô tô bao gồm động cơ ô tô, hộp số ô tô… được cho là một trong những phần quan trọng nhất đối với việc chuyển động và điều khiển ô tô. Đây là bộ phận quan trọng nên bạn cũng cần phải lưu ý tới nhiều vấn đề và chọn cho mình một garage ô tô chuyên nghiệp sửa chữa ô tô một cách chất lượng nhất. Đặc biệt nếu là các dòng xe sang trọng thì điều này càng cần chú trọng hơn nữa.</p>
                      <ol>
                        <li id="list-111">
                          <b class="d-block mb-2 text-decoration-underline">Một số vấn đề gặp phải cần phải sửa chữa động cơ ô tô bao gồm:</b>
                          <ul class="mb-4">
                            <li class="mb-2">Động cơ xe nhanh nóng quá cao trên 90 độ và hao nước làm mát</li>
                            <li class="mb-2">Bị hao dầu máy mà không phát hiện dấu hiệu rò rỉ dầu động cơ trong quá trình hoạt động</li>
                            <li class="mb-2">Dầu máy bị cô đặc (hiện tượng như nhựa đường)</li>
                            <li class="mb-2">Động cơ có tiếng kêu lạ lạch cạch trong khi vận hành</li>
                            <li class="mb-2">Thủy kích động cơ</li>
                            <li class="mb-2">Gãy bạc xéc măng hoặc xếp dồn bạc xéc măng ô tô</li>
                            <li class="mb-2">Động cơ bị đổ hơi</li>
                            <li class="mb-2">Bơm nhớt xe ô tô bị hỏng, yếu không bơm dầu đủ áp suất.</li>
                          </ul>
                          <figure class="figure text-center mb-4">
                            <img :src="image[1]" alt="hình máy gầm điện số 2" class="img-fluid figure-img rounded">
                            <figcaption class="figure-caption text-muted">Đại tu máy tại Auto Hoàng Sơn</figcaption>
                          </figure>
                        </li>
                        <li id="list-112">
                          <b class="d-block mb-2 text-decoration-underline">Một số vấn đề cần phải sửa chữa hộp số ô tô bao gồm:</b>
                          <ul class="mb-4">
                            <li class="mb-2">Hộp số ô tô của bạn không chuyển số hoặc khi chuyển số thì xe bị giật</li>
                            <li class="mb-2">Chuyển số ô tô bị trễ, muộn</li>
                            <li class="mb-2">Hộp số ô tô có tiếng kêu lạ hoặc tiếng hú</li>
                            <li class="mb-2">Dầu hộp số có hiện tượng lẫn nước: Nguyên nhân có thể do bị ngập nước qua lỗ thông hơi, thủng két làm mát dầu số</li>
                            <li class="mb-2">Hộp số ô tô bị chảy dầu tại các vị trí: Đầu, đuôi, đáy các-te</li>
                            <li class="mb-2">Khi hiển thị báo lỗi hư hỏng hộp số trên đồng hồ táp-lô: Hình bánh răng hộp số, báo lỗi trên máy chẩn đoán khi kiểm tra</li>
                          </ul>
                          <p>Bảo dưỡng máy ô tô hiệu quả tại Auto Hoàng Sơn sẽ giúp cho khách hàng loại bỏ những vấn đề hư hỏng ở máy ô tô của bạn. <strong>Auto Hoàng Sơn</strong> sẽ giúp bạn an tâm cho mỗi chặng đường bạn cần sửa chữa.</p>
                        </li>
                      </ol>
                    </li>
                    <li id="list-12">
                      <b class="h5 fw-bold mb-3 d-block fst-italic">Sửa chữa gầm ô tô chuyên nghiệp</b>
                      <p>Gầm cũng là một trong những bộ phận quan trọng và cũng là bộ phận dễ dàng gặp phải những vấn đề hư hỏng. Vậy dấu hiệu nào cho thấy chiếc xe của bạn cần sửa chữa gầm ngay:</p>
                      <ul class="mb-4">
                        <li class="mb-2">Máy hoạt động không ổn định hoặc xuất hiện tiếng kêu lạ</li>
                        <li class="mb-2">Công suất của động cơ giảm hẳn và có sức ì lớn</li>
                        <li class="mb-2">Gầm xe rò rỉ dung dịch</li>
                        <li class="mb-2">Hệ thống xả khí có tiếng kêu bất thường</li>
                        <li class="mb-2">Lốp xe rít mạnh khi dừng hoặc đỗ</li>
                        <li class="mb-2">Xe bị lệch về một bên dù bạn đang đi trên đường bằng phẳng</li>
                        <li class="mb-2">Phanh nhẹ, mất hiệu quả</li>
                        <li class="mb-2">Nhiệt độ của nước làm mát động cơ cao hơn mức bình thường</li>
                      </ul>
                      <figure class="figure text-center mb-4">
                        <img :src="image[2]" alt="hình máy gầm điện số 3" class="img-fluid figure-img rounded">
                        <figcaption class="figure-caption text-muted">Tổng quan sửa chữa máy gầm điện ô tô</figcaption>
                      </figure>
                    </li>
                    <li id="list-13">
                      <b class="h5 fw-bold mb-3 d-block fst-italic">Sửa chữa hệ thống điện – điện tử ô tô</b>
                      <p>Hệ thống điện – điện tử ô tô gặp phải rất nhiều những vấn đề cũng rất quan trọng và phức tạp vô cùng. Nếu không phải là một “nghệ sỹ” sửa chữa ô tô chuyên nghiệp thì bạn sẽ phải gặp rắc rối thật sự khi giao xe cho những thợ sửa chữa kém chuyên nghiệp.</p>
                      <p>Những vấn đề bạn sẽ gặp phải ở hệ thống điện sẽ là những vấn đề như: Cầu chì bị cháy, ắc quy chết hoặc ngăn ắc quy bẩn, máy phát điện hỏng, cầu chì ống hỏng, công tắc hỏng… và nhiều vấn đề khác đặc biệt có thể kể đến máy phát điện sẽ gặp trục trặc</p>
                      <ul class="mb-4">
                        <li class="mb-2">Chổi than tiếp xúc không tốt do bị ô xi hóa</li>
                        <li class="mb-2">Cuộn kích của hệ thống điện – điện tử bị chạm mát hoặc cuộn kích bị đứt</li>
                        <li class="mb-2">Cuộn kích bị ngắn mạch</li>
                        <li class="mb-2">Cuộn stato bị đứt hoặc chạm mát</li>
                      </ul>
                      <p>Hệ thống điện tử cũng vậy và đó là những vấn đề như:</p>
                      <ul class="mb-4">
                        <li class="mb-2">Sửa chữa hệ thống đèn Mercedes như: Đèn hậu, đèn pha, đèn xương mù, đèn xi nhan, hệ thống DRL (Đèn chạy ban ngày – Daytime Runing Light)…</li>
                        <li class="mb-2">Sửa chữa hệ thống âm thanh: Bộ điều khiển âm thanh (đầu DVD, CD), âm li, loa…</li>
                        <li class="mb-2">Sửa chữa điện hệ thống điều khiển động cơ đặc biệt là lỗi phần mềm hệ thống điều khiển thường gặp ở Mercedes, BMW, Audi và các dòng xe Đức</li>
                        <li class="mb-2">Sửa chữa điện khởi động ô tô Mercedes</li>
                        <li class="mb-2">Sửa chữa hệ thống nạp cho ắc quy của Mercedes</li>
                        <li class="mb-2">Sửa chữa hệ thống điện tử khác như hệ thống gạt mưa, nâng kính, khóa cửa…</li>
                      </ul>
                      <figure class="figure text-center mb-4">
                        <img :src="image[3]" alt="hình máy gầm điện số 4" class="img-fluid figure-img rounded">
                        <figcaption class="figure-caption text-muted">Sửa chữa – Auto Hoàng Sơn thực hiện kiểm tra và xử lý hệ thống điện – điện tử ô tô</figcaption>
                      </figure>
                    </li>
                  </ol>
                </li>
                <li id="list-2">
                  <b class="h4 text-decoration-underline d-block mb-3">Bảo dưỡng máy gầm điện ô tô</b>
                  <p>Bảo dưỡng máy gầm điện ô tô hay ở Auto Hoàng Sơn gọi là bảo dưỡng tổng thể đó là cách duy nhất để luôn giữ cho hệ thống máy gầm điện ổn định và mạnh mẽ. Việc bảo dưỡng tổng thể máy, gầm, điện ô tô còn mang tới sự an toàn cao cho bạn và những người xung quanh. Auto Hoàng Sơn với các chuyên gia hàng đầu về bảo dưỡng các dòng xe sang Châu Âu sẽ giúp quý khách giải quyết hết những vấn đề, hư hỏng xung quanh hệ thống máy gầm điện ô tô.</p>
                  <figure class="d-block figure text-center mb-4">
                    <img :src="image[4]" alt="hình máy gầm điện số 5" class="img-fluid figure-img rounded">
                    <figcaption class="figure-caption text-muted">Bảo dưỡng ô tô định kỳ tại Auto Hoàng Sơn</figcaption>
                  </figure>
                </li>
                <li id="list-3">
                  <b class="h4 text-decoration-underline d-block mb-3">Quy trình sửa chữa, bảo dưỡng máy gầm điện ô tô tại Auto Hoàng Sơn</b>
                  <ul>
                    <li><em>Bước 1:</em> Tư vấn dịch vụ tiếp nhận xe từ khách hàng tới kiểm tra các bộ phận máy, gầm, điện ô tô</li>
                    <li><em>Bước 2:</em> Kỹ thuật viên tiến hành kiểm tra lại các bộ phận máy gầm điện ô tô</li>
                    <li><em>Bước 3:</em> Tư vấn dịch vụ lên báo giá sửa chữa, bảo dưỡng hệ thống máy, gầm, điện ô tô</li>
                    <li><em>Bước 4:</em> Tiến hành sửa chữa máy, gầm, điện theo báo giá với sự đồng ý của khách hàng</li>
                    <li><em>Bước 5:</em> Kiểm tra lại các bộ phận đã sửa chữa máy gầm điện ô tô. Nếu thấy vẫn còn lỗi thì khắc phục ngay cho khách hàng. Nếu không còn lỗi gì thì chuyển sang bước thứ 7</li>
                    <li><em>Bước 6:</em> Hoàn thiện công việc và kiểm tra chất lượng lần cuối để đảm bảo rằng xe không gặp phải vấn đề gì</li>
                    <li><em>Bước 7:</em> Bàn giao lại xe cho khách hàng.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div class="col-12 col-xl-4 d-none d-xl-block">
            <div class="text-cetner mb-4">
              <img :src="image[5]" alt="hình Máy gầm điện" class="img-fluid rounded">
            </div>
            <div class="card ps-2 border-0 my-5">
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

import maygamdien1 from '../../../assets/main/maygamdien-1.jpg'
import maygamdien2 from '../../../assets/main/maygamdien-2.jpg'
import maygamdien3 from '../../../assets/main/maygamdien-3.jpg'
import maygamdien4 from '../../../assets/main/maygamdien-4.jpg'
import maygamdien5 from '../../../assets/main/maygamdien-5.jpg'

import maygamdien from '../../../assets/cards/card-3.jpg'

const backgroundText = "Máy gầm điện";

const image = [maygamdien1, maygamdien2, maygamdien3, maygamdien4, maygamdien5, maygamdien];

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
