import * as React from "react"
import "./Separation.css"

export default function Separation() {

  const [scrollY, setScroolY] = React.useState(0)

  const handleScroll = () => {
   setScroolY(window.scrollY)
  }

  let overlap = scrollY / window.innerWidth

  React.useEffect(() => {
    function watchScroll() {
      document.addEventListener("scroll", handleScroll)
    }
    watchScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  },[])

  const line1 = <div className="line1"
  style={{right: scrollY * 1 < window.innerWidth ? scrollY * 1 : scrollY * 1 - ((Math.floor(1 * overlap) * window.innerWidth) + 314) }}>
  </div>

  const line2 = <div className="line2"
  style={{right: scrollY * 2  < window.innerWidth ? scrollY * 2 : scrollY * 2 - ((Math.floor(2 * overlap) * window.innerWidth) + 214) }}>
  </div>

  const line3 = <div className="line3"
  style={{right: scrollY * 1.5 < window.innerWidth ? scrollY * 1.5 : scrollY * 1.5 - ((Math.floor(1.5 * overlap) * window.innerWidth) + 600) }}>
  </div>

  const line4 = <div className="line4"
  style={{right: scrollY * 3 < window.innerWidth ? scrollY * 3 : scrollY * 3 - ((Math.floor(3 * overlap) * window.innerWidth) + 145) }}>
  </div>

  const line11 = <div className="line11"
  style={{right: scrollY * 0.2 < window.innerWidth ? scrollY * 0.2 : scrollY * 0.2 - ((Math.floor(0.2 * overlap) * window.innerWidth) + 450) }}>
  </div>

  const line21 = <div className="line21"
  style={{right: scrollY * 0.8  < window.innerWidth ? scrollY * 0.8 : scrollY * 0.8 - ((Math.floor(0.8 * overlap) * window.innerWidth) + 356) }}>
  </div>

  const line31 = <div className="line31"
  style={{right: scrollY * 4 < window.innerWidth ? scrollY * 4 : scrollY * 4 - ((Math.floor(4 * overlap) * window.innerWidth) + 170) }}>
  </div>

  const line41 = <div className="line41"
  style={{right: scrollY * 1 < window.innerWidth ? scrollY * 1 : scrollY * 1 - ((Math.floor(1 * overlap) * window.innerWidth) + 427) }}>
  </div>

  return (
    <div className="separation">
      {line1}
      {line11}
      {line2}
      {line21}
      {line3}
      {line31}
      {line4}
      {line41}
    </div>
  )
}
