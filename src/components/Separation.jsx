import * as React from "react"
import "./Separation.css"

export default function Separation() {

  const [scrollY, setScroolY] = React.useState(0)

  const handleScroll = () => {
   setScroolY(window.scrollY)
  }

  let overlap = scrollY / window.innerWidth

  console.log(4*overlap)

  // console.log(scrollY)
  // console.log(window.innerWidth)

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
  style={{right: 500 + scrollY * 1 < window.innerWidth ? scrollY * 1 : scrollY * 1 - ((Math.floor(1 * overlap) * window.innerWidth) + 214) }}>
  </div>

  const line2 = <div className="line2"
  style={{right: scrollY * 2  < window.innerWidth ? scrollY * 2 : scrollY * 2 - ((Math.floor(2 * overlap) * window.innerWidth) + 214) }}>
  </div>

  const line3 = <div className="line3"
  style={{right: 200 + scrollY * 1.5 < window.innerWidth ? scrollY * 1.5 : scrollY * 1.5 - ((Math.floor(1.5 * overlap) * window.innerWidth) + 214) }}>
  </div>

const line4 = <div className="line4"
style={{right: scrollY * 3 < window.innerWidth ? scrollY * 3 : scrollY * 3 - ((Math.floor(3 * overlap) * window.innerWidth) + 214) }}>
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
