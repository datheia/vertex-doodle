var setup, draw, mouseReleased, coords;
(function () {
  var _$0 = this;

  var _5 = function () {
    createCanvas(windowWidth, windowHeight), strokeWeight(5);
    var e = new URL(window.location.href);
    maxVertices = e.searchParams.has("vertices") ? e.searchParams.get("vertices") : 4;
  };

  var _6 = function () {
    if (coords.length > maxVertices && (coords = []), coords.length == maxVertices - 1) {
      coords.push(coords[0]), beginShape();

      for (var e = 0; e < coords.length; e++) vertex(coords[e][0], coords[e][1], coords[e][2]);

      endShape(CLOSE);
    }

    for (background(5), stroke(255), noFill(), beginShape(), e = 0; e < coords.length; e++) vertex(coords[e][0], coords[e][1]);

    endShape();
  };

  var _7 = function (e) {
    !1 === e.ctrlKey && coords.push([e.x, e.y]), !0 === e.ctrlKey && (coords = []);
  };

  _$0.setup = _5;
  _$0.draw = _6;
  _$0.mouseReleased = _7;
  _$0.coords = [];
}).call(this);
