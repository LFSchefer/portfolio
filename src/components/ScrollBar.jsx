import * as React from "react";
import "./ScrollBar.css";

export default function ScrollBar(props) {

  window.onscroll = function() {scrollBar()};

  function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll").style.width = scrolled + "%";
}

  return (
    <div className="progress-container">
      <div className="progress-bar" id="scroll"></div>
    </div>
  )
}
