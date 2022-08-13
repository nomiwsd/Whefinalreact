import React from 'react'
import Benefits from './Benefits/Benefits'
import "./About_main.css"
function Benefits_main() {
  return (
    <div>
         <div class="row bgimg text-center  align-items-center justify-content-center">
        <div class="col-12 p-5 m-5">
            <div class="breadcrumb-title text-center"><h6 class="hed fs-3">Benefits</h6>
                <ul  class="breadcrumb-list list d-inline-flex gap-2">
                    <li class="text-light">Home</li>
                    <li class="text-light">Benefits</li>
                </ul>
            </div>
        </div>
    </div>
      <Benefits/>
    </div>
  )
}

export default Benefits_main
