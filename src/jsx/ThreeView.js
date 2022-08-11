import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import Duck from './Duck'

function ThreeView() {
    
    const ref = useRef()
    return (
        <>
            <div ref={ref}></div>
            <div className='h-screen sticky top-0'>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <pointLight intensity={2} position={[10, 0, 5]} />
                    <Duck canvas={ref} position={[0, 0, 0]} />
                </Canvas>
            </div>
        </>
        
    )
}

export default ThreeView;