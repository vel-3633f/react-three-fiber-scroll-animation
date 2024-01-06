import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";
import { Image, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

function Images() {
  const { height } = useThree((state) => state.viewport);
  const group = useRef<Group>(null!);
  const data = useScroll();

  useFrame(() => {
    for (let i = 0; i < 4; i++) {
      // @ts-ignore
      group.current.children[i].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    }
  });
  return (
    <group ref={group}>
      <Image url="./img1.jpg" scale={[4, height]} position={[-1, 0, 1]} />
      <Image url="./img2.jpg" scale={3} position={[2, 0, 1]} />
      <Image url="./img3.jpg" scale={[1, 3.5]} position={[-2.3, -height, 2]} />
      <Image
        url="./img3.jpg"
        scale={[1, 2.7]}
        position={[-1.4, -height - 0.7, 1]}
      />
      <Image
        url="./img4.jpg"
        scale={[1.4, 2]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={1} horizontal={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1
            style={{
              position: "absolute",
              top: "60vh",
              left: "1.5em",
              fontSize: "17em",
            }}
          >
            Be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "140vh",
              left: "40vw",
              fontSize: "17em",
            }}
          >
            Creative
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
