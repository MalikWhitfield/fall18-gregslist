import Auto from "../../models/auto.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars/"
})

/**@type {Array<Auto>} */
let _autos = []

function handleError(err) {
  throw new Error(err)
}

export default class AutosService {
  //HTTP
  destroyAuto(id, showAutos) {
    _api.delete(id)
      .then(res => {
        this.getAutos(showAutos)
      })
      .catch(handleError)
  }
  //HTTP
  addAuto(formData, fnToRunOnSuccess) {
    // send formData to api (SERVER)
    // wait for server to respond
    // when the server responds 
    // handle the response
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }

    _api.post('', formData)
      .then(res => {
        //tell me via a callback 
        this.getAutos(fnToRunOnSuccess)
      }) // successful
      .catch(handleError)

  }
  //HTTP
  getAutos(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        // _autos =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _autos.push(item)
        // }
        // ^^^^ SAME AS ABOVE
        _autos = res.data.data.map(item => new Auto(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }

  // sync call
  get autos() {
    console.log("someone needs the autos")
    return _autos
  }

}