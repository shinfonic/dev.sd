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
    // if (scrollPos > 57) {
    if (scrollPos > 47) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
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

// pagetop & smooth scroll
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 50;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  var sld_wrap = '#slider',
    sld = '.p-index-kv-img__item',
    sld_length = $(sld).length,
    pager = '.p-index-kv-pager__item',
    sld_pre = 'sld',
    pager_pre = 'pager',
    sld_time = 1000,
    sld_wait = 6000;

  $.fn.slide_fade = function () {
    return this.each(function (i, elem) {
      var sldnum = parseInt($(this).data('sldnum'));
      var sldnum_next = sldnum < sld_length ? (sldnum + 1) : 1;
      $(sld).not('#' + sld_pre + sldnum_next).addClass('is-shown');
      $('#' + sld_pre + sldnum_next).removeClass('is-shown');
      $(pager).not('#' + pager_pre + sldnum).addClass('is-not-current');
      $(pager).not('#' + pager_pre + sldnum).removeClass('is-current');
      $('#' + pager_pre + sldnum).addClass('is-current');
      $('#' + pager_pre + sldnum).removeClass('is-not-current');

      var sld_timer = setTimeout(function () {
        sldnum++;
        if (sldnum > sld_length) {
          sldnum = 1;
        }
        $(sld_wrap).data('sldnum', sldnum);
        $(sld_wrap).slide_fade();
      },
      sld_wait);
    });
  };
  $(window).on('load', function () {
    $(sld_wrap).data('sldnum', 1).slide_fade();
  });
});


// FAQ accordion
$('input').change(function () {

  $(this).each(function () {
    if ($(this).is(':checked')) {
      $(this).nextAll('.block-accordion').slideDown();
    }
    else {
      $(this).nextAll('.block-accordion').slideUp();
    }
  })
})

// WORKS sort
$(".sort-menu li").on("click", function () {
  var cateSelected = $(this).data('category');

  $(".sort-menu li").removeClass('current');
  $(this).addClass('current');

  $('#works-view').fadeOut(200, function () {
    $('#works-view article').each(function () {
      var cateData = $(this).data('category');

      if ((cateData.match(cateSelected)) || (cateSelected == 'all')) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('#works-view').fadeIn(1000);
  });
});

// SERVICE sort
$(".sort-menu li").on("click", function () {
  var cateSelected = $(this).data('category');

  $(".sort-menu li").removeClass('current');
  $(this).addClass('current');

  $('#service-select').fadeOut(200, function () {
    $('#service-select article').each(function () {
      var cateData = $(this).data('category');

      if (cateData.match(cateSelected)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('#service-select').fadeIn(1000);
  });
});

// SERVICE Photo
$(function () {
  var $grid = $('.sv-photo').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
    transitionDuration: '1.2s',
    // horizontalOrder: true,
    visibleStyle: { opacity: 1 },
    hiddenStyle: { opacity: 0 },
  });

  var msnry = $grid.data('masonry');

  // $grid.imagesLoaded(function () {
  //   $grid.masonry('option', { itemSelector: '.grid__item' });
  //   var $items = $grid.find('.grid__item');
  //   $grid.masonry('appended', $items);
  // });

  // var nextSlugs = [
  //   'photo-02.html',
  //   'photo-03.html'
  // ];

  $grid.infiniteScroll({
    path: 'photo-{{#}}.html',
    append: '.grid-item',
    outlayer: msnry,
    scrollThreshold: 50,
    history: false,
    // status: '.page-load-status',
    // hideNav: '.pagination',
  });

  // $container.infinitescroll({
  //   navSelector: '.navigation',
  //   nextSelector: '.navigation a',
  //   itemSelector: '.item',
  //   animate: true,
  //   extraScrollPx: -200,
  //   loading: {
  //     finishedMsg: '終わりです！',
  //     img: 'loading.gif'
  //   }
  // },
  //   function (newElements) {
  //     var $newElems = $(newElements);
  //     $newElems.imagesLoaded(function () {
  //       $container.masonry('appended', $newElems, true);
  //     });
  //   });
});