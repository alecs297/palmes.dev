import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, useDetectGPU, useGLTF } from "@react-three/drei"
import { Suspense, useRef, useState } from 'react'
import { useMemo } from 'react';
import { objectIsViewedEntirely } from '../utils/engine';
import fakemacbook from '../images/fakemacbook.png'

function isIframe() {
    return window.top === window.self;
}

function ModelEmbed({closed}) {
    return (
        <Html scale={0.125} position={[-0.15, 1.9, -2.8]} rotation={[-Math.PI/9.5, 0, 0]} transform occlude>        
            {
                    !closed && (isIframe() ? (
                        <div className="h-[840px] w-[1344px] rounded-md">
                            <div className="w-full h-[6%] flex bg-macos-window rounded-t-lg">
                                <div className="w-2/12 my-auto mx-4 flex space-x-2">
                                    <span className="rounded-full inline-flex w-4 h-4 bg-macos-close"></span>
                                    <span className="rounded-full inline-flex w-4 h-4 bg-macos-minimize"></span>
                                    <span className="rounded-full inline-flex w-4 h-4 bg-macos-maximize"></span>
                                </div>
                                <div className="w-8/12 my-auto">
                                    <div className="border w-full border-2-macos-window-dark rounded-md text-center">
                                        <span className="text-content-greyed w-full">palmes.dev</span>
                                    </div>
                                </div>
                                <div className='w-2/12'/>
                            </div>
                            <iframe className='h-[90%] w-full' src={window.location.href} title="Inception"></iframe>
                        </div>
                    ) : (
                        <div className='h-[840px] w-[1344px]'>
                            <img className="aspect-square h-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3ElEQVRoge2ZPZKDMAyFlaGg9BE4CkeDo3EUjkCZgolXerL5S9jdmFS7TwWDzAeFZMvyQ4RGo/0h6yLsLtUD7tDCrXw4DsSuYbipdfwhywN1581TYq8wjedUa3gVQbRHCRre+aZ+T+xDGLIgXd+muUzso5jILQrmeIPiQOwnzK41xu3OXvquhhB7D4swxyzs7Rgwmd2InWA7c0zC/dVDYgUYsjDVCLlh5ulsniuvscROMF3no+7tGBfUWN/r7a3NqidWiLWDDnuHnwqCZSHOsjdiRdgS59ypqh/SW9u1QOyw6luN5zqO8Kaiqq2UELuMaQ/gWdDaC1drRfTOalMciB0xC29a5Z01TyEflJ6zQOxNTKtBY2UULT1agtFVFJSKntgJZhaSLgdsaGwu+960o4gVYHauR21ANVBq00odjv/ESjBpJskHUtReSVmQXRaIHTGxPctlOkl7lm9hh46LWCnm+lLE7DW5CSlxcY/YSyxbWuZ2G5IoGoldxjp4Sc0zcV47hFVkXr5C7IghgFmc77MeAnfT4RMrxVr/Z5RE5hhPagixS1jc/Ii/S1afiP0Ci8u5XtK/j16IXcTsmlsCiMyLKPok+hFbMY/jKoBg9tZztYsusUKMRqP9J/sCjs7Idx6sLL4AAAAASUVORK5CYII=" alt="Congratulations though" />
                        </div>
                    ))
            }
        </Html>
    )
}

function Model() {

    const gltf = useGLTF('models/macbook.glb');
    const mesh = useRef();

    const [closed, setClosed] = useState(true);

    const gpu = useDetectGPU();
    const rendered = (gpu.tier > 0 && !gpu.isMobile)

    useFrame((state, delta) => {

        if (mesh.current) {
            if (isIframe() && !objectIsViewedEntirely(state.camera, mesh.current)) {
                state.camera.position.z += 0.1;
            }
        }
    })

    return (
        <Suspense fallback={null}>
            <group
                ref={mesh}
                position={[0, -2.5, 0]}
                rotation={[Math.PI/8, 0, Math.PI/12]}
                onClick={() => { if (closed) setClosed(false)}}
            >
                <primitive scale={20} object={gltf.scene}/>
                {
                    rendered && <ModelEmbed closed={closed} />
                }

            </group>
        </Suspense>
    )
}

export function Macbook() {

    return (
        <div className="max-h-inherit max-w-inherit aspect-square">
            <Canvas camera={
                {
                    position: [0, 2, 1],
                    type: "OrthographicCamera"
                }
            }>
                {
                    useMemo(() => {
                        return <Model/>
                    }, [])
                }
                <pointLight shadow={0} intensity={1} position={[0, 1, -5]} />
                <pointLight shadow={0} intensity={1} position={[0, 5, 0]} />
                <OrbitControls enableDamping={true}/>
            </Canvas>  
        </div>
        
    )
}

export function FakeMacbook() {
    return (
        <img src={fakemacbook} alt="Macbook Air"/>
    )
}