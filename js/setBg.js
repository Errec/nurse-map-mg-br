var setBg = (function(){
  // Cache the DOM
  var map = document.getElementById("microrreg");

  Array.prototype.forEach.call(map.children, function(el) {
    var professionals = regionData.microRegioes[el.dataset.name].profissionais;
    switch(true) {
      case professionals < 1000:
        el.classList.add("bg-1");
        break;
      case professionals < 2000:
        el.classList.add("bg-2");
        break;
      case professionals < 3000:
        el.classList.add("bg-3");
        break;
      case professionals < 4000:
        el.classList.add("bg-4");
        break;
      case professionals < 10000:
        el.classList.add("bg-5");
        break;
      default:
        el.classList.add("bg-6");
        break;
    }
  });
})();
