import React, { useEffect, useState } from "react";
import "./Landingpage.css";
// import Musiclogo from "./assets/music.svg";
// import Livepeerlogo from "./assets/Livepeer.svg";
// import Polygonelogo from "./assets/polygon.svg";
// import Zoralogo from "./assets/zora.svg";
// import nftstoragelogo from "./assets/nftstorage.svg";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import {
//   Canvas,
//   extend,
//   useFrame,
//   useLoader,
//   useThree,
// } from "react-three-fiber";
// import circleImg from "./assets/circle.png";
// import { Suspense, useCallback, useMemo, useRef, createContext } from "react";
// import { useState, useEffect } from "react";
// import Unstoppable from "./Unstoppable";
import { WorldIDWidget } from "@worldcoin/id";
import { Intercom, Window, Launcher } from '@relaycc/receiver';
// import connectors from "./connectors.ts";
// import { useWeb3React } from '@web3-react/core';
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector';


function Home() {

  // const { active, account, error, activate, deactivate } = useWeb3React()

  // const login = async () => {
    
  // }

  // function createConnectHandler(connectorId) {
  //   return async () => {
  //     try {
  //       const connector = connectors[connectorId]

  //       // Taken from https://github.com/NoahZinsmeister/web3-react/issues/124#issuecomment-817631654
  //       if (
  //         connector instanceof WalletConnectConnector &&
  //         connector.walletConnectProvider
  //       ) {
  //         connector.walletConnectProvider = undefined
  //       }

  //       await activate(connector)
  //       if (error) {
  //         throw error;
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }

  // async function handleDisconnect() {
  //   try {
  //     deactivate()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  
  return (
    <div className="Login-Button">

      {/* <button onClick={handleDisconnect}>Disconnect</button> */}
      {/* <button onClick={() => { login() }}>Login With unstoppable Domain</button> */}
      <div className="world-id">
        <WorldIDWidget
          actionId="wid_staging_4f717921bbc1f756b213dfe8cf99954c" // obtain this from developer.worldcoin.org
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
          debug={true} // to aid with debugging, remove in production
        />
      </div>
      <div className="heading-tag">

        <div className="herotext">
          <h1 className="hero-text">STREAM SCREAM</h1>
        </div>
        <div className="tag-line">
          <h1>Stream your music, Share the love. LIVE.</h1>
        </div>
        <div className="relay">
          <Launcher wallet={"0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce"} />
          <Intercom>
            <Window />
          </Intercom>
        </div>

      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

// return (
//   <div className="Login-Button">

//     {Object.keys(connectors).map(v => (
//       <button key={v} onClick={createConnectHandler(v)}>
//         Connect to {v}
//       </button>
//     ))}
//     {/* <button onClick={() => { login() }}>Login With unstoppable Domain</button> */}
//     <div className="world-id">
//       <WorldIDWidget
//         actionId="wid_staging_4f717921bbc1f756b213dfe8cf99954c" // obtain this from developer.worldcoin.org
//         signal="my_signal"
//         enableTelemetry
//         onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
//         onError={(error) => console.error(error)}
//         debug={true} // to aid with debugging, remove in production
//       />
//     </div>
//     <div className="heading-tag">

//       <div className="herotext">
//         <h1 className="hero-text">STREAM SCREAM</h1>
//       </div>
//       <div className="tag-line">
//         <h1>Stream your music, Share the love. LIVE.</h1>
//       </div>
//       <div className="relay">
//         <Launcher wallet={"0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce"} />
//         <Intercom>
//           <Window />
//         </Intercom>
//       </div>

//     </div>

//     <div className="ocean">
//       <div className="wave"></div>
//       <div className="wave"></div>
//       <div className="wave"></div>
//     </div>
//   </div>
// 

export default Home
