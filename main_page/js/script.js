$('#my-carousel').on('change.flickity', function () {
  setNumbers();
});

let $carousel = $('#my-carousel').flickity({
  groupCells: 3,
  prevNextButtons: false,
  cellSelector: '.carousel-cell',
  contain: true,
  pageDots: false
});

$(document).ready(function () {
  setCell();
  setNumbers();
});

$('.section-directions .left-block .arrow-left, .row-mob .arrow-left').on('click', function () {
  $carousel.flickity('previous');
});

$('.section-directions .left-block .arrow-right, .row-mob .arrow-right').on('click', function () {
  $carousel.flickity('next');
});

$(window).resize(function () {
  setCell();
  setNumbers();
});



/**
 * Функция, которая определяет, сколько карточек будет на одном экране в карусели: 3 или 1
 */
function setCell() {
  if ($(window).width() < 992) {
    $carousel = $('#my-carousel').flickity({
      groupCells: 1,
      prevNextButtons: false,
      cellSelector: '.carousel-cell',
      contain: true,
      pageDots: false,
    });
    $('.car-container')
      .removeClass('container')
      .addClass('container-fluid');
  } else {
    $carousel = $('#my-carousel').flickity({
      groupCells: 3,
      prevNextButtons: false,
      cellSelector: '.carousel-cell',
      contain: true,
      pageDots: false
    });
    $('.car-container')
      .removeClass('container-fluid')
      .addClass('container');
  }
}

function setNumbers() {
  let data = $('#my-carousel').data('flickity');
  $('.num-cases, .num-mob').html(`<span>0${data.selectedIndex+1}/0${(data.cells.length)/(data.selectedCells.length)}</span>`);
}