/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Rnav = () => {
  return (
    <>
      <div className="header">
                <img src="images/ledger-logo-long (1).svg" alt="" className="hero-img" />
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </div>
            <Outlet />
            

            

    </>
  )
}

export default Rnav
