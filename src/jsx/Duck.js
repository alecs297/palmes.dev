import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useEffect } from 'react'
import { AnimationMixer } from "three"

function Duck({canvas=null}) {

    let state = null;

    let duck = useRef()

    const gltf = useLoader(GLTFLoader, 'models/duk.glb')
    const mixer = new AnimationMixer(gltf.scene)

    let animation = null;
    let last_frame_scroll = 0;


    const start_pos_x = 0
    const end_pos_x = 10

    const start_rot_y = -0.9
    const end_rot_y = start_rot_y + Math.PI

    // convert distance to animation frames
    const ms_per_percentage = 0.1;
    // percentage of scroll allowed for turning
    const percentage_for_turn = 0.1
    // percentage of scroll allowed for moving
    const percentage_for_move = 0.7

    function getScrollPercent() {
        let res = (-1)*(canvas.current.getBoundingClientRect().top + window.scrollY) / document.body.getBoundingClientRect().height
        return res > 0 ? res <= 1 ? res : 1 : 0;
    }

    function switchAnimation(i) {
        if (state !== i) {
            if (animation) animation.fadeOut(1);
            let new_action = mixer.clipAction(gltf.animations[i]);
            new_action.reset();
            new_action.fadeIn(1);
            new_action.play();
            animation = new_action;
            state = i;
        }
    }

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {

        const scrollY = getScrollPercent();

        if (scrollY === 0 || scrollY === 1) {
            duck.current.rotation.x = 0.5
            switchAnimation(0)
            mixer.update(delta)

        } else {
            let rotation = duck.current.rotation.y + ( end_rot_y - start_rot_y ) * ((scrollY - last_frame_scroll) / percentage_for_turn);

            duck.current.rotation.y = Math.min(Math.max(start_rot_y, rotation), end_rot_y)

            let position_x = (end_pos_x - start_pos_x) * ((scrollY) / (percentage_for_move))

            duck.current.position.x = position_x




            
            switchAnimation(1)
            mixer.update((scrollY - last_frame_scroll) / ms_per_percentage)
        }

        last_frame_scroll = scrollY;
        
    })

    useEffect(() => {
        duck.current.rotation.x = 0.5
        duck.current.rotation.y = start_rot_y
    }, [duck])

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