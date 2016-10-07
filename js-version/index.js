(function () {
  var gridNodes = document.getElementsByClassName('grid');
  var columnSpacing = 20;
  var columnCount = 3;

  [].forEach.call(gridNodes, function (grid) {
    var gridWidth = grid.clientWidth;
    var articles = grid.children;

    var articleWidth = parseInt((gridWidth - columnSpacing * columnCount ) / columnCount, 10);

    var fromLeft = 0;
    var fromTopByRow = [0, 0 , 0];

    [].forEach.call(articles, function (article, index) {
      var currentRow = index % 3;
      var fromTop = fromTopByRow[currentRow];
      fromLeft += articleWidth + columnSpacing + currentRow;

      fromTopByRow[currentRow] += article.clientHeight + columnSpacing * 2;
      if (currentRow === 0) {
        fromLeft = 0;
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
