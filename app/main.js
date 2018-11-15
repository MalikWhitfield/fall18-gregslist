import AutosController from "./components/autos/autos-controller.js";
import JobsController from "./components/jobs/job-controller.js";
import HouseController from "./components/real-estate/house-controller.js"


class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      houseController: new HouseController(),
      jobsController: new JobsController()
    }
  }
}


// @ts-ignore
window.app = new App()
