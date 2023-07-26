import * as React from "react"
import "./Password.css"

export default function Password() {

  const [extend, setExtend] = React.useState(false)

  const handleClick = () => {
    setExtend(prev => !prev)
  }

  const stack = <div className={extend ? "stack-anim" : "stack"}>
  <p><strong>Stack Technique:</strong></p>
  <ul>
    <li>Back end: Ruby on Rails</li>
    <li>Front end: Stimulus, JS vanilla, intégration de <a href="https://p5js.org/" target="blank">P5JS</a> pour les animations </li>
    <li>Utilisation d'API: Mapbox (Map / Geolocalisation), Google (Adresse auto complete / itineraire), Météo-concep (prevision météo)</li>
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
    </div>
    {stack}
  </div>
  )
}
