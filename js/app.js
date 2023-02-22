/* 'use strict'

const contePadre = document.querySelector('.contePadre')
let puntero = document.getElementById('cursor')
const ladoPuntero = 40

puntero.style.width = ladoPuntero + "px"
puntero.style.height = ladoPuntero + "px"

contePadre.addEventListener('mousemove', (e) =>{    
    puntero.style.top = (e.pageY - (ladoPuntero/2) )+ "px"
    puntero.style.left = (e.pageX - (ladoPuntero/2) )+ "px"
}) */