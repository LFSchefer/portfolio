import * as React from "react";
import "./NiceMesses.css";

export default function NiceMesses() {

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
            <h2>Nices Messes</h2>
          </div>
          <div className="card-txt">
            <p><strong>Presentation:</strong></p>
            <p>Application d'itinéraire avec map et instruction & d'art animé unique en fonction des donnée de l'itinéraire, météo etc...</p>
            <p><strong>info supplementaire:</strong></p>
            <p>Project de fin de formation,<br /> codé en équipe à 4 en deux semaines.</p>
          </div>
        </div>
        <div className="vdo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_8g3QtiEXC0?start=5078" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="btn-stack" onClick={handleClick}>Stack</div>
      </div>
      {stack}
    </div>
  )

}
