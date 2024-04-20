import { useState } from 'react'

import './App.css'
import ImgContainer from './ImgContainer'
import HowWeHelp from './HowWeHelp'
import Links from './Links'

function App() {


  return (
    <>
      <nav className="navbar bg-base-100 justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl ">Medigo AI</a>
        </div>
        <ul className="">
          <li className="mx-[10px]">Home</li>
          <li className="mx-[10px]">About Us</li>
          <li className="mx-[10px]">Contact Us</li>
        </ul>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    <ImgContainer/>
    <HowWeHelp />
    <Links />
    </>
  )
}

export default App
