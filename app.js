// document.getElementsByName("body");

// function change(event) {
//     var back = "black";
//     var color = "#fff"
//     event.body.background = back;
//     event.body.text = color;
// }


const barButtom = document.querySelector("#click");
const navList = document.querySelector(".nav-list");

barButtom.addEventListener("click", () => {
    // barButtom.classList.toggle("active");
    document.querySelector(".nav-list").classList.add("active");
    // navList.innerHTML = "grid"
    console.log("click")
})

document.getElementById("close").addEventListener("click", ()=>{
    document.querySelector(".nav-list").classList.remove("active");
    console.log("click close")
})


