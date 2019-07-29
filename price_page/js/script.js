$(document).ready(function () {
  changeFluid();
});

$(window).resize(function () {
  changeFluid();

});

$('.collapse').on('show.bs.collapse', function () {
  $('.collapse').collapse('hide');
});

$('.btn-left').click(function () {
  let has = $(this).hasClass('active');
  $('.btn-left').removeClass('active');
  if (!has) $(this).addClass('active');
  $($(this).data('pc-target')).fadeToggle();
});

function changeFluid() {
  if ($(window).width() < 992) {
    $('.car-container')
      .removeClass('container')
      .addClass('container-fluid');
    $($('.btn-left').not('.active').attr('data-target')).collapse('hide');
    $($('.btn-left.active').attr('data-target')).collapse('show');
  } else {
    $('.car-container')
      .removeClass('container-fluid')
      .addClass('container');
  }
}