export default class House {
  constructor(data) {
    if (!data._id || !data.hasOwnProperty('bathrooms') || !data.bedrooms || !data.imgUrl || !data.levels || !data.year || !data.price) {
      throw new Error("Invalid House Creation")
    }
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description || "HOW QUANT IS THIS HOUSE? C\'MON MAN. "
  }
} 