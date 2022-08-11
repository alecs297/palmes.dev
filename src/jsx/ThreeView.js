import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import Duck from './Duck'

function ThreeView() {
    
    const origin = useRef();
    const canvas = useRef();

    return (
        <>
            <div ref={origin}></div>
            <div className='h-screen sticky top-0'>
                <Canvas ref={canvas} camera={{
                    rotation: [-0.5, 0, 0],
                    position: [0, 2, 4],
                }}>
                    <ambientLight intensity={0.5}/>
                    <pointLight shadow={1} intensity={2} position={[10, 0, 5]} />
                    <Duck origin={origin} position={[0, 0, 0]} />
                </Canvas>
            </div>
        </>
        
    )
}

export default ThreeView;