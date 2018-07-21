showMenu(menu, 100, 10);

function showMenu(element, x, y) {
    let classList = element.classList,
        style = element.style,
        hideClass = 'hide',
        pxUnit = 'px';

    // style.left = x + pxUnit;
    // style.top = y + pxUnit;
    
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();

        style.left = (x + event.pageX) + pxUnit;
        style.top = (y + event.pageY) + pxUnit;
        classList.remove(hideClass);
    })

    document.addEventListener('click', () => classList.add(hideClass))
}

