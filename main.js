'use strict'
const canvas = document.getElementById('name'),
    ctx = canvas.getContext('2d');


    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

ctx.strokeStyle = '#09f';
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.stroke();


ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(250, 50);
ctx.lineTo(300, 150);

ctx.moveTo(220, 110);
ctx.lineTo(280, 110);
ctx.stroke();


ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(350, 50);
ctx.lineTo(350, 150);
ctx.moveTo(350, 100);
ctx.lineTo(420, 150);
ctx.moveTo(350, 100);
ctx.lineTo(420, 50);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(450, 100);
ctx.lineTo(450, 80);
ctx.arcTo(450,50,480,50, 30);
ctx.arcTo(530,50,530,80, 30);
ctx.moveTo(450, 100);
ctx.arcTo(450,150,480,150, 30, false);
ctx.arcTo(530,150,530,120, 30, false);

ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(580, 50);
ctx.lineTo(580, 150);
ctx.lineTo(660, 50);
ctx.lineTo(660, 150);

ctx.stroke();

ctx.strokeStyle = '#09f';
ctx.beginPath();
ctx.moveTo(710, 150);
ctx.lineTo(710, 50);
ctx.lineTo(760, 100);
ctx.lineTo(810, 50);
ctx.lineTo(810, 150);
ctx.stroke();


// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
