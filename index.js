class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let dateyear = new Date(year, 0)
    let diff = dateyear - this.startDate
    return Math.ceil(diff/1000/3600/24/365)
  }

}
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vert = Number(this.endingLocation.vertical.slice(0,2)) - Number(this.beginningLocation.vertical.slice(0,2))
    let horiz = eastWest.findIndex((input) => this.endingLocation.horizontal === input) - eastWest.findIndex((input) => this.beginningLocation.horizontal === input)
    return Math.abs(vert) + Math.abs(horiz)
  }

  estimatedTime(bool){
    let blocksPerMin
    if (bool){
      blocksPerMin = 1/2
    } else {
      blocksPerMin = 1/3
    }
    return this.blocksTravelled() * blocksPerMin
  }

}
