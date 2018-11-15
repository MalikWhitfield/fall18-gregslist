import Job from "../../models/job.js";
import JobService from "./job-service.js";

let _jobService = new JobService

export default class JobController {
  constructor() {

  }
  showJobsButton() {
    _jobService.getJobs(this.showJobs)
  }
  showJobs() {

    console.log('about to show some Jobs')
    let jobs = _jobService.jobs
    let template = ""
    jobs.forEach(job => {
      template += `
        <div class="col-sm-4 my-1 card">
          <div class="">
            <div class="card-body">
              <h5 class="card-title">${job.jobTitle} - ${job.company} ${job.hours} Created In ${job.rate}</h5>
              <div class="card-text">
                <p>${job.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.jobsController.destroyJob('${job._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
    template += `<form onsubmit="app.controllers.jobsController.addJob(event)">
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" />
      </div>
      <div class="form-group">
        <label for="company">Company:</label>
        <input type="text" name="company"/>
      </div>
      <div class="form-group">
        <label for="rate"> Rate:</label>
        <input type="number" name="rate"/>
      </div>
      <div class="form-group">
        <label for="hours"> Hours:</label>
        <input type="number" name="hours"/>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add Job Listing</button>
    </form>`
    document.getElementById('main-content').innerHTML = template
  }
  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(formData, this.showJobs)
    form.reset()
  }
  destroyJob(id) {
    _jobService.destroyJob(id, this.showJobs)
  }
}
