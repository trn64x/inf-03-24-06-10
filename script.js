function pierwsza(){
    let first = document.getElementById("quotes1");
    let second = document.getElementById("quotes2");
    first.classList.remove("block");
    first.classList.add("none");
    second.classList.remove("none");
    second.classList.add("block");
}
console.log(elem);
function tryCatch(element, input , x){
element.addEventListener("click",() =>{
    const Colors = ["Red", "Blue","Green"];
    element.style.background = Colors;
    element.innerHTML = input;
    x = 10;
    for(let i = 0; i < x; i++){
        console.log(Colors);
    }
})



}
function druga(){
    let second = document.getElementById("quotes2");
    let third = document.getElementById("quotes3");
    second.classList.remove("block");
    second.classList.add("none");
    third.classList.remove("none");
    third.classList.add("block");
}
function trzecia(){
    let first = document.getElementById("quotes1");
    let third = document.getElementById("quotes3");
    third.classList.remove("none");
    third.classList.add("none");
    first.classList.remove("none");
    first.classList.add("block");
    console.log("test!")
}
let first = document.getElementById("quotes1");
let second = document.getElementById("quotes2");
let third = document.getElementById("quotes3");
first.addEventListener("click", ()=>{
    pierwsza();
    console.log("test");
});
second.addEventListener("click", ()=>{
    druga();
    
});
third.addEventListener("click", ()=>{
    trzecia();
    console.log("test")
})
