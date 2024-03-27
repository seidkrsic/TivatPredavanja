

document.addEventListener("DOMContentLoaded", function() { 

    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) { 
        button.onclick = function () { 
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    })

})