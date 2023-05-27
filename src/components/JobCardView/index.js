import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'

const JobCardView = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    skills,
    lifeAtCompany,
  } = jobDetails

  const lifeAt = {
    description: lifeAtCompany.description,
    imageUrl: lifeAtCompany.image_url,
  }

  return (
    <li className="list-item list1">
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
      <div className="link-container">
        <h1 className="description">Description</h1>
        <a href={companyWebsiteUrl} className="link">
          <p className="visit-item">Visit</p>
          <BiLinkExternal className="link-icon" />
        </a>
      </div>

      <p>{jobDescription}</p>
      <h1>Skills</h1>
      <ul className="skills-container">
        {skills.map(each => {
          const convertData = {
            imageUrl: each.image_url,
            name: each.name,
          }
          return (
            <li className="skill-item">
              <img
                src={convertData.imageUrl}
                alt={convertData.name}
                className="skill-image"
              />
              <p className="company-name">{convertData.name}</p>
            </li>
          )
        })}
      </ul>
      <h1>Life at Company</h1>
      <div className="life-container">
        <p className="description">{lifeAt.description}</p>
        <img src={lifeAt.imageUrl} alt={title} className="company-image" />
      </div>
    </li>
  )
}

export default JobCardView
