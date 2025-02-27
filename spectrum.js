function Spectrum() {
  this.name = "spectrum";

  this.draw = function () {
    push();
    var spectrum = fourier.analyze();
    noStroke();

    // fill(0, 255, 0);
    // for (var i = 0; i < spectrum.length; i++) {
    //   var x = map(i, 0, spectrum.length, 0, width);
    //   var h = -height + map(spectrum[i], 0, 255, height, 0);
    //   rect(x, height, width / spectrum.length, h);
    // }

    // Draw the spectrum horizontally
    for (let i = 0; i < spectrum.length; i++) {
      let y = map(i, 0, spectrum.length, 0, height);
      let w = map(spectrum[i], 0, 255, 0, width);
      let r = spectrum[i];
      let g = 255 - r;
      let b = 0;
      fill(r, g, b);
      rect(0, y, w, height / spectrum.length);
    }

    pop();
  };
}
