

document.addEventListener("DOMContentLoaded", function(){ 
    
    // some variables that we need to change.. 
    const submit = document.querySelector("#submit");
    const newTask = document.querySelector("#task"); 

    // disable submit button at the begining
    submit.disabled = true;

    // here we listen for input to be typed into input field 
    newTask.onkeyup = () => { 
        if (newTask.value.length > 0) { 
            submit.disabled = false;
        } else { 
            submit.disabled = true;
        } 
    }


    document.querySelector("form").onsubmit = () => { 

        // here we got value from input 
        const task = newTask.value; 
        
        // here we create li tag 
        const li = document.createElement("li");

        // here we populate this li tag with content 
        li.innerHTML = task; 

        // here we append li tag to ul tag 
        document.querySelector("#tasks").append(li);

        // we set input value to empty string
        newTask.value = ""; 

        // we disable button again 
        submit.disabled = true;

        return false;
    }




})