class Driver {
  constructor(name,startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
  let end = new Date(endDate)
  return endDate - this.startDate.getFullYear()
  }

}

class Route {
  constructor(beginningLocation,endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
  let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
  return horizontalBlocks + verticalBlocks
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }

  }


}
