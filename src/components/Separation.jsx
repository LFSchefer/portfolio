import * as React from "react"
import "./Separation.css"

export default function Separation() {

  const [scrollY, setScroolY] = React.useState(0)

  const handleScroll = () => {
   setScroolY(window.scrollY)
  }

  console.log(scrollY)
  console.log(window.innerWidth)

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
  style={{right: 500 + scrollY}}>
  </div>

  const line2 = <div className="line2"
  style={{right: scrollY * 2}}>
  </div>

  const line3 = <div className="line3"
  style={{right: scrollY * 1.5}}>
  </div>

const line4 = <div className="line4"
style={{right: scrollY * 3 < window.innerWidth ? scrollY * 3 : scrollY * 3 - (window.innerWidth + 214) }}>
</div>

  return (
    <div className="separation">
      {line1}
      {line2}
      {line3}
      {line4}
    </div>
  )
}
