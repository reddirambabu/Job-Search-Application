import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const SimilarJobs = props => {
  const {similarJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJob

  return (
    <li className="list-item list-item1">
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

      <h1 className="description">Description</h1>

      <p>{jobDescription}</p>

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
      </div>
    </li>
  )
}

export default SimilarJobs
