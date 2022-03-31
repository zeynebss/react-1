import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (

        <header className="menu">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logo col-lg-8">
                        <h5>Cavani</h5>
                    </div>
                    <div className="menu-bar col-lg-4 ">
                        <ul className='d-flex list-unstyled'>
                           <li> <Link to="/">Home</Link></li>
                          <li>  <Link to="/about">About</Link></li>
                           <li>Portfolio</li>
                           <li>News</li>
                           <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header