// ---------- QUIZ GAME ----------
const questions = [
  {q:"What part of a robot works like its brain?", options:["Controller","Chassis","Battery","Wheel"], a:0},
  {q:"Which part lets a robot 'see' or 'feel' its surroundings?", options:["Actuator","Sensor","Power supply","Frame"], a:1},
  {q:"What do actuators do?", options:["Store energy","Make the robot move","Store code","Take photos"], a:1},
  {q:"Which of these is a beginner-friendly, block-based coding tool?", options:["Assembly","Scratch","Machine code","Binary"], a:1},
  {q:"What powers most robots?", options:["Sunlight only","Batteries","Magic","Wind only"], a:1},
  {q:"What is AI mainly used for inside a robot?", options:["Making it heavier","Helping it decide what to do","Charging the battery","Painting the shell"], a:1},
  {q:"What's a popular student robotics competition?", options:["RoboCup Junior","MathCounts","Spelling Bee","Chess Club"], a:0},
  {q:"A robot that learns a task by watching a human first is using what approach?", options:["Learning from demonstration","Random guessing","Manual remote control only","No sensors at all"], a:0}
];
let qIndex = 0, correct = 0, answered = 0;
function loadQuestion(){
  const q = questions[qIndex % questions.length];
  document.getElementById('qText').textContent = q.q;
  const optsEl = document.getElementById('qOptions');
  optsEl.innerHTML = '';
  document.getElementById('quizFeedback').textContent = '';
  q.options.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.textContent = opt;
    b.addEventListener('click', ()=>{
      Array.from(optsEl.children).forEach(c=>c.disabled = true);
      answered++;
      if(i===q.a){
        b.classList.add('correct');
        correct++;
        document.getElementById('quizFeedback').textContent = '✅ Correct! Tap anywhere below to continue.';
      } else {
        b.classList.add('wrong');
        optsEl.children[q.a].classList.add('correct');
        document.getElementById('quizFeedback').textContent = '❌ Not quite — the right answer is highlighted.';
      }
      document.getElementById('quizScore').textContent = `Score: ${correct} / ${answered}`;
      setTimeout(()=>{ qIndex++; loadQuestion(); }, 1400);
    });
    optsEl.appendChild(b);
  });
}
loadQuestion();
