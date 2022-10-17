import { sleep } from '../utils/sleep'

const fog_min = 0;
const fog_max = 20;

export async function fogAnimation(setFog) {
    for(let i = 0; i <= 50; i++) {
        const step = fog_max - fog_min;
        await sleep(40)
        setFog(fog_min + (i * step) / 50);
    }
}

export async function ambientLightAnimation(setAmbientLight) {
    await sleep(1000)
    setAmbientLight(0.25);
    await sleep(300);
    setAmbientLight(0);
    await sleep(400);
    setAmbientLight(0.25);
    await sleep(200);
    setAmbientLight(0);
    await sleep(100);
    setAmbientLight(0.5);
}

export async function pointLightAnimation(setPointLight) {
    await sleep(1900)
    setPointLight(1.5)
}