// page fade
window.onload = function () {
  scroll_effect();
  $(window).scroll(function () {
    scroll_effect();
    $('html').removeClass('effect-fade');
  });
  function scroll_effect() {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('effect-scroll');
      }
    });
  }
};

// retina
$(function () {
  var retinaSwitch = window.devicePixelRatio;
  if (retinaSwitch == 1) {
    $('body').addClass('body1');
  } else if (retinaSwitch == 2) {
    $('body').addClass('body2x');
  }
});

// header animation
$(function () {
  $(window).on('load scroll', function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > 10) {
      $('#header-top').addClass('scrolled');
    } else {
      $('#header-top').removeClass('scrolled');
    }
  });
});

// contents fade
var scrollAnimationElm = document.querySelectorAll('.cont-fade');
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

// メニュー開閉用
$(function () {
  var menuBtn = $('.menu-btn');
  var drawerMenu = $('.drawer-menu')
  menuBtn.on('click', function () {
    drawerMenu.fadeToggle('fast').toggleClass('active');
    menuBtn.toggleClass('close');
  });

  // クリックでクローズ
  $('.drawer-menu ul li a').click(function () {
    drawerMenu.fadeToggle('fast').toggleClass('active');
    menuBtn.toggleClass('close');
  });
});