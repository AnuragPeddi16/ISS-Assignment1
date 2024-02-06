if (localStorage.getItem("mode") == undefined) localStorage.setItem("mode", 1);
//let mode = 1;
if (localStorage.getItem("likes1") == undefined) localStorage.setItem("likes1", 76);

window.addEventListener('load', function() {
   
    if (localStorage.getItem("likes1") == 77) {

        document.getElementById("nLikes").innerHTML = "77";
        document.getElementById("like").src="../pics/heart_full.png"
    
    }

    let comment_list = JSON.parse(localStorage.getItem("comments1"));

    for (let name in comment_list) {

        for (let i in comment_list[name]) {

            showComment(name, comment_list[name][i]);

        }

    }

    setMode();
    
});

window.onfocus = function () {
   
    setMode();

};

function showComment(name, comment) {

    let div = document.createElement("div");
    div.className = "comment_container";

    let pName = document.createElement("p");
    let pComment = document.createElement("p");
    let comment_pfp = document.createElement("img");
    let break_div = document.createElement("div");

    pName.innerHTML = name;
    pComment.innerHTML = comment;

    comment_pfp.src = "../pics/default_pfp.png";
    comment_pfp.style.width = "50px";
    comment_pfp.style.height = "50px";
    comment_pfp.style.transform = "translate(0, 40%)";

    pName.className = "name";
    pComment.className = "comment";
    comment_pfp.className = "pfp";
    break_div.className = "break";

    div.appendChild(comment_pfp);
    div.appendChild(pName);
    div.appendChild(break_div);
    div.appendChild(pComment);

    document.getElementById("comments").appendChild(div);

}

function setMode() {

    let mode = localStorage.getItem("mode");

    if (mode == 0) {

        document.getElementById("body").classList.add("dark");
        document.getElementById("pfp").classList.add("dark");

        document.getElementById("navbar").classList.add("dark");
        document.getElementById("home_tab").classList.add("dark");
        document.getElementById("insta").classList.add("dark");
        document.getElementById("email").classList.add("dark");
        document.getElementById("github").classList.add("dark");

        document.getElementById("mode").classList.add("dark");

        document.getElementById("user_pfp").classList.add("dark");
        document.getElementById("comment_box").classList.add("dark");
        document.getElementById("name_box").classList.add("dark");
        document.getElementById("post_button").classList.add("dark");

        document.getElementById("mode_icon").src = "../pics/sun.png";

        document.getElementById("rick_light").style.display = "none";
        document.getElementById("rick_dark").style.display = "block";

        document.getElementById("pfp").src = "../pics/astrodunk.jpeg";

    } else {

        document.getElementById("body").classList.remove("dark");
        document.getElementById("pfp").classList.remove("dark");

        document.getElementById("navbar").classList.remove("dark");
        document.getElementById("home_tab").classList.remove("dark");
        document.getElementById("insta").classList.remove("dark");
        document.getElementById("email").classList.remove("dark");
        document.getElementById("github").classList.remove("dark");

        document.getElementById("mode").classList.remove("dark");

        document.getElementById("user_pfp").classList.remove("dark");
        document.getElementById("comment_box").classList.remove("dark");
        document.getElementById("name_box").classList.remove("dark");
        document.getElementById("post_button").classList.remove("dark");

        document.getElementById("mode_icon").src = "../pics/moon.png";

        document.getElementById("rick_light").style.display = "block";
        document.getElementById("rick_dark").style.display = "none";

        document.getElementById("pfp").src = "../pics/bean_huh_rounded.jpg";

    }

}

function toggleMode() { 
    
    let mode = localStorage.getItem("mode");

    if (mode == 1) localStorage.setItem("mode", 0);
    else localStorage.setItem("mode", 1);

    //mode = 1-mode;

    setMode();

}

function toggleLike() {

    let likes = localStorage.getItem("likes1");
    if (likes == 76){
        
        localStorage.setItem("likes1", 77);
        document.getElementById("nLikes").innerHTML="77";
        document.getElementById("like").src="../pics/heart_full.png"

    } else {
        
        localStorage.setItem("likes1", 76);
        document.getElementById("nLikes").innerHTML="76";
        document.getElementById("like").src="../pics/heart_empty.png"

    }

}

let comments = JSON.parse(localStorage.getItem("comments1"));
if (!comments) comments = {};

function addComment() {

    let comment = document.getElementById("comment_box").value;
    let name = document.getElementById("name_box").value;

    if (name == "") name = "no name 🤡";

    if (comment == "") {

        alert("Were you really trying to post a comment without the comment itself?");
        return;

    }

    document.getElementById("comment_box").value = "";
    document.getElementById("name_box").value = "";

    showComment(name, comment);

    if (comments[name] == undefined) comments[name] = [];
    comments[name].push(comment);

    localStorage.setItem("comments1", JSON.stringify(comments));

}