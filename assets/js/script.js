let leftButton = document.querySelector(".button1");
let rightButton = document.querySelector(".button2");

rightButton.onclick = function() {
    let notHidden = document.querySelectorAll(".not-hidden");
    for (let i = 0; i < notHidden.length; i++) {
        if(notHidden[notHidden.length - 1].nextElementSibling == null) {
            return;
        }
        else if (notHidden[notHidden.length - 1].nextElementSibling.nextElementSibling == null) {
            rightButton.classList.add("disabled");
            notHidden[0].classList.add("hidden");
            notHidden[0].classList.remove("not-hidden")
            notHidden[notHidden.length - 1].nextElementSibling.classList.add("not-hidden");
            notHidden[notHidden.length - 1].nextElementSibling.classList.remove("hidden");
            return;
        }
        else if (i == 0) {
            notHidden[i].classList.remove("not-hidden");
            notHidden[i].classList.add("hidden");
            leftButton.classList.remove("disabled");
        }
        else if (i == notHidden.length - 1) {
           notHidden[i].nextElementSibling.classList.add("not-hidden");
           notHidden[i].nextElementSibling.classList.remove("hidden");
       }
    }
}

leftButton.onclick = function() {
    let notHidden = document.querySelectorAll(".not-hidden");
    for (let i = 0; i < notHidden.length; i++) {
        if (notHidden[0].previousElementSibling == null) {
            return;
        }
        else if (notHidden[0].previousElementSibling.previousElementSibling == null) {
            leftButton.classList.add("disabled");
            notHidden[notHidden.length - 1].classList.add("hidden");
            notHidden[notHidden.length - 1].classList.remove("not-hidden")
            notHidden[0].previousElementSibling.classList.add("not-hidden");
            notHidden[0].previousElementSibling.classList.remove("hidden");
        }
        else if (i == 0) {
            notHidden[i].previousElementSibling.classList.add("not-hidden");
            notHidden[i].previousElementSibling.classList.remove("hidden");
            rightButton.classList.remove("disabled")
            
        }
        else if (i == notHidden.length - 1) {
           notHidden[i].classList.remove("not-hidden");
           notHidden[i].classList.add("hidden");
       }
    }
}