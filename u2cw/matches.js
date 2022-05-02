// write js code here corresponding to matches.html
var Arr=JSON.parse(localStorage.getItem("schedule"))
displaydata(Arr)
function filter(){
    var selected=document.querySelector("#filterVanue").value;
    var val=Arr.filter(function (elem){
        return elem.ven ==selected
    })

}
var Matcharr=JSON.parse(localStorage.getItem("matches"))||[]
function displaydata(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function (elem){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
td1.innerText=elem.matchno
        var td2=document.createElement("td")
td2.innerText=elem.t1;
        var td3=document.createElement("td")
td3.innerText=elem.t2
        var td4=document.createElement("td")
td4.innerText=elem.d
        var td5=document.createElement("td")
td5.innerText=elem.ven
var td6=document.createElement("td")
td6.innerText="favourite"
td6.style.color="blue"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){
    favouritefun
})
tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)
    })
}
function favouritefun(elem){
    Matcharr.push(elem)
    localStorage.setItem("matchs",JSON.stringify(matcharr))
}
