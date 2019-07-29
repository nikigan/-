var $carousel = $('#carousel').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    pageDots: false,
    initialIndex: 0
});

$('.arrow-left').click(function () {
    $carousel.flickity('previous');
});

$('.arrow-right').click(function () {
    $carousel.flickity('next');
});

$(document).ready(function () {
    setNumbers();
});
$('#carousel').on('change.flickity', function () {
    setNumbers();
});

function setNumbers() {
    let data = $('#carousel').data('flickity');
    $('.other-num').html(`<span>0${data.selectedIndex + 1}/0${(data.cells.length) / (data.selectedCells.length)}</span>`);

}
