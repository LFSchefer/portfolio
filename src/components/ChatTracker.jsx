import * as React from "react";
import "./ChatTracker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Password() {

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
    <li>Single page React application</li>
    <li>Connection a plusieurs chats twitch via <a href="https://tmijs.com/" target="blank">TMI.JS</a></li>
    <li>Retourne une liste de vainqueurs agrégé des différent chat. Possibiliter de faire plusieurs round.</li>
  </ul>
</div>

  return (
    <div className="shadow-box">
      <div className="card">
        <div className="card-info">
          <div className="card-title">
            <a href="https://chat-word-tracker-cb6592fdef39.herokuapp.com/" target="blank">
              <h2>Twitch chat word tracker</h2>
            </a>
          </div>
          <div className="card-txt">
            <p><strong>Presentation:</strong></p>
            <p>Application qui permet de tracker un mot ou une phrase sur plusieurs chat twitch pour un quiz ou concourt par exemple.</p>
            <p><strong>info supplementaire:</strong></p>
            <p>Premier projet qui utilise un chat bot twitch</p>
          </div>
        </div>
        <div className="img-baner" style={{ backgroundImage: "url('/images/Twitch-banner.png')" }}>
        </div>
        <div className="btn-stack" onClick={handleClick}>Stack</div>
        <a href="https://github.com/LFSchefer/chat-word-tracker" target="blank" style={{marginTop: "12px"}} className="github-project-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="xl" />
        </a>
      </div>
      {stack}
    </div>
  )
}
