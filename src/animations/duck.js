import { sleep } from '../utils/sleep'

const fog_min = 0;
const fog_max = 20;

export async function fogAnimation(setFog) {
    for(let i = 0; i <= 100; i++) {
        const step = fog_max - fog_min;
        await sleep(40)
        setFog(fog_min + (i * step) / 50);
    }
}