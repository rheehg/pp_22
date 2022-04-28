$(function(){
  // gnb 펼침
  $(".btn_gnb").click(function () {
    if ($('.btn_gnb').hasClass('active')) {
        $(".btn_gnb").removeClass('active');
        $(".gnb_all").removeClass('active');
    }else {
      $(".gnb_all").addClass('active');
      $(".btn_gnb").addClass('active');
    }
  });
  //site 펼침
  $(".site > p").click(function () {
    if ($('.site').hasClass('active')) {
        $(".site").removeClass('active');
    }else {
      $(".site").addClass('active');
    }
  });

  $('.visual .visual_list').bxSlider({
    auto: true,
    speed: 500,
    pause: 3000,
    controls: false,
    autoControls: false,
    pagerCustom: '.pagination',
    mode: 'fade'
  });
  var productList = $('.product_list').bxSlider({
    auto: false,
    slideSelector: 'li',
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 300,
    slideMargin: 50,
    speed: 500,
    pause: 4000,
    autoControls: false,
    pager: false
  });
  $('.banner_list').bxSlider({
    auto: true,
    speed: 500,
    pause: 4000,
    autoControls: false,
    pagerCustom: '.banner_thumb',
    mode: 'fade'
  });

  $('.tab_wrap > .tab_content').children().css('display', 'none');
  $('.tab_wrap > .tab_content div:first-child').css('display', 'block');
  $('.tab_wrap > .tab li:first-child').addClass('active');
  $('.tab_wrap').delegate('.tab > li', 'click', function() {
      var index = $(this).parent().children().index(this);
      $(this).siblings().removeClass();
      $(this).addClass('active');
      $(this).parent().next('.tab_content').children().hide().eq(index).show();
  });

  //brand
  $('.design .design_list').bxSlider({
    auto: true,
    speed: 500,
    controls: true,
    pager: true,
    autoControls: true,
    captions: true
  });
  $('.performance_list').bxSlider({
    auto: true,
    speed: 500,
    controls: true,
    pager: true,
    autoControls: true,
    captions: true
  });

  $(document).ready(function(){
    $('#paris_counter').prepend('<span class="current-index"></span>/');
    var parisSlider = $('.paris_list').bxSlider({
      auto: true,
      pager: false,
      onSliderLoad: function (currentIndex){
        $('#paris_counter .current-index').text(currentIndex + 1);
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex){
        $('#paris_counter .current-index').text(newIndex + 1);
      }
    });
    $('#paris_counter').append(parisSlider.getSlideCount());

    $('#seoul_counter').prepend('<span class="current-index"></span>/');
    var seoulSlider = $('.seoul_list').bxSlider({
      auto: true,
      pager: false,
      onSliderLoad: function (currentIndex){
        $('#seoul_counter .current-index').text(currentIndex + 1);
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex){
        $('#seoul_counter .current-index').text(newIndex + 1);
      }
    });
    $('#seoul_counter').append(seoulSlider.getSlideCount());
  });

});
