import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import Duck from './Duck'

function ThreeView() {
    const canvas = useRef();

    return (
        <>
            <div className='h-screen w-full fixed z-0 pointer-events-none'>
                <Canvas classname="h-screen" ref={canvas} camera={{
                    rotation: [-0.5, 0, 0],
                    position: [0, 2, 4],
                    type: "OrthographicCamera"
                }}>
                    <ambientLight intensity={0.5}/>
                    <pointLight shadow={1} intensity={2} position={[10, 0, 5]} />
                    <Duck canvas={canvas} position={[0, 0, 0]} />
                </Canvas>
            </div>
        </>
        
    )
}

export default ThreeView;