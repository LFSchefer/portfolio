import * as React from "react";
import "./Password.css";
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
    <li>3 differents algoritmes de génération de mot de passe sécuriser</li>
    <li>Utilisation d'API pour récuperer des mots aléatoire / Responsive CSS</li>
  </ul>
</div>

  return (
    <div className="shadow-box">
      <div className="card">
        <div className="card-info">
          <div className="card-title">
            <a href="https://passwordcreator-b967154079e8.herokuapp.com/" target="blank">
              <h2>Password Creator</h2>
            </a>
          </div>
          <div className="card-txt">
            <p><strong>Presentation:</strong></p>
            <p>Application de création de mot de passe sécuriser, <br />via 3 méthode différentes. </p>
            <p><strong>info supplementaire:</strong></p>
            <p>Project codé en deux jours</p>
          </div>
        </div>
        <div className="img-baner" style={{ backgroundImage: "url('/images/Password-baner.png')" }}>
        </div>
        <div className="btn-stack" onClick={handleClick}>Stack</div>
        <a href="https://github.com/LFSchefer/password-creator" target="blank" style={{marginTop: "12px"}} className="github-project-link">
        <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="xl" />
        </a>
      </div>
      {stack}
    </div>
  )
}
