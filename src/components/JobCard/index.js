import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

const JobCard = props => {
  const {eachJobCard} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = eachJobCard

  return (
    <Link to={`/jobs/:${id}`} className="link-item">
      <li className="list-item">
        <div className="logo-row">
          <img src={companyLogoUrl} alt={title} className="card-logo" />
          <div>
            <h1 className="card-title">{title}</h1>
            <div className="card-rating-section">
              <AiFillStar className="star" />
              <p className="card-rating">{rating}</p>
            </div>
          </div>
        </div>

        <div className="location-row">
          <div className="location-employment-type-container">
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              <p className="location-name">{location}</p>
            </div>
            <div className="location-container">
              <BsFillBriefcaseFill className="location-icon" />
              <p className="location-name">{employmentType}</p>
            </div>
          </div>
          <p>{packagePerAnnum}</p>
        </div>

        <hr />
        <h1 className="description">Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
