import './style.css'
import {HELLO_WORLD_TEXT, HELLO_WORLD_TITLE} from "./constant.js";

document.querySelector('#app').innerHTML = `
  <div style="border: solid red 1px;
  width: 200px;
  height: 200px">
        <p>hello</p>
        <p>${HELLO_WORLD_TEXT}</p>
  </div>
`

document.title= HELLO_WORLD_TITLE



