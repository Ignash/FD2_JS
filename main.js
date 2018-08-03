'use strict'
const canvas = document.getElementById('name'),
    ctx = canvas.getContext('2d'),
    coord = [];

    for (var i=1;i<=8;i++){
        ctx.font = "30px serif"
        ctx.fillText(9 - i, 20, 50*i + 30)

        ctx.font = "30px serif"
        ctx.fillText(String.fromCharCode(64 + i), 50*i + 20, 40)


        for (var j=1;j<=8;j++){
            let coordX,
            coordY,
            nameCoord,
            coordElem;
         
            coordX = j*50;
            coordY = i*50;
            nameCoord = `${String.fromCharCode(64 + j)} ${(9 - i)}`;
            coordElem = {
                name: nameCoord,
                coordX: coordX,
                coordY: coordY
            }
            coord.push(coordElem);

            if ( i%2 !== 0 && j%2 !==0 || i%2 === 0 && j%2 === 0) {
                ctx.fillStyle = '#fbd3a0';
                ctx.fillRect(coordX ,coordY,50,50);
            }

            if ( i%2 !== 0 && j%2 === 0 ||  i%2 === 0 && j%2 !==0) {
                ctx.fillStyle = '#3c2418';
                ctx.fillRect(coordX,coordY,50,50);
            }
        }
    }

canvas.addEventListener('click', (event) => {
    const press = document.querySelector('#press');

    coord.forEach((item) => {
        if ((event.offsetX > item.coordX && event.offsetX < (item.coordX + 50)) && (event.offsetY >item.coordY && event.offsetY < (item.coordY + 50)))  {
            press.innerText = `Вы нажали на квадрат: ${item.name}`
        }
    })
})
