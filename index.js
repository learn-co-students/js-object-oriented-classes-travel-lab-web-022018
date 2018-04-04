
class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date (startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    console.log(this.startDate)
    let start = (this.startDate).getFullYear()
    return endDate - start
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.endingLocation = endingLocation
    this.beginningLocation = beginningLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let beginHor = eastWest.indexOf(this.beginningLocation.horizontal)
    let endHor = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontal = endHor > beginHor ? (endHor-beginHor) : (beginHor - endHor)
    let vertical =this.beginningLocation.vertical > this.endingLocation.vertical ? (this.beginningLocation.vertical - this.endingLocation.vertical) : (this.endingLocation.vertical- this.beginningLocation.vertical)
    return horizontal + vertical
  }
  estimatedTime(peak){
    if (peak === true){
      let time = this.blocksTravelled() / 2
      return time
    }
    else{
      let time = this.blocksTravelled() / 3
      return time
    }
  }
}
