$(document).ready(function () {
  changeFluid();
});

$(window).resize(function () {
  changeFluid();

});

$('.collapse').on('show.bs.collapse', function () {
  $('.collapse').collapse('hide');
});

$('.btn-left[type="button"]').click(function () {
  let has = $(this).hasClass('active');
  $('.btn-left').removeClass('active');
  if (!has) $(this).addClass('active');
});

function changeFluid() {
  if ($(window).width() < 992) {
    $('.car-container')
      .removeClass('container')
      .addClass('container-fluid');
  } else {
    $('.car-container')
      .removeClass('container-fluid')
      .addClass('container');
  }
}