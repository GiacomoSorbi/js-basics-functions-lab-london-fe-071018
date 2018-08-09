const distanceFromHqInBlocks = d => Math.abs(42-d);
const distanceFromHqInFeet = d => distanceFromHqInBlocks(d) * 264;
const distanceTravelledInFeet = (a,b) => Math.abs(a-b) * 264;