let form = document.querySelector("form");
let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");
let par3 = document.getElementById("par3");

let checkAll = document.getElementById("checkAll");
checkAll.onclick = fCheck;

function fCheck() {
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");

    if (checkAll.checked == true) {
        check1.checked = true;
        check1.setAttribute("disabled", true);
        check2.checked = true;
        check2.setAttribute("disabled", true);
    }
    else {
        check1.checked = false;
        check1.removeAttribute("disabled");
        check2.checked = false;
        check2.removeAttribute("disabled");
    }
}

form.addEventListener("submit", validate);

function validate(event) {

    let name = form[0].value;
    let email = form[1].value;

    if (name.trim() == "") {
        par1.classList.remove("opacity");
    } 
    else {
        par1.classList.add("opacity");
    }

    if (email.length == 0) {
        par2.classList.remove("opacity");
    } 
    else if (email.length > 0) {
        let suma = 0;
        for (let i = 0; i < email.length; i++) {

            if (email[i] == "@") {
                suma = suma + 1;
            }
        }
        if (suma == 0) {
            par2.classList.remove("opacity");
        } 
        else {
            par2.classList.add("opacity");
        }
    }

    let check = document.getElementById("check1")
    if (check.checked == false) {
        par3.classList.remove("opacity");
    } 
    else {
        par3.classList.add("opacity");
    }

    if((par1.classList[0]!="opacity")||(par2.classList[0]!="opacity")||(par3.classList[0]!="opacity")) {
        event.preventDefault();
    }
}