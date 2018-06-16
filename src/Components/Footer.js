import React from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends React.Component{

  render(){
    return(
    <div className="Footer">
      <div className="footer-column">
        <h3 >My Lineup App</h3>
        <p>Made with ❤️ by <strong>Matt Thorry</strong>, 2018 with JavaScript, CSS, HTML & React.</p>
      </div>
      <div className="footer-column">
        <h3>GitHub Repos</h3>
        <div >
          <a href="https://github.com/mthorry/my-weather-app" className="item" target="_blank">This Project Repo</a><br/>
          {' '}<br/>
          <a href="https://github.com/mthorry" className="item" target="_blank">My GitHub</a><br/>
        </div>
      </div>
      <div className="footer-column">
        <h3>Want More?</h3>
        <p>Checkout my professional accomplisments on <a href="https://www.linkedin.com/in/mthorry" target="_blank">LinkedIn</a> or read  my blog on <a href="https://www.medium.com/@mthorry" target="_blank">Medium</a>.</p>
        <p>💌 Shoot me an <a href="mailto:mthorry@gmail.com?Subject=Nice%20app!" target="_top">email</a></p>
      </div>
    </div>
    )
  }
}
export default Footer