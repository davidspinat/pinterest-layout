(function () {
  var gridNodes = document.getElementsByClassName('grid');
  var columnSpacing = 20;
  var columnCount = 3;

  [].forEach.call(gridNodes, function (grid) {
    var gridWidth = grid.clientWidth;
    var articles = grid.children;

    var articleWidth = parseInt((gridWidth - columnSpacing * columnCount ) / columnCount, 10);

    var fromTop = -500;
    var fromLeft = 0;
    [].forEach.call(articles, function (article, index) {
      var currentRow = index % 3;
      fromLeft += articleWidth + columnSpacing * currentRow;

      if ((index) % 3 === 0) {
        fromLeft = 0;
        fromTop += 500;
      }

      article.setAttribute('style',
        'position: absolute; ' +
        'left:' + fromLeft + 'px; ' +
        'top:' + fromTop + 'px; ' +
        'width:' + articleWidth + 'px;'
      );
    });
  });
})();
