import * as React from 'react'
import "./ScrollUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function ScrollUp() {


  const [scrolled, setScrolled ] = React.useState({status: false, number: 0})


  const handleScroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      setScrolled(prev => {
        return {status: true, number: prev.number + 1}
      })
    }
  }

  React.useEffect(() => {
    function watchScroll() {
      document.addEventListener("scroll", handleScroll)
    }
    watchScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  },[])

  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const icon = <div className='icon-bg' onClick={goTop} style={{opacity: scrolled.number / 80}} >
    <FontAwesomeIcon icon={faArrowUp} id='scrollUp' size='2xl' style={{opacity: scrolled.number / 80, color: "#04AA6D"}} />
  </div>

  return (
    <>
      {scrolled.status && icon}
    </>
  )
}
