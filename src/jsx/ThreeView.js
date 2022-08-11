import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import Duck from './Duck'

function ThreeView() {
    
    const ref = useRef()
    return (
        <div className='h-screen'>
            <Canvas ref={ref}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Duck canvas={ref} position={[0, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default ThreeView;