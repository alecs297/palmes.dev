import { Frustum, Matrix4, Vector3, Box3 } from 'three';


export function updatePositions(object, start, end, scrollY, reverse=false, just_reversed=0) {

    object.position.x = getPath(start.position.x, end.position.x, scrollY, start.frame, end.frame);
    object.position.y = getPath(start.position.y, end.position.y, scrollY, start.frame, end.frame);
    object.position.z = getPath(start.position.z, end.position.z, scrollY, start.frame, end.frame);
    object.rotation.x = getPath(start.rotation.x, end.rotation.x, scrollY, start.frame, end.frame);
    object.rotation.z = getPath(start.rotation.z, end.rotation.z, scrollY, start.frame, end.frame);

    if (reverse) {
        object.rotation.y = getPath((start.rotation.y + Math.PI), (end.rotation.y + (Math.PI * !just_reversed)), scrollY, start.frame, end.frame);
    } else {
        object.rotation.y = getPath(start.rotation.y, end.rotation.y, scrollY, start.frame, end.frame);
    }

}

export function getPath(start, end, scroll, frame_start, frame_end) {
    const percentage = (((scroll * 100) - frame_start) / (frame_end - frame_start));
    let r = (end - start) * percentage + start
    return isFinite(r) ? r : start
}

export function distance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2) + Math.pow(pos1.z - pos2.z, 2))
}

export function convertMoves(moves, width, height) {
    return JSON.parse(JSON.stringify(moves)).map(move => {
        move.position.x = (move.position.x * width) / 10
        move.position.y = (move.position.y * height) / 10
        return move;
    })
}

export function objectIsViewedEntirely(camera, object) {
    const frustum = new Frustum()
    const matrix = new Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    frustum.setFromProjectionMatrix(matrix)

    const box = new Box3()
    box.setFromObject(object)

    // check for every point of 3D box
    let res = frustum.containsPoint(new Vector3(box.min.x, box.min.y, box.min.z))
    res = res && frustum.containsPoint(new Vector3(box.min.x, box.min.y, box.max.z))
    res = res && frustum.containsPoint(new Vector3(box.min.x, box.max.y, box.min.z))
    res = res && frustum.containsPoint(new Vector3(box.min.x, box.max.y, box.max.z))
    res = res && frustum.containsPoint(new Vector3(box.max.x, box.min.y, box.min.z))
    res = res && frustum.containsPoint(new Vector3(box.max.x, box.min.y, box.max.z))
    res = res && frustum.containsPoint(new Vector3(box.max.x, box.max.y, box.min.z))
    res = res && frustum.containsPoint(new Vector3(box.max.x, box.max.y, box.max.z))
    return res;
}