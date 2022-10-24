import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react';
import { useRef, useState } from 'react'

import Duck from './Duck'

function ThreeView() {
    const canvas = useRef();
    const [fog, setFog] = useState(0);

    return (
        <>
            <div className='h-screen w-full fixed z-0 pointer-events-none'>
                <Canvas className="h-screen" ref={canvas} camera={{
                    rotation: [-Math.PI/12, 0, 0],
                    position: [0, 2, 4],
                    type: "OrthographicCamera"
                }}>
                    <ambientLight intensity={0.5}/>
                    <pointLight shadow={0} intensity={2} position={[10, 0, 5]} />

                    <gridHelper rotation={[0, Math.PI/4, 0]} args={[100, 100, "#444", "#444"]} />

                    <fog attach="fog" args={['#000', 0, fog]} />

                    {
                        useMemo(() => {
                            return <Duck
                                setFog={setFog}
                                canvas={canvas}
                            />
                        }, [])
                    }

                </Canvas>
            </div>
        </>
        
    )
}

export default ThreeView;