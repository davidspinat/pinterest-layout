(function () {
  var button = document.getElementsByClassName('nav__button')[0];
  var body = document.getElementsByTagName('body')[0];
  var navigationActive = 'nav-active';
  button.addEventListener('click', function () {
    body.className = body.className !== navigationActive ? navigationActive : '';
  });

  var dropdownButtons = document.getElementsByClassName('nav__dropdown');
  var dropdownActive = 'nav__item--dropdown is-active';
  function dropdownClick(e) {
    [].forEach.call(dropdownButtons, function (dropdownButton) {
      dropdownButton.parentNode.className = 'nav__item--dropdown';
    });
    var parentNode = e.currentTarget.parentNode;
    parentNode.className = parentNode.className !== dropdownActive ? dropdownActive : 'nav__item--dropdown';
  }

  [].forEach.call(dropdownButtons, function (dropdownButton) {
    dropdownButton.addEventListener('click', dropdownClick);
  });

})();
