export default class Job {
  constructor(data) {
    if (!data.company || !data.jobTitle || !data.hours || !data.hasOwnProperty('rate')) {
      throw new Error("Invalid ")
    }

    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || "HOW ARE YOU GOING TO ADVERTISE A JOB WITH NO DESCRIPTION"
  }
}