import React from "react";
import "./Landingpage.css";
import Musiclogo from "./assets/music.svg";
import Livepeerlogo from "./assets/Livepeer.svg";
import Polygonelogo from "./assets/polygon.svg";
import Zoralogo from "./assets/zora.svg";
import nftstoragelogo from "./assets/nftstorage.svg";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import circleImg from "./assets/circle.png";
import { Suspense, useCallback, useMemo, useRef } from "react";
import { useState, useEffect } from "react";
import Unstoppable from "./Unstoppable";
import { WorldIDWidget } from "@worldcoin/id";
import { Intercom, Window, Launcher } from '@relaycc/receiver';







function Home() {


  return (
    <div className="Login-Button">
      <Unstoppable />
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

      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>

  )
}

export default Home