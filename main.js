import './style.css'
import {HELLO_WORLD_TEXT, HELLO_WORLD_TITLE} from "./constant.js";

document.querySelector('#app').innerHTML = `

  <div style="background-color: green;">
        <p>hello</p>
        <p style="color: blue;">${HELLO_WORLD_TEXT}</p>
        <p>Oh no an other modification</p>
  </div>
`

document.title= HELLO_WORLD_TITLE



