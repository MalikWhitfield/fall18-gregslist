import House from "../../models/house.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})

let _houses = []

function handleError(err) {
  throw new Error(err)
}

export default class HouseService {
  destroyHouse(id, showHouses) {
    _api.delete(id)
      .then(res => {
        this.getHouses(showHouses)
      })
      .catch(handleError)
  }

  addHouse(formData, fnToRunOnSuccess) {
    if (!formData) {
      throw new Error('You must supply from data')
    }
    if (typeof fnToRunOnSuccess) {
      throw new Error('You must supply a success function')
    }
    _api.post('', formData)
      .then(res => {
        _houses = res.data.data.map(item => new House(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }
  getHouses(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        // _houses =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _houses.push(item)
        // }
        // ^^^^ SAME AS ABOVE
        _houses = res.data.data.map(item => new House(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }

  get houses() {
    console.log('someone needs the houses')
    return _houses
  }

}