import React from 'react'
import Collection from './Collection/Collection'
import "./About_main.css"
export default function Collection_main() {
  return (
    <div>
         <div class="row bgimg text-center  align-items-center justify-content-center">
        <div class="col-12 p-5 m-5">
            <div class="breadcrumb-title text-center"><h6 class="hed fs-3">Collection</h6>
                <ul  class="breadcrumb-list list d-inline-flex gap-2">
                    <li class="text-light">Home</li>
                    <li class="text-light">Collection</li>
                </ul>
            </div>
        </div>
    </div>
      <Collection/>
    </div>
  )
}

