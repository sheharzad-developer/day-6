let telInput = $("#phone")

// initialize
telInput.intlTelInput({
    initialCountry: 'auto',
    preferredCountries: ['us','gb','br','ru','cn','es','it'],
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
    geoIpLookup: function(callback) {
        fetch('https://ipinfo.io/json', {
            cache: 'reload'
        }).then(response => {
            if ( response.ok ) {
                 return response.json()
            }
            throw new Error('Failed: ' + response.status)
        }).then(ipjson => {
            callback(ipjson.country)
        }).catch(e => {
            callback('us')
        })
    }
})

let telInput2 = $("#phone2")

// initialize
telInput2.intlTelInput({
    initialCountry: 'br',
    preferredCountries: ['us','gb','br','ru','cn','es','it'],
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"
})
$(document).ready(function(){
    $(".backTop").click(function(e) {
        $("body, html").animate({
            scrollTop:0
        },800)
    });
});
  $(document).ready(function(){
    $('.ProductSlider').slick({
        // customPaging : function(slider, i) {
        //     var thumb = $(slider.$slides[i]).data();
        //     return '<a class="dot">'+i+'</a>';
        //             },
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      });
  });


  $('.CommentsSectionSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });



  $(window).scroll(function(){
    scroll = $(window).scrollTop();
  if (scroll >= 100){
      $(".backTop").fadeIn("500");

   }else{
       $(".backTop").fadeOut("500");
   }

});