// A faint, slow star field. Pure decoration; respects reduced-motion.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canvas = document.getElementById("stars");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var stars = [];
  var W, H, raf;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    var count = Math.min(170, Math.floor((W * H) / 12000));
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.3,
        p: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 0.8,
        gold: Math.random() < 0.22
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var st = stars[i];
      var tw = reduce ? 0.75 : 0.55 + 0.45 * Math.sin(st.p + t * 0.0004 * st.s);
      ctx.globalAlpha = 0.55 * tw;
      ctx.fillStyle = st.gold ? "#e8c877" : "#d9d4c5";
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduce) raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  raf = requestAnimationFrame(draw);
})();
