
const element = document.getElementById('circle'),
      objElement = {};

element.addEventListener ('mousedown', event => {

    const biasX = element.getBoundingClientRect().left, 
          biasY = element.getBoundingClientRect().top;

    objElement.shiftY = event.pageY - biasY;
    objElement.shiftX = event.pageX - biasX;
    objElement.pressX = event.pageX - objElement.shiftX;
    objElement.pressY = event.pageY - objElement.shiftY;
    objElement.width = event.target.clientWidth;
    objElement.height = event.target.clientHeight;

    element.style.position = 'absolute';
    document.body.appendChild(element);
    element.style.zIndex = 1000; 

    document.onmousemove = event => {
        element.style.left = event.pageX - objElement.shiftX + 'px';
        element.style.top = event.pageY - objElement.shiftY + 'px';
    };

    element.addEventListener('mouseup', event => {

        document.onmousemove = null;

        const CoordDropElementX = [(objElement.shiftX + 1)*(-1), objElement.width - objElement.shiftX + 1],
        CoordDropElementY =[(objElement.shiftY + 1)*(-1), objElement.height - objElement.shiftY + 1];

        let elemUp, 
            elemDrop,
            arrayTest = [];
        
        CoordDropElementX.forEach(x => {
            CoordDropElementY.forEach(y => {
                elemUp = document.elementFromPoint(event.clientX + x, event.clientY + y);
                elemDrop = elemUp.closest('.droppable');
 
                if (elemDrop) {
                    arrayTest.push(true);  
                }else {
                    arrayTest.push(false);
                }
            })
        });

        if (arrayTest.every(item => item === true)) {
            elemDrop.appendChild(element)
        } else {
            element.style.left = objElement.pressX + 'px';
            element.style.top = objElement.pressY + 'px';
        }
    });
});

element.ondragstart = function() {
  return false;
};


