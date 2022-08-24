export function getScrollPercent(container) {
    let origin = container.children[0];

    let res = (-1)*(origin.getBoundingClientRect().bottom) / (container.scrollHeight - document.body.scrollHeight)

    return res > 0 ? res <= 1 ? res : 1 : 0;
}