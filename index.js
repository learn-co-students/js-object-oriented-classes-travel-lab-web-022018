
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(currentYear) {
    return currentYear - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    console.log(vert);
    const horiz = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    console.log(horiz)
    return vert + horiz
  }

  estimatedTime(time=false) {
    if (time === false) {
      return Math.round(this.blocksTravelled() / 3)
    } else {
      return Math.round(this.blocksTravelled() / 2)
    }
  }
}
