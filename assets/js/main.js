$(document).ready(function () {
  $('.header-navbar__button').on('click', function () {
    $(this).toggleClass('open');
    $('.header-navbar__list').stop(true, true).slideToggle(300);
  });
});