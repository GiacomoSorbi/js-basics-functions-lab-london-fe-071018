const distanceFromHqInBlocks = d => Math.abs(42-d);
const distanceFromHqInFeet = d => distanceFromHqInBlocks(d) * 264;
const distanceTravelledInFeet = (a,b) => Math.abs(a-b) * 264;
const calculatesFarePrice = (a,b) => (d => d < 400 ? 0 : d < 2500? (d-400) * 0.02 : 25)(distanceFromHqInFeet(a,b))