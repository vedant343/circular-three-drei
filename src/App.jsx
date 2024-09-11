import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  );
};

export default App;
