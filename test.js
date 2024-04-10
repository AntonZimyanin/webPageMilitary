const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (var i = 0; i < 20; i++) {
    var inx = random(0, 5);
    console.log(inx);
}