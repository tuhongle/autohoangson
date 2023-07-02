<template>
  <div class="container d-flex flex-column align-items-center">
      <!-- Arrow to home -->
      <div class="row mb-2">
        <a href="#"><i class="bi bi-arrow-up-square-fill display-3 text-info opacity-50"></i></a>
      </div>
      <!-- Display modal -->
      <div class="row mb-2">
        <button class="btn bg-primary rounded-circle py-2 px-3 border-0" data-bs-toggle="modal" data-bs-target="#register"><i class="bi bi-chat-dots-fill fs-3 text-light opacity-75"></i></button>
      </div>
      <!-- icon Call -->
      <div class="row mb-2">
        <div class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
          <div class="hotline-phone-ring-circle"></div>
          <div class="hotline-phone-ring-circle-fill"></div>
          <div class="hotline-phone-ring-img-circle">
            <a href="tel:0372452970" class="pps-btn-img">
              <i class="bi bi-telephone-fill text-light"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
      <!-- Messenger plugin -->
      <div class="row mb-2">
        <!-- Messenger Chat Plugin Code -->
        <div id="fb-root"></div>

        <!-- Your Chat Plugin code -->
        <div id="fb-customer-chat" ref="fbCustomerChat" class="fb-customerchat">
        </div>
      </div>
  </div>
</template>


<script>

export default {
  name: 'Plugins',
  mounted() {
    this.$refs.fbCustomerChat.setAttribute("page_id", "1492485087495500");
    this.$refs.fbCustomerChat.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
    window.FB.init({
      xfbml            : true,
      version          : 'v17.0'
    });
  };
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
},
};
</script>