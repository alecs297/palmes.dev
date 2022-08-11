import { Canvas } from '@react-three/fiber'

import Duck from './Duck'

function ThreeView() {
    
    return (
        <div className='h-screen'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Duck position={[-1.2, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default ThreeView;