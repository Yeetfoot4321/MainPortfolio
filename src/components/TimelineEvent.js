import React from "react";
import "./TimelineEvent.css";

const TimelineEvent = ({ event }) => {
  const { title, company, position, startDate, endDate } = event;

  return (
    <div className="timeline-event">
      <div className="timeline-event-content">
        <h3>{title}</h3>
        <h4>
          {company} {position}
        </h4>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default TimelineEvent;
