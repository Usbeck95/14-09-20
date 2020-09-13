function dateFunction() {
    var x = document.getElementById("kalender").form.id;
  };

  var slider = document.getElementById("sliderRange");
  var output = document.getElementById("temperatur");
  output.innerHTML = slider.value;

  slider.oninput = function() {
      output.innerHTML = this.value;
  };

  var slider2 = document.getElementById("talslider");
  var output2 = document.getElementById("demo");
  output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
};

