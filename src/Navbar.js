import React, {useState, useEffect} from 'react'

function Navbar() {
  const [showBlack, setShowBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if(window.scrollY > 100 ){
        setShowBlack(true);
      } else {
        setShowBlack(false);
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div className={`nav ${showBlack?'nav__black':''}`}>
      <img className="nav__logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix"/>
      <img className="nav__user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU" alt="netflix"/>
    </div>
  )
}

export default Navbar
