module.exports = (maxRandom) => maxRandom ? 
  Math.floor(Math.random() * (maxRandom + 1)) :
  '';