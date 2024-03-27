
document.addEventListener("DOMContentLoaded", function() { 
    // code here 
    let button = document.querySelector("button")
    button.onclick = count;

})

let counter = 0;

const count = () => { 
    counter++;
    document.querySelector("h1").innerHTML = counter;
    if (counter % 10 === 0) { 
        alert(`Count is now ${counter}`)
}


}
