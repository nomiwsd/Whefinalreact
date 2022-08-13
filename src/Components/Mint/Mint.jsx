import React from 'react'
import "./Mint.css"
function Mint() {
  return (
    <div>
         <section className="mintsect">
      <div className="container-fluid">
      <h1 className="featurette-heading p-4">Mint</h1>
        <div className="row featurette">
          <div className="col-md-6 order-md-2">
            <div className="quantity">
              <div className="inputf ">
                <input  type="text" value="1" className="calbox text-center "  />
              </div>
              <div className="top_div_here d-flex flex-column">
                <div className="btn-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button className="btn3 btn-box "><span className="">Mint With BNB</span></button>
                  <p className="fs-4 ">Price : 0 BNB</p>
                  
                </div>
                <div className="btn-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button className="btn3 btn-box">Mint With WHE</button>
                  <p className="fs-4">Price : 0 WHE</p>
                </div>
                <div className="btn2-area1 mt-5 d-flex flex-row justify-content-center gap-3">
                  <button className="btn3 btn-box">Mint With Busd</button>
                  <p className="fs-4">Price : 0 BUSD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="imgcontainer">
              <img
                src="./images/Lion.png"
                alt="Wait for Internet"
                width="55%"
                height="85%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="para1 row">
        <h4 className="hed mt-4">CRYPTOCURRENCIES</h4>
        <h1 className="featurette-heading1 fs-1 mt-1 text-light mb-5">Top Cryptocurrencies</h1>
      </div>

      <div className="container row d-inline-flex justify-content-center align-items-center p-0 mx-0 gap-3  mt-3  mb-5 ">
                <div className="banner1 d-flex col-lg-4 col-md-8 col-10">
                    <div className="d-flex justify-content-center align-items-center">

                        <img src="./images/bnb.png" width="100" height="auto" alt=""/>

                    </div>
                    <div className="d-flex justify-content-center flex-column ps-4">
                        <h3 className=" fs-5 text-center">Binance Coin</h3>
                        <h2 className="fs-5 text-center">USD 268.002 </h2>
                    </div>
                </div>
                <div className="banner2 d-flex col-lg-4 col-md-8 col-10 py-2">
                    <div className="d-flex justify-content-center align-items-center">

                        <img src="logo1.png" width="85" height="auto" alt=""/>

                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column ps-4">
                        <h3 className=" fs-5 text-center">WHE</h3>
                        <h2 className=" fs-5 text-center">USD 0.0002 </h2>
                    </div>

                </div>
            </div>
           </section>

    </div>
  )
}

export default Mint