import './style.css'
import { setupTimer } from './timer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Date Timer</h1>
    <div class="card">
      <div id="timer"/></div> 
    </div>
    <p class="credits">
      - Made by Albin Johansson
    </p>
  </div>
`

setupTimer(document.querySelector<HTMLDivElement>('#timer')!)
