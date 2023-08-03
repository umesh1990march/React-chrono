import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

export default function TimelineView(props) {
  const {timelineItemsList} = props
  return (
    <div className="App">
      <h1>"MY JOURNEY OF CCBP 4.0"</h1>
      <div style={{width: '100%', height: '600px'}}>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(element => {
            if (element.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard courseDetails={element} key={element.id} />
              )
            }
            return (
              <ProjectTimelineCard projectDetails={element} key={element.id} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}
