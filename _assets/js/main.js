function randomizeColorScheme() {
  var colorSchemes = {
    0: ['#ffffff', '#000000', '#0000ff', '#000000'], // white black blue
    1: ['#000000', '#ffff00', '#ffffff', '#ffffff'], // black yellow white
    2: ['#001680', '#ed3e49', '#ffff00', '#ffffff'], // blue red yellow
    3: ['#5a9eec', '#f7f9e4', '#26d8cd', '#000000'], // blue teal lighterblue
    4: ['#e86564', '#3d5884', '#280833', '#000000'], // pinkishred greyblue purple
    5: ['#980285', '#84d804', '#200986', '#ffffff'], // purple limegreen blue
    6: ['#f5ce28', '#f81884', '#18b7ff', '#000000']
  };

  var x = Math.floor(Math.random() * 7);
  var scheme = colorSchemes[x];

  document.documentElement.style.setProperty('--color-bg', scheme[0]);
  document.documentElement.style.setProperty('--color-text', scheme[1]);
  document.documentElement.style.setProperty('--color-link', scheme[2]);
  document.documentElement.style.setProperty('--color-icon', scheme[3]);
};
randomizeColorScheme();
