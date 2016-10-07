(function () {

  function renderPinterestGrid(columnSpacing, columnCount) {
    var gridNodes = document.getElementsByClassName('grid');

    [].forEach.call(gridNodes, function (grid) {
      var gridWidth = grid.clientWidth;
      var articles = grid.children;

      var articleWidth = parseInt((gridWidth - columnSpacing * (columnCount - 1)) / columnCount, 10);

      var fromLeft = 0;
      var fromTopByRow = [0, 0 , 0];

      [].forEach.call(articles, function (article, index) {
        var currentRow = index % columnCount;
        var fromTop = fromTopByRow[currentRow];
        fromLeft += articleWidth;
        if (columnCount !== 1) fromLeft += columnSpacing;

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
  }

  var spacing = 20;
  var columns = 1;

  var breakpoints = {
    tablet: 560,
    desktop: 960
  };

  function updateColumnCount(availableWidth) {
    if (availableWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop) {
      columns = 2;
    } else if (window.innerWidth >= breakpoints.desktop) {
      columns = 3;
    } else {
      columns = 1;
    }
  }

  updateColumnCount(window.innerWidth);
  renderPinterestGrid(spacing, columns);

  window.addEventListener('resize', function () {
    updateColumnCount(window.innerWidth);
    renderPinterestGrid(spacing, columns);
  })
})();
