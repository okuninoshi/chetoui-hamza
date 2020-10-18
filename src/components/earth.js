import React, { useState, useEffect } from 'react'
import { Canvas, } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'



const EarthModel = () => {
    const [model, setModel] = useState();

    useEffect(() => {
        new GLTFLoader().load('/lowpoly_floating_tree/scene.gltf', setModel);
    }, []);

    return model ? <primitive object={model.scene} position={[0, -3, 0]} /> : null;

}

const Earth = () => {
    return (
        <Canvas shadowMap camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.75} />
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight
                castShadow
                intensity={2.25}
                angle={0.2}
                penumbra={1}
                position={[25, 25, 25]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />
            <EarthModel />
            <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                enableDamping
                dampingFactor={0.5}
                rotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    )
}


export default Earth