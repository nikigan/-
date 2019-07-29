let lastScroll = 0;

$(document).scroll(function () {
  let currentScroll = $(this).scrollTop();
  let header = $('header');

  let headerPos = header.offset().top + header.outerHeight();
  let firstBlockPos = $('.section-first-block').offset().top + $('.section-first-block').outerHeight();
  if ((headerPos > 140) && ($(window).width() >= 992)) {
    header.addClass('grad-bg');
  } else {
    header.removeClass('grad-bg');
  }

  if (currentScroll > lastScroll) {
    header.addClass('hidden');
  } else {
    header.removeClass('hidden');
  }

  lastScroll = currentScroll;

});