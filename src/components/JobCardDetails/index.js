import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import JobCardView from '../JobCardView'
import SimilarJobs from '../SimilarJobs'
import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobCardDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobDetails: {},
    similarJobDetails: [],
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const lengthOfId = id.length
    const newId = id.slice(1, lengthOfId)
    console.log(newId)

    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${newId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const details = data.job_details
      const formattedData = {
        companyLogoUrl: details.company_logo_url,
        companyWebsiteUrl: details.company_website_url,
        employmentType: details.employment_type,
        id: details.id,
        jobDescription: details.job_description,
        location: details.location,
        packagePerAnnum: details.package_per_annum,
        rating: details.rating,
        skills: details.skills,
        title: details.title,
        lifeAtCompany: details.life_at_company,
      }
      console.log(formattedData)

      const similarJobs = data.similar_jobs
      const similarJobsArray = similarJobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        rating: each.rating,
        title: each.title,
      }))

      console.log(similarJobsArray)
      this.setState({
        apiStatus: apiStatusConstants.success,
        jobDetails: formattedData,
        similarJobDetails: similarJobsArray,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {jobDetails, similarJobDetails} = this.state
    return (
      <>
        <Header />
        <div className="job">
          <div className="job-details-route">
            <JobCardView jobDetails={jobDetails} />
            <h1>Similar Jobs</h1>
            <ul className="similar-jobs-container">
              {similarJobDetails.map(eachJobItem => (
                <SimilarJobs key={eachJobItem.id} similarJob={eachJobItem} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderLoadingSectionView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetryJobDetails = () => {
    this.getJobDetails()
  }

  renderFailureView = () => (
    <>
      <Header />
      <div className="failure-container">
        <div className="failure-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            alt="failure view"
            className="failure-image"
          />
          <h1 className="failure-heading">Oops! Something Went Wrong</h1>
          <p className="failure-description">
            We cannot seem to find the page you are looking for.
          </p>
          <button
            type="button"
            className="retry-button"
            onClick={this.onClickRetryJobDetails}
          >
            Retry
          </button>
        </div>
      </div>
    </>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingSectionView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderApiStatus()}</div>
  }
}

export default JobCardDetails
