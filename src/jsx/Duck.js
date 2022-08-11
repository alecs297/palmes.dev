import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { AnimationMixer } from "three"

function getScrollPercent() {
    return window.scrollY
}

function Duck({ref=null}) {

    // This reference gives us direct access to the THREE.Mesh object
    let duck = useRef()
    if (ref) duck=ref;

    const gltf = useLoader(GLTFLoader, 'models/duk.glb')
    const mixer = new AnimationMixer(gltf.scene)


    // standing animation is #0
    mixer.clipAction(gltf.animations[0]).play()

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {

        const start_pos_y = 0
        const end_pos_y = 10
        
        const start_pos_z = 0
        const end_pos_z = 5

        const start_rot_y = -0.7
        const end_rot_y = 1

        const scrollY = getScrollPercent();

        // percentage of scroll allowed for turning
        const percentage_for_turn = 0.3

        // walking animation is #1
        const steps = gltf.animations[1]

        console.log(scrollY)

        if (scrollY === 0) {
            duck.current.rotation.x = 0.5
            duck.current.rotation.y = -0.7
        } else if (scrollY < percentage_for_turn) {
            duck.current.rotation.x = ( end_rot_y - start_rot_y ) * (scrollY / percentage_for_turn)
            // console.log(scrollY, duck.current.rotation.x)

        }
        
        mixer.update(delta)
    })

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        ref={duck} 
        scale={1}>
            <Suspense fallback={null}>
                <primitive scale={1} object={gltf.scene}/>
            </Suspense>
        </mesh>
    )
}

export default Duck;