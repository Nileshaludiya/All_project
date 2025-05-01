let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
let experience2 = document.getElementById("experience"); 

function gfg(n) {
    remove();
    let cls = "";
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
    
    let experience1 = "";
    if (n == 1) experience1 = "Very Bad";
    else if (n == 2) experience1 = "Bad";
    else if (n == 3) experience1 = "Good";
    else if (n == 4) experience1 = "Very Good";
    else if (n == 5) experience1 = "Excellent";
    
    experience2.innerText = "Your Experience is: " + experience1; 
}

             // remove function

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

