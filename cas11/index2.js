




document.addEventListener("DOMContentLoaded", function(){ 
    
    if(!localStorage.getItem("counter")){ 
        localStorage.setItem("counter", 0);
    }
    document.querySelector("h1").innerHTML = localStorage.getItem("counter");

    function count () { 
        let counter = localStorage.getItem("counter");
        counter++;
        document.querySelector("h1").innerHTML = counter;
        localStorage.setItem("counter", counter);

    }

    document.querySelector("button").onclick = count;   

    setInterval(count,1000);

    

})