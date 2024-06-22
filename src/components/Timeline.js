
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";
import React from "react";
const experience = () => {
    return (
<VerticalTimeline lineColor="grey">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">SST INC</h3>
    <h4 className="vertical-timeline-element-subtitle">Member of SST INC</h4>
    <p>
      July 2021 - August 2023
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Learning Alliances Beyond Borders</h3>
    <h4 className="vertical-timeline-element-subtitle">Participant</h4>
    <p>
      April 2022 - August 2022
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">World Developers Conference 2023 (10 Day San-Francisco trip)</h3>
    <h4 className="vertical-timeline-element-subtitle">Particpant</h4>
    <p>
      11 Feb 2023 - 19 Feb 2023
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Open House 2023 (Electronics)</h3>
    <h4 className="vertical-timeline-element-subtitle">Presentor</h4>
    <p>
      27 May 2023
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Extended Learning Experience (XLE) Camp</h3>
    <h4 className="vertical-timeline-element-subtitle">Participant</h4>
    <p>
      24 - 25 October and 31st October to 1st November
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">International Exchange Programme Jakarta, Indonesia</h3>
    <h4 className="vertical-timeline-element-subtitle">Participant</h4>
    <p>
      7 - 12 November 2023
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Work Attachment at Hyundai Motor Group Innovation Center Singapore (HMGICS)</h3>
    <h4 className="vertical-timeline-element-subtitle">Participant</h4>
    <p>
      11 - 13 Dec 2023
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Mentors’ Networking</h3>
    <h4 className="vertical-timeline-element-subtitle">Leader for Registration and Ushering</h4>
    <p>
      2nd May 2024
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Open House 2024 (PForSST)</h3>
    <h4 className="vertical-timeline-element-subtitle">Speaker</h4>
    <p>
      25 May 2024
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">Magorium Capstone Project</h3>
    <h4 className="vertical-timeline-element-subtitle">Member</h4>
    <p>
      24 August 2023 - Present
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    );
};
export default experience;