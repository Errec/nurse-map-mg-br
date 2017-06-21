var svgClick = (function(){
  // Cache the DOM
  var map   = document.getElementById("map");
  var title = document.getElementById("region-title");
  var nprof = document.getElementById("td-prof-n");
  var pprof = document.getElementById("td-prof-p");
  var nenf  = document.getElementById("td-enf-n");
  var penf  = document.getElementById("td-enf-p");
  var ntec  = document.getElementById("td-tec-n");
  var ptec  = document.getElementById("td-tec-p");
  var naux  = document.getElementById("td-aux-n");
  var paux  = document.getElementById("td-aux-p");

  //  Bind mouse events
  map.addEventListener("click", _showData, false);

  function _showData(e) {
    if(e.target !== e.currentTarget) {
      _render(e.target.dataset.region);
    }
    e.stopPropagation();
  }

  function _render(regionName) {
    console.log(regionData.macroRegioes[regionName]);
    var dataRegion  = regionData.macroRegioes[regionName];

    title.innerHTML = regionName;
    nprof.innerHTML = dataRegion.profissionais;
    pprof.innerHTML = (dataRegion.profissionais / regionData.totalProfissionais * 100).toFixed(2) + '%';
    nenf.innerHTML  = dataRegion.enfermeiros;
    penf.innerHTML  = (dataRegion.enfermeiros / regionData.totalEfenfermeiros * 100).toFixed(2) + '%';
    ntec.innerHTML  = dataRegion.tecnicos;
    ptec.innerHTML  = (dataRegion.tecnicos / regionData.totalTecnicos * 100).toFixed(2) + '%';
    naux.innerHTML  = dataRegion.auxiliares;
    paux.innerHTML  = (dataRegion.auxiliares / regionData.totalAuxiliares * 100).toFixed(2) + '%';


    barChartData.datasets[0].data = [dataRegion.profissionais, dataRegion.enfermeiros, dataRegion.tecnicos, dataRegion.auxiliares];

    myBar.update();
  }
})();
