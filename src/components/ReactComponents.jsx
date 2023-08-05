import * as React from "react"
import "./ReactComponents.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ReactComponents(props) {


  const [extend, setExtend] = React.useState(false)
  const [neverExtend, setNeverExtend] = React.useState(true)

  const handleClick = () => {
    setExtend(prev => !prev)
    setNeverExtend(false)
  }

  const stack = <div className={
    neverExtend ? "stack" :
    extend ? "stack-anim" : "stack-back"}>
  <p><strong>Stack Technique:</strong></p>
  <ul>
    <li>Start Rating <a href="https://github.com/LFSchefer/five-star-component" target="blank" style={{marginLeft: "6px"}} className="github-stack-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="l" /></a></li>
    <li>Loading bars<a href="https://github.com/LFSchefer/loading-bar" target="blank" style={{marginLeft: "6px"}} className="github-stack-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="l" /></a></li>
    <li>Separation bars<a href="https://github.com/LFSchefer/separationbars" target="blank" style={{marginLeft: "6px"}} className="github-stack-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="l" /></a></li>
  </ul>
</div>

  return (
    <div className="shadow-box">
      <div className="card">
        <div className="card-info">
          <div className="card-title">
            <a href="https://github.com/LFSchefer?tab=repositories" target="blank">
              <h2>React Components</h2>
            </a>
          </div>
          <div className="card-txt">
            <p><strong>Presentation:</strong></p>
            <p>Diverse component React, afin de les réutiliser <br /> sur diverse projects. </p>
            <p><strong>info supplementaire:</strong></p>
            <p>Star rating <br /> Loading bar <br /> Separation bars ...</p>
          </div>
        </div>
        <div className="img-baner" style={{ backgroundImage: "url('/images/React-comp-banner.png')" }}>
        </div>
        <div className="btn-stack" onClick={handleClick}>Stack</div>
        <a href="https://github.com/LFSchefer?tab=repositories" target="blank" style={{marginTop: "12px"}} className="github-project-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="xl" />
        </a>
      </div>
      {stack}
    </div>
  )
}
