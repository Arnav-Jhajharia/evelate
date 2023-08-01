import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import roadmap from './../../helpers/const/roadmap'
import 'react-vertical-timeline-component/style.min.css';

const background = 'rgba(0, 0, 0, 0.9)'; 
const color = '#fff'
const Component = () => {
    const {topic} = useParams()
    const navigate = useNavigate();
    const advance = roadmap[topic]
    return (
      <>
      <h1 style={{marginLeft: 'auto', textAlign: 'center'}}> {advance.title + ' [Preview]'} </h1>
        <VerticalTimeline>
        {
                advance.content.map((specific, index) => {
      return <VerticalTimelineElement
                onTimelineElementClick={() => (topic != 'mentica')?navigate(`/courses/roadmapcontent/${topic}/${String.fromCharCode(97 + index)}`):navigate(`mentica.in`)}
                className="vertical-timeline-element--work"
                contentStyle={{ background: background, color: color }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
              >
          <h3 className="vertical-timeline-element-title">{specific.heading}</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
          {specific.content}    </p>
           </VerticalTimelineElement>
                }
                )

    }
    </VerticalTimeline>
    </>
    )
}

export default Component;