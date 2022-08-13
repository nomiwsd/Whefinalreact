import React from 'react'
import Landing from './LandingPage/Landing'
import Benefits from './Benefits/Benefits'
import About from './About/About'
import Collection from './Collection/Collection'
import Mint from './Mint/Mint'
import Roadmap from './Roadmap/Roadmap'
import Explore from './Explore/Explore'

function Index_main() {
  return (
    <div>
      <Landing/>
        <Benefits/>
        <About/>
        <Collection/>
        <Mint/>
        <Roadmap/>
       <Explore/>
    </div>
  )
}

export default Index_main
