import Job from "../../models/job.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

let _jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobService {
  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)
  }
  addJob(formData, fnToRunOnSuccess) {
    if (!formData) {
      throw new Error('You must supply from data')
    }
    if (typeof fnToRunOnSuccess) {
      throw new Error('You must supply a success function')
    }
    _api.post('', formData)
      .then(res => {
        this.getJobs(fnToRunOnSuccess)
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }
  getJobs(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }

    _api.get('')
      .then(res => {
        // _jobs =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _jobs.push(item)
        // }
        // ^^^^ SAME AS ABOVE
        console.log(res.data.data)
        _jobs = res.data.data.map(item => new Job(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }

  get jobs() {
    console.log('someone needs the jobs')
    return _jobs
  }

}