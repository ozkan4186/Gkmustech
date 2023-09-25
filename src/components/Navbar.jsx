import React from 'react'
import img from "../assets/gokhan.jpg"

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt="" className='h-20 w-38  rounded-lg m-4 ' />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Profil</li>
            <li>Settings</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar