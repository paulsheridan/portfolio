page.base('');

page('/', index);
page('/about-me', about);
page('/portfolio', portfolio);

page();

function index() {
  console.log('slash');
}

function about() {
  $('.tab-content').hide();
  $('#about-me').fadeIn();
  console.log('abt');
}

function portfolio() {
  $('.tab-content').hide();
  $('#portfolio').fadeIn();
  console.log('por');
}
