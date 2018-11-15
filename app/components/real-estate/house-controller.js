import HouseService from "./house-service.js"

let _houseService = new HouseService

export default class HouseController {
  constructor() {

  }
  showHouseButton() {
    _houseService.getHouses(this.showHouses)
  }
  showHouses() {
    console.log('about to show some houses')
    let houses = _houseService.houses
    let template = ""
    houses.forEach(house => {
      template += `
        <div class="col-sm-4 my-1 card">
          <div class="">
            <img class="card-img-top" src="${house.imgUrl}">
            <div class="card-body">
              <h5 class="card-title">${house.bedrooms} - ${house.bathrooms} Stories: ${house.levels} Created In ${house.year}</h5>
              <div class="card-text">
                <p>Price: ${house.price}</p>
                <p>${house.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.houseController.destroyHouse('${house._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
    template += `<form onsubmit="app.controllers.houseController.addHouse(event)">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input type="text" name="bedrooms" />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms:</label>
        <input type="text" name="bathrooms"/>
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" name="year"/>
      </div>
      <div class="form-group">
        <label for="PRICE">Price:</label>
        <input type="number" name="PRICE"/>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image:</label>
        <input type="url" name="imgUrl"/>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add House Listing</button>
    </form>`
    document.getElementById('main-content').innerHTML = template
  }
  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      levels: form.levels.value,
      bathroooms: form.bathroooms.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _houseService.addHouse(formData, this.showHouses)
    form.reset()
  }
  destroyHouse(id) {
    _houseService.destroyHouse(id, this.showHouses)
  }
}




