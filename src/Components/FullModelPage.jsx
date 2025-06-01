// FullModelPage.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Bounds } from "@react-three/drei";
import { MyModel } from "./MyModel";

const FullModelPage = () => {
  return (
    <>
      <style>{`
        html, body, #root, #full-model-container {
          margin: 0; padding: 0; height: 100%; width: 100%;
          overflow: hidden;
          background-color: var(--bg-color);
        }
      `}</style>
      <div id="full-model-container" style={{ height: "100vh", width: "100vw" }}>
        <Canvas style={{ height: "100%", width: "100%" }}>
          <OrbitControls makeDefault />
          <Environment preset="studio" />
          <Bounds fit clip observe margin={1.1}>
            <MyModel />
          </Bounds>
        </Canvas>
      </div>
    </>
  );
};

export default FullModelPage;
