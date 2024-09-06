let carousel = $('#carousel'),
  threshold = 150,
  slideWidth = 500,
  dragStart,
  dragEnd;

$('.arrow-nav-left.next').click(function(){ shiftSlide(-1) })
$('.arrow-nav-right.prev').click(function(){ shiftSlide(1) })



function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
    .addClass('transition')
    .css('transform','translateX(' + (direction * slideWidth) + 'px)');
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
    carousel.css('transform','translateX(0px)');
  }, 100)
}
