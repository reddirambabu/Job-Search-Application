import './index.css'
import {Link} from 'react-router-dom'

const HomeBody = () => (
  <div className="home-body-container">
    <div className="home-card">
      <h1 className="home-heading">Find The Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button className="home-find-jobs-button" type="button">
          Find jobs
        </button>
      </Link>
    </div>
  </div>
)

export default HomeBody
