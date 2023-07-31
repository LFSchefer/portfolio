import * as React from "react"
import "./Separation.css"
import MovingElement from "./MovingElement"

export default function Separation(props) {

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

  // const direction = props.direction1

  return (
    <div className="separation" >
      <MovingElement className={"line1"}
      speed={1}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={314}
      top={"0px"}/>
      <MovingElement className={"line11"}
      speed={0.2}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={450}
      top={"0px"}/>
      <MovingElement className={"line2"}
      speed={2}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={214}
      top={"15px"}/>
      <MovingElement className={"line21"}
      speed={0.8}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={356}
      top={"15px"}/>
      <MovingElement className={"line3"}
      speed={1.5}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={600}
      top={"30px"}/>
      <MovingElement className={"line31"}
      speed={4}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={170}
      top={"30px"}/>
      <MovingElement className={"line4"}
      speed={3}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={145}
      top={"45px"}/>
      <MovingElement className={"line41"}
      speed={1}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      width={427}
      top={"45px"}/>
    </div>
  )
}
