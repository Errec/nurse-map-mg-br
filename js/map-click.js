var svgHover = (function(){
  // Cache the DOM
  var map = document.getElementById("map");

  //  Bind mouse events
  map.addEventListener("click", _showData, false);

  function _showData(e) {
    if(e.target !== e.currentTarget) {
      _render(e.target.dataset.region);
    }
    e.stopPropagation();
  }

  function _render(region) {
    console.log(region);
  }
})();
