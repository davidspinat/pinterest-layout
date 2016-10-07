(function () {
  var button = document.getElementsByClassName('nav__button')[0];
  var body = document.getElementsByTagName('body')[0];
  var navigationActive = 'nav-active';
  button.addEventListener('click', function () {
    body.className = body.className !== navigationActive ? navigationActive : '';
  })
})();
