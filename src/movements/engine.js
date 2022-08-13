export function updatePositions(object, start, end, scrollY, reverse=false, just_reversed=0) {

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

export function getPath(start, end, scroll, frame_start, frame_end) {
    const percentage = (((scroll * 100) - frame_start) / (frame_end - frame_start));
    let r = (end - start) * percentage + start
    return isFinite(r) ? r : start
}

export function convertMoves(moves, width, height) {
    return JSON.parse(JSON.stringify(moves)).map(move => {
        move.position.x = (move.position.x * width) / 10
        move.position.y = (move.position.y * height) / 10
        return move;
    })
}