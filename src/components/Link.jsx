import * as React from "react";
import "./Link.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function Link() {
  return (
    <div className="links">
      <a href="https://www.linkedin.com/in/lfschefer/" target="blank" >
      <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#04AA6D",}}  size="2xl"/>
      </a>
      <a href="https://github.com/LFSchefer" target="blank" style={{marginTop: "12px"}}>
      <FontAwesomeIcon icon={faGithub} style={{color: "#04AA6D"}} size="2xl" />
      </a>
      <a href="mailto:lf.schefer@gmail.com?subject=Portolio contact" target="blank" style={{marginTop: "12px"}}>
      <FontAwesomeIcon icon={faEnvelope} style={{color: "#04AA6D"}} size="2xl"/>
      </a>
    </div>
  )
}
