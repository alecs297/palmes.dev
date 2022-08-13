export function getScrollPercent(origin) {
    let res = (-1)*(origin.getBoundingClientRect().top + window.scrollY) / document.body.getBoundingClientRect().height
    return res > 0 ? res <= 1 ? res : 1 : 0;
}