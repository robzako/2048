// Wait till the browser is ready to render the game (avoids glitches)
// Loaded by "index.html" in <body> … </body>
window.requestAnimationFrame(function () {
  new GameManager(4);
});
