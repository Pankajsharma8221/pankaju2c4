// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",Sendto)
var Arr=JSON.parse(localStorage.getItem("schedule"))||[]
function Sendto(){
  event.preventDefault()
  var matchObj={
    matchno:masaiForm.matchNum.value,
    t1:masaiForm.teamA.value,
    t2:masaiForm.teamB.value,
    d:masaiForm.date.value,
    ven:masaiForm.venue.value,
  }
  Arr.push(matchObj)
  localStorage.setItem("schedule",JSON.stringify(Arr))
}
