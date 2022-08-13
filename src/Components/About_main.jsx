import React from 'react'
import About from './About/About'
import "./About_main.css"
function About_main() {
  return (
    <div>
         <div class="row bgimg text-center  align-items-center justify-content-center">
        <div class="col-12 p-5 m-5">
            <div class="breadcrumb-title text-center"><h6 class="hed fs-3">About</h6>
                <ul  class="breadcrumb-list list d-inline-flex gap-2">
                    <li class="text-light">Home</li>
                    <li class="text-light">About</li>
                </ul>
            </div>
        </div>
    </div>
      <About/>
    </div>
  )
}

export default About_main
