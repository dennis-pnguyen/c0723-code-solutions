import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ topics }) {
  const [topicClicked, setTopicClicked] = useState();

  const section = topics.map((topic, index) => (
    <div key={index} className="title">
      <div
        className="header"
        onClick={() =>
          topicClicked === index
            ? setTopicClicked(undefined)
            : setTopicClicked(index)
        }>
        <Header title={topic.title} topicIndex={index} />
      </div>
      <div
        className="content"
        style={{
          display: topicClicked === index ? 'flex' : 'none',
        }}>
        <Content info={topic.content} />
      </div>
    </div>
  ));
  return <div>{section}</div>;
}

function Header({ title }) {
  return <>{title}</>;
}

function Content({ info }) {
  return <>{info}</>;
}
