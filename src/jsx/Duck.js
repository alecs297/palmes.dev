import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useEffect } from 'react'
import { AnimationMixer } from "three"

// convert distance to animation frames
const ms_per_percentage = 0.15;
// inactivity timeout before switching to idle animation
const move_timeout_ms = 500

// frame is scrolled percentage
const movements = [
    {
        frame: 1,
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0.8,
            z: 0
        }
    },
    {
        frame: 25,
        position: {
            x: 0.75,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0
        }
    },
    {
        frame: 40,
        position: {
            x: 1,
            y: -0.5,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    {
        frame: 60,
        position: {
            x: 1,
            y: -0.8,
            z: 0
        },
        rotation: {
            x: 0,
            y: -Math.PI / 2,
            z: 0
        }
    },
    {
        frame: 99,
        position: {
            x: 0.5,
            y: 0,
            z: 1
        },
        rotation: {
            x: 0,
            y: -0.9,
            z: 0
        }
    },
]

function updatePositions(object, start, end, scrollY, reverse=false, just_reversed=0) {

    object.position.x = getPath(start.position.x, end.position.x, scrollY, start.frame, end.frame);
    object.position.y = getPath(start.position.y, end.position.y, scrollY, start.frame, end.frame);
    object.position.z = getPath(start.position.z, end.position.z, scrollY, start.frame, end.frame);
    object.rotation.x = getPath(start.rotation.x, end.rotation.x, scrollY, start.frame, end.frame) % (2 * Math.PI);
    object.rotation.z = getPath(start.rotation.z, end.rotation.z, scrollY, start.frame, end.frame) % (2 * Math.PI);

    if (reverse) {
        object.rotation.y = getPath((start.rotation.y + Math.PI), (end.rotation.y + (Math.PI * !just_reversed)), scrollY, start.frame, end.frame) % (2 * Math.PI);
    } else {
        object.rotation.y = getPath(start.rotation.y, end.rotation.y, scrollY, start.frame, end.frame) % (2 * Math.PI);
    }

}

function getPath(start, end, scroll, frame_start, frame_end) {
    const percentage = (((scroll * 100) - frame_start) / (frame_end - frame_start));
    let r = (end - start) * percentage + start
    return isFinite(r) ? r : start
}

function Duck({origin=null}) {

    let state = null;

    const duck = useRef()
    // TODO
    const tooltip = useRef()

    const gltf = useLoader(GLTFLoader, 'models/duk.glb')
    const mixer = new AnimationMixer(gltf.scene)

    let animation = null;
    let last_frame_scroll = 0;
    let last_time_scroll = Date.now();
    let last_frame_reverse = false;

    function getScrollPercent() {
        let res = (-1)*(origin.current.getBoundingClientRect().top + window.scrollY) / document.body.getBoundingClientRect().height
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

    useEffect(() => updatePositions(duck.current, movements[0], movements[0], 0), [duck])

    useFrame((state, delta) => {

        const scrollY = getScrollPercent();
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
            <Suspense fallback={null}>
                <primitive scale={0.75} object={gltf.scene}/>
            </Suspense>
        </mesh>
    )
}

export default Duck;