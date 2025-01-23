import React from "react"
import Courses1 from "./Courses/Courses1"
import Courses2 from "./Courses/Courses2"
import Courses3 from "./Courses/Courses3"
import Courses4 from "./Courses/Courses4"
import Courses5 from "./Courses/Courses5"
import Courses6 from "./Courses/Courses6"
import Courses7 from "./Courses/Courses7"
import Courses8 from "./Courses/Courses8"
import Courses9 from "./Courses/Courses9"
import Courses10 from "./Courses/Courses10"
import Courses11 from "./Courses/Courses11"
import Courses12 from "./Courses/Courses12"
import Courses13 from "./Courses/Courses13"
import Courses14 from "./Courses/Courses14"
import Courses15 from "./Courses/Courses15"
import Courses16 from "./Courses/Courses16"
import Courses17 from "./Courses/Courses17"
import Courses18 from "./Courses/Courses18"
import Courses19 from "./Courses/Courses19"
import Courses20 from "./Courses/Courses20"

const CourseTable = () => {

  const data = [
    "Certified Agile Leadership -Combination",
    // "Certified Agile Leadership Essentials(CAL-E)",
    "Certified Scrum Product Owner(CSPO)",
    "Professional Scrum Master (PSM I)",
    "Advanced Scrum Master (PSM II)",
    "Certified Scrum Master(CSM)",
    // "Certified Agile Leadership – Organizations (CAL-O)",
    "Professional Scrum Product Owner(PSPO I)",
    "Certified Professional Agile Coaching (ICP-ACC)",
    "Agile Coaching Skills- Certified Facilitator",
    "Advanced Certified ScrumMaster®",
    "Coaching Agile Transitions (ICP-CAT)",
    "Enterprise Transformation(ICP-ENT)",
    "Certified Agile Leadership -I",
    "Certified Agile Leadership -II",
    "Certified Agile Skills – Scaling Level 1",
  ]

  return (
    <div>
      <div className="block-title text-center pt-2"><h2 className="block-title__title">Upcoming Schedule</h2></div>
      <table className="table container" style={{borderSpacing:"0 10px", borderCollapse:"separate"}}>
            <tbody>
              <Courses3  api={data} />
              <Courses4  api={data} />
              <Courses2  api={data} />
              <Courses1  api={data} />
              <Courses5  api={data} />
              <Courses6  api={data} />
              <Courses7  api={data} />
              <Courses8  api={data} />
              <Courses9  api={data} />
              <Courses10 api={data} />
              <Courses11 api={data} />
              <Courses12 api={data} />
              <Courses13 api={data} />
              <Courses14 api={data} />
              <Courses15 api={data} />
              <Courses16 api={data} />
              <Courses17 api={data} />
              <Courses18 api={data} />
              <Courses19 api={data} />
              <Courses20 api={data} />
            </tbody>
      </table>
    </div>
  )
}


export default CourseTable
