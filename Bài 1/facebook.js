/*Login with Facebook*/
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    
    if (response.status === 'connected') {
      testAPI();
      $(".fb_data").css("display","block");
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
        $(".fb_data").css("display","none");
    }
  }


  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2131814083765058',
      cookie     : false,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,email,birthday,location,picture','GET', function(response) {
      console.log('Successful login for: ' + response.name);
      
      document.getElementById('fb_pic').innerHTML = $('#fb_pic').attr('src',response.picture.data.url);
      document.getElementById('fb_name').innerHTML = 'Hello '+response.name;
      document.getElementById('fb_email').innerHTML = 'Email: '+response.email;
      document.getElementById('fb_birthday').innerHTML = 'Birthday: '+response.birthday;
      document.getElementById('fb_location').innerHTML = 'Location: '+response.location.name;
    });
  }

  function fbLogout(){
    FB.logout(function(response){
      document.getElementById('fb_pic').innerHTML = '';
      document.getElementById('fb_name').innerHTML = '';
      document.getElementById('fb_email').innerHTML = '';
      document.getElementById('fb_birthday').innerHTML = '';
      document.getElementById('fb_location').innerHTML = '';
      window.location.reload();
      alert("You have been successfully signed out");
    });
  }
