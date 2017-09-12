(function() {
  // Designer/Developer animation
  if (document.getElementById('revise')) {
    var delayInitial = 38000;
    // var delayInitial = 1000;
    var delayCumulative = 0;
    function revise(newText, delayAdd) {
      setTimeout(function() { document.getElementById('revise').innerHTML = newText; }, delayCumulative + delayAdd);
      delayCumulative += delayAdd;
    };
    setTimeout(function() { document.getElementById('revise').classList.add('a'); }, delayInitial);
    revise('signe', delayInitial + 4000);
    revise('sign', 600);
    revise('sig', 600);
    revise('si', 180);
    revise('s', 160);
    revise('', 1500);
    revise('v', 800);
    revise('ve', 600);
    revise('vel', 700);
    revise('velo', 300);
    revise('velop', 280);
    revise('velopw', 150);
    revise('velop', 600);
    revise('velope', 400);
    revise('veloper', 200);
    revise('velope', 10000);
    revise('velop', 450);
    revise('velo', 350);
    revise('vel', 270);
    revise('ve', 200);
    revise('v', 150);
    revise('', 150);
    revise('s', 1200);
    revise('si', 330);
    revise('sig', 250);
    revise('sign', 230);
    revise('signe', 170);
    revise('signer', 180);
    setTimeout(function() { document.getElementById('revise').classList.remove('a'); }, delayCumulative + 3600);
  }

  // Service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/{% asset_path sw.js %}').then(function(registration) {
        console.log('Service worker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  // var colorSchemes = {
  //   0: ['#ffffff', '#000000', '#0000ff', '#000000'], // white black blue
  //   1: ['#000000', '#ffff00', '#ffffff', '#ffffff'], // black yellow white
  //   2: ['#001680', '#ed3e49', '#ffff00', '#ffffff'], // blue red yellow
  //   3: ['#5a9eec', '#f7f9e4', '#26d8cd', '#000000'], // blue teal lighterblue
  //   4: ['#e86564', '#3d5884', '#280833', '#000000'], // pinkishred greyblue purple
  //   5: ['#980285', '#84d804', '#200986', '#ffffff'], // purple limegreen blue
  //   6: ['#f5ce28', '#f81884', '#18b7ff', '#000000']
  // };
  //
  // var x = Math.floor(Math.random() * 7);
  // // var scheme = colorSchemes[x];
  // var scheme = colorSchemes[2]
  //
  // document.documentElement.style.setProperty('--color-bg', scheme[0]);
  // document.documentElement.style.setProperty('--color-text', scheme[1]);
  // document.documentElement.style.setProperty('--color-link', scheme[2]);
  // document.documentElement.style.setProperty('--color-accent', scheme[3]);
})();
