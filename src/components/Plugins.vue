<template>
  <div class="container d-flex flex-column align-items-center">
      <div class="row mb-2">
        <a href="#"><i class="bi bi-arrow-up-square-fill display-5 text-info opacity-50"></i></a>
      </div>
      <div class="row mb-2">
        <button class="btn bg-primary rounded-circle py-2 border-0" data-bs-toggle="modal" data-bs-target="#register"><i class="bi bi-chat-dots-fill fs-4 text-light opacity-75"></i></button>
      </div>
      <div class="row mb-2">
        <!-- Messenger Chat Plugin Code -->
        <div id="fb-root"></div>

        <!-- Your Chat Plugin code -->
        <div id="fb-customer-chat" ref="fbCustomerChat" class="fb-customerchat">
        </div>
      </div>
  </div>
</template>

<!-- Your SDK code -->
<!-- <script setup>
  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "1492485087495500");
  chatbox.setAttribute("attribution", "biz_inbox");

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
</script> -->

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

