$(document).ready(function () {
  $('#scan').click(function () {
    $('.millie').addClass('scanning');
    setTimeout(function () {
     $('.millie').removeClass('scanning');
   }, 3 * 1000);
  });
});
