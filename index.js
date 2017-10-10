function produceDrivingRange(blockRange) {
  return function(origin, destination) {
    const distance = Math.abs(parseInt(destination) - parseInt(origin))
    if(distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return bill * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
