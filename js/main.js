// get value from input


function display(){
    document.querySelector(".display").style.display = "block"
    let name = document.querySelector("#name").value.toLowerCase();
    if (name !== "theara" && name !== "theara rit" && name !== "zei ra"){
        document.querySelector("p").textContent = "Hello my friend " + name + " 😊";
    }else {
        document.querySelector("p").textContent = "I love you " + name + " 🥰";
    }
}

let submit = document.querySelector("button");
submit.addEventListener("click",display)