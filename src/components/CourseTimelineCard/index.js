// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {tagsList, duration, description, courseTitle} = courseDetails

  return (
    <>
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <div className="clock-icon-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(tab => (
          <li key={tab.id}>
            <p>{tab.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
