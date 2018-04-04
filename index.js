
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}
const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let acc = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    acc += Math.abs(eastWest.findIndex(x => x == this.beginningLocation.horizontal) - eastWest.findIndex(x => x == this.endingLocation.horizontal))
    return acc
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
