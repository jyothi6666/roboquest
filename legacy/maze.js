// ---------- CODE / MAZE GAME ----------
const GRID = 6;
// 0 open, 1 wall
const layout = [
  [0,0,0,1,0,0],
  [0,1,0,1,0,0],
  [0,1,0,0,0,1],
  [0,1,1,1,0,1],
  [0,0,0,1,0,0],
  [1,1,0,0,0,2]
];
const mazeEl = document.getElementById('maze');
let start = {r:0,c:0};
let goal = {r:0,c:0};
layout.forEach((row,r)=>row.forEach((v,c)=>{
  const cell = document.createElement('div');
  cell.className = 'cell' + (v===1?' wall':'') + (v===2?' goal':'');
  cell.dataset.r = r; cell.dataset.c = c;
  if(v===2){ goal = {r,c}; }
  mazeEl.appendChild(cell);
}));
const robotToken = document.createElement('div');
robotToken.className = 'robot-token';
robotToken.textContent = '🤖';
mazeEl.appendChild(robotToken);

let robotPos = {...start};
function placeRobot(animated){
  const cellSize = 47;
  robotToken.style.transform = `translate(${robotPos.c*cellSize}px, ${robotPos.r*cellSize}px)`;
}
mazeEl.style.position='relative';
placeRobot();

const queue = [];
const queueEl = document.getElementById('queue');
document.querySelectorAll('.palette button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    queue.push(btn.dataset.cmd);
    renderQueue();
  });
});
function renderQueue(){
  queueEl.innerHTML='';
  const icons = {up:'⬆️',down:'⬇️',left:'⬅️',right:'➡️'};
  queue.forEach(cmd=>{
    const chip = document.createElement('span');
    chip.className='chip';
    chip.textContent = icons[cmd];
    queueEl.appendChild(chip);
  });
}
document.getElementById('clearBtn').addEventListener('click', ()=>{
  queue.length = 0;
  renderQueue();
  robotPos = {...start};
  placeRobot();
  document.getElementById('mazeStatus').textContent = 'Build a program and press Run.';
});

document.getElementById('runBtn').addEventListener('click', async ()=>{
  robotPos = {...start};
  placeRobot();
  const status = document.getElementById('mazeStatus');
  status.textContent = 'Running...';
  for(const cmd of queue){
    let next = {...robotPos};
    if(cmd==='up') next.r -= 1;
    if(cmd==='down') next.r += 1;
    if(cmd==='left') next.c -= 1;
    if(cmd==='right') next.c += 1;
    if(next.r<0||next.r>=GRID||next.c<0||next.c>=GRID||layout[next.r][next.c]===1){
      status.textContent = '💥 Crashed into a wall or edge — try again!';
      return;
    }
    robotPos = next;
    placeRobot();
    await new Promise(res=>setTimeout(res,380));
  }
  if(robotPos.r===goal.r && robotPos.c===goal.c){
    status.textContent = '⭐ Reached the goal! Great program.';
  } else {
    status.textContent = 'Program finished — not at the star yet. Adjust and run again!';
  }
});
