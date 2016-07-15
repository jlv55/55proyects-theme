
$(document).ready(function(){  

            $('.sendbutton').click(function() {
              var name = $('.name').val();
                  email = $(".email").val();
                  email_validation = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
                  message = $('.message').val();
 
              if (name == '') {
               $('.name').focus();
               return false;
              }else if(email == "" || !email_validation.test(email)){
                $('.email').focus();    
                return false;
              }else if(message == ""){
                $('.message').focus();
                return false;
              }else{
                var datos = 'name='+ name + '&email=' + email + '&message=' + message;
                $.ajax({
                  type: 'POST',
                  url: 'contact.php',
                  data: datos
            });
            return false;
        };
    }); 

   	$.backstretch([
            /*Change the images url for change the background images*/
            /*Add your images to the images directory and background subdirectory*/
     "images/riazor.jpg"
  ], {duration: 3000, fade: 1500});

	$('#imgActivator').on({
		mouseover: function(){
			$('.imgLink').slideDown()
		},
		click: function(){
			$('.imgLink').fadeOut(500)
		}
	});

  $('.chart').easyPieChart({
      barColor: '#00B1AB',
      trackColor: '#cccccc',
      scaleColor: false,
      lineWidth: 10,
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });

    $('.carousel').carousel('cycle', {
     interval: 5000
   });


    		//Smooth Scroll
    	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});

$('#tweets').tweecool({
username : '55proyects',
limit : 1, // Number of tweets to show
profile_image : false, // Show profile image
show_time : true // Show tweet time
});
	
});

	
