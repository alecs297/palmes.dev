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
    let last_time_scroll = Date.now();

    let last_frame_before_turn = 0;

    const move_timeout_ms = 100
    const start_pos_x = 0
    const end_pos_x = 10

    const start_rot_y = -Math.PI/2
    const end_rot_y = start_rot_y + Math.PI

    // convert distance to animation frames
    const ms_per_percentage = 0.15;
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
        const moving = last_frame_scroll !== scrollY;
        const is_good_way = (duck.current.rotation.y === (scrollY - last_frame_scroll < 0 ? start_rot_y : end_rot_y))

        if (moving) {
            switchAnimation(1)
            if (!is_good_way) {
                let rotation = duck.current.rotation.y + ( end_rot_y - start_rot_y ) * ((scrollY - last_frame_scroll) / percentage_for_turn);
                duck.current.rotation.y = Math.min(Math.max(start_rot_y, rotation), end_rot_y)
                window.scroll(0, last_frame_before_turn)

            }
            let position_x = (end_pos_x - start_pos_x) * ((scrollY) / (percentage_for_move))
            duck.current.position.x = position_x
            last_frame_before_turn = scrollY
            

            mixer.update(Math.abs(scrollY - last_frame_scroll) / ms_per_percentage)
            last_time_scroll = Date.now()

        } else {
            if (scrollY === 0 || scrollY === 1 || (Date.now() - last_time_scroll > move_timeout_ms)) {
                switchAnimation(0)
                mixer.update(delta)
            }
        }

        last_frame_scroll = scrollY
    })

    useEffect(() => {
        duck.current.rotation.x = 0.4
        duck.current.rotation.y = -0.7
    }, [duck, start_rot_y])

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        ref={duck} 
        scale={1}>
            <Suspense fallback={null}>
                <primitive scale={0.75} object={gltf.scene}/>
            </Suspense>
        </mesh>
    )
}

export default Duck;