import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
          <div className="imgContainer">
              <img src="assets/profilepic.png" alt=""/>
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2> Hello! I'm</h2>
            <h1>Jose "Joey" Gonzales</h1>
            <h3>Front-End Developer<span></span></h3>
          </div>
          <a href="#portfolio">
              <img src="assets/downarrow.png" alt=""/>
          </a>
      </div>
    </div>
    )
}
