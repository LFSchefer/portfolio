import * as React from "react";
import "./Unicorn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Unicorn() {

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
    <li>Back end: Ruby on Rails, Gem: Devise Pundit Faker</li>
    <li>Front end: Stimulus, Bootstrap, Flatpick, recherche AJAX</li>
    <li>Minitest model & system</li>
  </ul>
</div>

  return (
    <div className="shadow-box">
      <div className="card">
        <div className="card-info">
          <div className="card-title">
            <a href="https://secret-fjord-87437-e31a7083654e.herokuapp.com/" target="blank">
              <h2>Unicorn Hub</h2>
            </a>
          </div>
          <div className="card-txt">
            <p><strong>Presentation:</strong></p>
            <p>Site démo market place de location de licorne,<br/> gestion de location, review, tags...</p>
            <p><strong>info supplementaire:</strong></p>
            <p>Project solo et toujours en cours</p>
          </div>
        </div>
        <div className="img-baner" style={{ backgroundImage: "url('/images/Unicorn-banner.png')" }}>
        </div>
        <div className="btn-stack" onClick={handleClick}>Stack</div>
        <a href="https://github.com/LFSchefer/unicorn_hub" target="blank" style={{marginTop: "12px"}} className="github-project-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="xl" />
        </a>
      </div>
      {stack}
    </div>
  )

}
