import './style.css'
import {HELLO_WORLD_TEXT, HELLO_WORLD_TITLE} from "./constant.js";

document.querySelector('#app').innerHTML = `
  <div>
        <p>hello</p>
        <p>${HELLO_WORLD_TEXT}</p>
  </div>
`

document.title= HELLO_WORLD_TITLE



