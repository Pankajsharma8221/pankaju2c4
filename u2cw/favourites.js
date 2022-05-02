// write js code here corresponding to favourites.html
var matcharr=JSON.parse(localStorage.getItem("schedule"))
displaydata(matcharr)
function displaydata(data){
    data.forEach(function (elem,index){
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
        td6.innerText="Delete"
        td6.setAttribute("class","deleteText")
        td6.addEventListener("click",function(){
            deleteItem(elem,index)
        })
    })


}
function deleteItem(elem,index){
    matcharr.splice(index,1)
    localStorage.setItem("schedule").JSON.stringify(matcharr)
}