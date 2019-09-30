function distanceFromHqInBlocks(blocks){
    let hq = 42
    return Math.abs(blocks - hq)
};

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264
};

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264
};

function calculatesFarePrice(start, destination){
  let ride = Math.abs(start - destination) * 264
  if (ride < 400) {
    return 0
  }
  else if (ride >= 400 && ride < 2000) {
    return (ride - 400) * 0.02
  }

  else if (ride > 2000 && ride < 2500) {
    return 25
  }

  else {
    return "cannot travel that far"
  }
}
