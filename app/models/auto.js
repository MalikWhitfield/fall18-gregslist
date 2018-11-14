export default class Auto {
  constructor(data) {
    if (!data._id || !data.make || !data.model || !data.year || !data.price) {
      throw new Error("Invalid Auto Creation")
    }
    this._id = data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'YOU SHOULD OF WRITTEN A DESCRIPTION GOOD LUCK SELLING THIS HUNK A JUNK'
    this.imgUrl = data.imgUrl
  }
}