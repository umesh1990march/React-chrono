import './index.css'
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <>
      <div>
        <img
          src={imageUrl}
          alt="project"
          className="project-img"
          style={{height: '200px', width: '350px'}}
        />
        <div className="project-heading-container">
          <h1>{projectTitle}</h1>
          <div className="clock-icon-container">
            <AiFillCalendar />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
