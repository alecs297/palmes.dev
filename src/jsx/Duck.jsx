import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useEffect, useState, useRef } from 'react'
import { AnimationMixer, MathUtils } from "three"

import { updatePositions, convertMoves } from '../utils/engine'
import { getScrollPercent } from '../utils/scroll'
import DuckMoves from "../movements/duck"

// convert distance to animation frames
const ms_per_percentage = 0.15;
// inactivity timeout before switching to idle animation
const move_timeout_ms = 50

function Duck({canvas}) {

    let state = null;

    const [cameraRef, setCameraRef] = useState(null)

    const container = canvas.current.parentElement.parentElement.parentElement.parentElement;

    const duck = useRef()

    const gltf = useLoader(GLTFLoader, 'models/duck_centered.glb')
    const mixer = new AnimationMixer(gltf.scene)

    let animation = null;
    let last_frame_scroll = 0;
    let last_time_scroll = Date.now();
    let last_frame_reverse = false;

    let movements = DuckMoves;

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

    useThree(({camera}) => {
        let vFOV = MathUtils.degToRad( camera.fov );

        let max_y = 2 * Math.tan( vFOV / 2 ) * 5; // visible height
        let max_x = max_y * camera.aspect;        // visible width

        movements = convertMoves(DuckMoves, max_x, max_y)

        if (!cameraRef) setCameraRef(camera)
    })

    useEffect(() => updatePositions(duck.current, movements[0], movements[0], 0), [duck, movements])

    useFrame((state, delta) => {

        const scrollY = getScrollPercent(container);
        const moving = (scrollY === last_frame_scroll) ? 0 : (scrollY > last_frame_scroll ? 1 : -1);

        let start = movements[0];
        let end = movements[1];

        for (let i = 0; i < movements.length && movements[i].frame <= (scrollY * 100); i++) {
            const frame = movements[i];
            start = frame;
            end = (i < movements.length - 1) ? movements[i + 1] : frame;
        }

        const reverse = moving === -1 && start.frame !== end.frame;
        
        if (moving) {

            switchAnimation(1)

            updatePositions(duck.current, start, end, scrollY, reverse, (last_frame_reverse === end.frame))

            mixer.update(Math.abs(scrollY - last_frame_scroll) / ms_per_percentage)
            last_time_scroll = Date.now()

        } else if (Date.now() - last_time_scroll > move_timeout_ms) {

            if (scrollY === 0 && duck.current.rotation.y !== start.rotation.y) {
                let begin = (duck.current.rotation.y) % (2 * Math.PI)
                let target = (start.rotation.y) % (2 * Math.PI)
                let rotation = Math.PI / 10

                if (Math.abs(target - begin) < rotation) {
                    duck.current.rotation.y = start.rotation.y
                } else {
                    duck.current.rotation.y = (duck.current.rotation.y - rotation) % (Math.PI * 2);
                }
            }

            switchAnimation(0)
            mixer.update(delta);
        }

        last_frame_scroll = scrollY;
        last_frame_reverse = moving === 1 ? false : (last_frame_reverse || end.frame)
    })

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        ref={duck} 
        scale={1}>
            <Suspense hidden={!cameraRef} fallback={null}>
                <primitive scale={0.75} object={gltf.scene}/>
            </Suspense>
        </mesh>
    )
}

export default Duck;