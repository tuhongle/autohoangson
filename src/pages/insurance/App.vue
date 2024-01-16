<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="customers">
      <div class="container-lg py-5">
        <CustomerLogos />
      </div>
    </section>
    <section class="main-content">
      <div class="container-lg pb-5">
        <figure class="text-center mb-4">
          <img class="img-fluid" src="../../assets/main/insurance.png" alt="hình bảo hiểm">
          <figcaption class="h6 text-center fst-italic mt-4 lh-base px-5">"Auto Hoàng Sơn cam kết sẽ tư vấn cho khách hàng sản phẩm bảo hiểm tốt nhất phù hợp với mục đích sử dụng. Hổ trợ khách hàng khi xảy ra sự cố, đồng thời hoàn thiện thủ tục nhanh chóng giúp khách hàng tiết kiệm thời gian."</figcaption>
        </figure>
        <h3 class="text-danger text-center">10 ĐIỀU CẦN BIẾT VỀ BẢO HIỂM XE Ô TÔ</h3>
        <ol>
          <li>
            <b class="mb-2 d-block">Vì sao nên mua bảo hiểm ô tô?</b>
            <p>Hiện nay, thực trạng giao thông đường bộ nước ta đang ngày càng phức tạp. Khi lưu thông trên đường, bạn không thể tránh khỏi những lần va quẹt hoặc gặp tai nạn do ý thức người tham gia giao thông, hệ thống cầu đường không chắc chắn, do thời tiết…và mức phí thanh toán cho những lần gặp rủi ro đó không hề nhỏ.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Bao gồm các loại hình bảo hiểm nào?</b>
            <p>Bảo hiểm ô tô có thể kết hợp nhiều loại hình bảo hiểm về con người, tài sản, hàng hóa vận chuyển có liên quan đến chiếc xe ô tô đó.</p>
            <p class="mb-0">Có 4 hình thức bảo hiểm ô tô phổ biến:</p>
            <ul class="my-2">
              <li>Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới</li>
              <li>Bảo hiểm trách nhiệm dân sự của chủ xe đối với hàng hóa vận chuyển</li>
              <li>Bảo hiểm thiệt hại vật chất xe cơ giới</li>
              <li>Bảo hiểm tài, phụ xe và người ngồi trên xe</li>
            </ul>
            <p>Trong 4 loại trên, bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới là loại hình mà tất cả các cá nhân, tổ chức (gồm cả cá nhân người nước ngoài) sở hữu xe hơi tại Việt Nam phải tham gia theo quy định của nhà nước.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Khách hàng có nên chọn mức miễn thường trong bảo hiểm ô tô?</b>
            <p>Mức miễn thường là khoản tiền mà khách hàng chia sẻ rủi ro với công ty bảo hiểm trong mỗi vụ tổn thất. Tổn thất của chủ xe phải lớn hơn mức miễn thường thì công ty bảo hiểm mới bồi thường. Do đó, chủ xe cần xác định hoàn cảnh, môi trường di chuyển cũng như thái độ lái xe để chọn mức miễn thường có lợi nhất. Trên thực tế, khi đã lựa chọn mức miễn thường thì chủ nhân có ý thức lái xe an toàn hơn.</p>
            <p>Việc áp dụng mức miễn thường giúp khách hàng có được mức phí tốt hơn từ 15 - 45% so với khi không có mức miễn thường.</p>
            <p>Mức miễn thường được nhiều công ty đưa ra nhằm khuyến khích khách hàng chia sẻ rủi ro với công ty bảo hiểm bằng cách tự chi trả cho những hư hỏng nhỏ. Điều này giúp khách hàng giữ gìn xe cẩn thận hơn, giảm số lần yêu cầu bồi thường cho những rủi ro nhỏ. Công ty bảo hiểm vì thế có nhiều thời gian, tập trung phục vụ khách hàng tốt hơn.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Tính phí bảo hiểm vật chất xe như thế nào?</b>
            <p>Mức phí bảo hiểm vật chất xe được tính dựa vào giá trị thực tế của xe và tỷ lệ phí.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Cách giải quyết khi gặp sự cố</b>
            <p>Khi có tai nạn xảy ra, cần gọi ngay đến hotline bảo hiểm và giữ nguyên hiện trường để công ty bảo hiểm xác nhận phần lỗi thuộc về ai và đánh giá thiệt hại của phương tiện.</p>
            <p>Trong trường hợp bắt buộc phải di chuyển xe nhanh chóng khỏi hiện trường để tránh ùn tắc, nhường đường cho xe cứu thương, cứu hỏa hoặc chở người bị nạn đi bệnh viện, trước đó bạn nên chụp hình kỹ lại hiện trường từ nhiều góc để làm bằng chứng đảm bảo quyền lợi cho mình sau này.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Tận dụng hết những sản phẩm dịch vụ hữu ích:</b>
            <p>Đường dây nóng 24/7/365 hỗ trợ kịp thời các tình huống khẩn cấp, hướng dẫn xử lý tình huống tại hiện trường khi xảy ra sự cố, ghi nhận và theo dõi quy trình bồi thường, giải đáp mọi thắc mắc.</p>
            <p>Dịch vụ cứu hộ giao thông hoạt động 24/24, miễn phí trên toàn quốc : Giúp giảm chi phí vận chuyển xe từ nơi xảy ra sự cố đến garage sửa chữa.</p>
            <p>Sửa chữa tại garage chính hãng : Được cung cấp những phụ tùng thay thế chính hãng, đảm bảo chiếc xe vẫn giữ được giá trị sau khi sửa chữa.</p>
            <p>Sửa chữa và thay thế phụ tùng không tính khấu hao: Đây là tính năng ưu việt đối với các loại xe sang trọng, đắt tiền vì xe vẫn giữ nguyên giá trị sau khi sửa chữa.</p>  
            <p><i class="text-decoration-underline">Bảo hiểm thủy kích:</i> Bảo hiểm cho trường hợp xe hư hỏng do ngập nước.</p>
            <p><i class="text-decoration-underline">Bảo hiểm mất cắp bộ phận:</i> Bồi thường những bộ phận của xe bị mất cắp.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Mức phí rẻ nhất không hẳn sẽ tiết kiệm nhất</b>
            <p>Cùng bảo hiểm cho một chiếc xe, nhưng mức phí sẽ khác nhau ở các công ty bảo hiểm khác nhau. Lý do chủ yếu là sự khác biệt về phạm vi bảo hiểm, mức trách nhiệm, quyền lựa chọn garage sửa chữa, dịch vụ cứu hộ miễn phí và mức miễn thường.</p>
            <p>Tùy theo hiện trạng của chiếc xe và môi trường di chuyển thường xuyên mà người sử dụng nên chọn gói sản phẩm có phạm vi rộng hay hẹp.</p>
          </li>
          <li>
            <b class="mb-2 d-block">Nên mua bảo hiểm kết hợp hoặc theo nhóm để hưởng nhiều ưu đãi hơn.</b>
          </li>
          <li>
            <b class="mb-2 d-block">Đọc kỹ tài liệu giới thiệu về quy tắc bảo hiểm</b>
          </li>
          <li>
            <b class="mb-2 d-block">Hiểu rõ quyền lợi và trách nhiệm của mình khi ký hợp đồng bảo hiểm.</b>
          </li>
        </ol>
        <figure class="lh-base">
          <figcaption class="h6 text-center fst-italic mt-4">"Auto Hoàng Sơn cam kết sẽ tư vấn cho khách hàng sản phẩm bảo hiểm tốt nhất phù hợp với mục đích sử dụng. Hổ trợ khách hàng khi xảy ra sự cố, đồng thời hoàn thiện thủ tục nhanh chống giúp khách hàng tiết kiệm thời gian."</figcaption>
        </figure>
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

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Background from '../../components/Background.vue'
import CustomerLogos from '../../components/CustomerLogos.vue'
import Plugins from '../../components/Plugins.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Background, CustomerLogos, Plugins
  },
  data() {
    return {
      backgroundText: "Bảo hiểm",
    }
  }
}
</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
