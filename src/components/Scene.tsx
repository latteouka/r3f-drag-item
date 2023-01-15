import { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Obj from "./Obj";

const Scene = () => {
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1512}
        shadow-mapSize-width={1512}
      />

      {/* <mesh */}
      {/*   rotation={[-Math.PI / 2, 0, 0]} */}
      {/*   position={[0, -0.1, 0]} */}
      {/*   receiveShadow */}
      {/* > */}
      {/*   <planeGeometry attach="geometry" args={[30, 30]} /> */}
      {/*   <meshPhongMaterial */}
      {/*     attach="material" */}
      {/*     color="#ccc" */}
      {/*     side={THREE.DoubleSide} */}
      {/*   /> */}
      {/* </mesh> */}

      <planeHelper args={[floorPlane, 50, 0xff0000]} />

      <gridHelper args={[100, 100]} />

      <Obj setIsDragging={setIsDragging} floorPlane={floorPlane} />

      <OrthographicCamera makeDefault zoom={20} position={[40, 40, 40]} />

      <OrbitControls minZoom={10} maxZoom={50} enabled={!isDragging} />
    </Canvas>
  );
};
export default Scene;
