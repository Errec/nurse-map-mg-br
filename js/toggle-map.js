var toggleMap = (function() {
  macroBtn = document.getElementById('macro-btn');
  microBtn = document.getElementById('micro-btn');
  legend1  = document.getElementById('legend-text-1');
  legend2  = document.getElementById('legend-text-2');
  legend3  = document.getElementById('legend-text-3');
  legend4  = document.getElementById('legend-text-4');
  legend5  = document.getElementById('legend-text-5');
  legend6  = document.getElementById('legend-text-6');
  macroMap = document.getElementById('macrorreg');
  microMap = document.getElementById('microrreg');


  macroBtn.addEventListener('click', _setMacro);
  microBtn.addEventListener('click', _setMicro);

  function _setMacro() {
    legend1.innerHTML = "0-3.000";
    legend2.innerHTML = "3.001-5.000";
    legend3.innerHTML = "5.001-10.000";
    legend4.innerHTML = "10.001-15.000";
    legend5.innerHTML = "15.001-30.000";
    legend6.innerHTML = "30.000<";
    macroMap.classList.remove('map--hide');
    microMap.classList.add('map--hide');
  }

  function _setMicro() {
    legend1.innerHTML = "0-1.000";
    legend2.innerHTML = "1.001-2.000";
    legend3.innerHTML = "2.001-3.000";
    legend4.innerHTML = "3.001-4.000";
    legend5.innerHTML = "4.001-10.000";
    legend6.innerHTML = "10.000<";
    macroMap.classList.add('map--hide');
    microMap.classList.remove('map--hide');
  }
})();
