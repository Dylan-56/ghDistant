import './style.css'
import {HELLO_WORLD_TEXT, HELLO_WORLD_TITLE} from "./constant.js";

document.querySelector('#app').innerHTML = `
//#1 :  La couleur de fond doit etre cyan #1 
  <div style="background-color: cyan;
  weight:150px;
  height:150px;">
        <p>hello</p>
        <p style="color: blue;">${HELLO_WORLD_TEXT}</p>
        <p>Oh no an other modification</p>
  </div>
`

document.title= HELLO_WORLD_TITLE



