// get value from input


function display(){
    let name = document.querySelector("#name").value.toLowerCase();
    if (name !==""){
        document.querySelector(".display").style.display = "block"
        if (name !== "theara" && name !== "theara rit" && name !== "zei ra"){
            name.charAt(0).toUpperCase()
            document.querySelector("p").textContent = "Hello my friend " + name + " 😊";
        }else {
            name.charAt(0).toUpperCase()
            document.querySelector("p").textContent = "I love you " + name + " 🥰";
        }
    }else{
        document.querySelector(".display").style.display = "none"
    }
}

let submit = document.querySelector("button");
submit.addEventListener("click",display)