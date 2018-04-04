// Driver
//
// A driver can be initialized with a name,
//  and a string representing the day that he joined Scuber.
//
// Add the following methods and attributes to the class:
//   startDate — returns a JavaScript Date object.
//     You'll need to use your Googling skills to reference some documentation on how dates work in JavaScript!
//   yearsExperienceFromBeginningOf —
//     takes an argument of a year and
//     returns the number of years since the driver's startDate.
//     (hint: when creating a new date object, you may want to refer to MDN's documentation on JS's Date object,
//     specifically how to get a date at the beginning of the year)

class Driver{
  constructor(name,joined_string){
    this.name=name;
    this.joined = joined_string;  //"Aug 9, 1995"
    this.startDate = new Date(Date.parse(joined_string));
  }//constructor
  yearsExperienceFromBeginningOf(year_int){
    //     returns the number of years since the driver's startDate.
    // console.log(year_int)
    // console.log(this.startDate.getYear())
    return year_int - this.startDate.getFullYear()
  }//yearsExperienceFromBeginningOf
  // startDate(){
  //   // debugger;
  //   // let split_date=this.joined.replace(/,/g, '').split(" ")
  //   // console.log("split_date:"+split_date)//Aug,9,1995
  //   // // var d = new Date(2011,10,30);
  //   // var d = new Date(split_date[2],split_date[1],split_date[0])
  //   // console.log(d)
  //
  //   // var dd = new Date(Date.parse(this.joined));
  //   // console.log(dd);
  //   // console.log(typeof dd);
  //   // return dd
  //
  //   // console.log(this.joined)
  //   // console.log("before everything")
  //   // let date= Date.parse(this.joined)
  //   // // let date= new Date.(this.joined)
  //   // console.log("this is date:" + date)
  //   // let date2 = Date(date)
  //   // console.log("this is date2:" + date2)
  //   // console.log(typeof date)
  //   // console.log(typeof date2)
  //   // let dateObj = new Date(date)
  //   // console.log(typeof dateObj)
  //   // return dateObj
  // }//startDate
}//class
//
// driver = new Driver("Alfie", "Aug 9, 1995")
// driver.startDate()




// blocksTravelled —
// returns an integer with the number of blocks travelled.
//  In New York City, to travel East and West you cross avenues,
//   and to travel North and South you cross streets.
//    To calculate the distance of in streets, you can use subtraction
//     (eg. 13th street to 10th street is three blocks).
//     To calculate the distance of avenues travelled,
//     you will need to know the names and order of avenues in New York City.
//      You can use the following array to help with your calculation:
//

//
// So to travel from 15th Street and 1st Avenue to 20th Street and Lexington Avenue is to travel
//  eight blocks (five blocks North and three blocks West).
class Route{
  constructor(beginningLocation,endingLocation){//{horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'}
    this.beginning = beginningLocation //objects with an attributes of horizontal and vertical.
    this.ending = endingLocation      //objects with an attributes of horizontal and vertical.
  }//constructor
  blocksTravelled(){
    console.log(this.beginning.horizontal + "||" + this.beginning.vertical + "||"+ this.ending.horizontal+ "||" +this.ending.vertical)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalTravelled = Math.abs(this.beginning.vertical-this.ending.vertical)
    // let startHorizontal = eastWest.findIndex(this.beginning.horizontal)
    // let endHorizontal = eastWest.findIndex(this.ending.horizontal)
    // let startHorizontal = eastWest.findIndex((x)=>{x == this.beginning.horizontal})
    // let endHorizontal = eastWest.findIndex((x)=>{x == this.ending.horizontal})
    let startHorizontal = eastWest.findIndex((x)=>{if (x == this.beginning.horizontal) {return x}})
    let endHorizontal = eastWest.findIndex((x)=>{if (x == this.ending.horizontal) {return x}})
    let horizontalTravelled = Math.abs(startHorizontal-endHorizontal)
    console.log(startHorizontal + " || " + endHorizontal + " || " + horizontalTravelled + " || " + verticalTravelled)
    return verticalTravelled + horizontalTravelled
  }//blocksTravelled

  estimatedTime(peak){
    // it('estimates time in minutes, with travel time of three blocks in a minute', function() {
    // it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', function() {
    // expect(route.estimatedTime(true)).to.equal(8)
    let blockPerMinute
    if(peak) {blockPerMinute=2}
    else {blockPerMinute=3}
    return this.blocksTravelled() / blockPerMinute
  }
}//class
