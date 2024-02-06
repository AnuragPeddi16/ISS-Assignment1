if (localStorage.getItem("mode") == undefined) localStorage.setItem("mode", 1);
//let mode = 1;

window.addEventListener('load', function() {
   
    setMode();
    
});

window.onfocus = function () {
   
    setMode();

};

function setMode() {

    let mode = localStorage.getItem("mode");

    if (mode == 0) {

        document.getElementById("body").classList.add("dark");
        document.getElementById("pfp").classList.add("dark");

        document.getElementById("navbar").classList.add("dark");
        document.getElementById("about_tab").classList.add("dark");
        document.getElementById("education_tab").classList.add("dark");
        document.getElementById("achievements_tab").classList.add("dark");
        document.getElementById("skills_tab").classList.add("dark");
        document.getElementById("blog_tab").classList.add("dark");
        document.getElementById("insta").classList.add("dark");
        document.getElementById("email").classList.add("dark");
        document.getElementById("github").classList.add("dark");

        document.getElementById("back").classList.add("dark");
        document.getElementById("intro").classList.add("dark");

        document.getElementById("about_intro_light").style.display = "none";
        document.getElementById("about_intro_dark").style.display = "block";

        document.getElementById("blog1").classList.add("dark");
        document.getElementById("blog2").classList.add("dark");
        document.getElementById("blog_link1").classList.add("dark");
        document.getElementById("blog_link2").classList.add("dark");

        document.getElementById("mode").classList.add("dark");

        document.getElementById("hr1").classList.add("dark");
        document.getElementById("hr2").classList.add("dark");
        document.getElementById("hr3").classList.add("dark");
        document.getElementById("hr4").classList.add("dark");
        document.getElementById("hr5").classList.add("dark");

        document.getElementById("bottomfade1").src = "./pics/bottom-fade-dark.png";
        document.getElementById("bottomfade2").src = "./pics/bottom-fade-dark.png";

        document.getElementById("mode_icon").src = "./pics/sun.png";

        document.getElementById("pfp").src = "./pics/astrodunk.jpeg";

    } else {

        document.getElementById("body").classList.remove("dark");
        document.getElementById("pfp").classList.remove("dark");

        document.getElementById("navbar").classList.remove("dark");
        document.getElementById("about_tab").classList.remove("dark");
        document.getElementById("education_tab").classList.remove("dark");
        document.getElementById("achievements_tab").classList.remove("dark");
        document.getElementById("skills_tab").classList.remove("dark");
        document.getElementById("blog_tab").classList.remove("dark");
        document.getElementById("insta").classList.remove("dark");
        document.getElementById("email").classList.remove("dark");
        document.getElementById("github").classList.remove("dark");

        document.getElementById("back").classList.remove("dark");
        document.getElementById("intro").classList.remove("dark");

        document.getElementById("about_intro_light").style.display = "block";
        document.getElementById("about_intro_dark").style.display = "none";

        document.getElementById("blog1").classList.remove("dark");
        document.getElementById("blog2").classList.remove("dark");
        document.getElementById("blog_link1").classList.remove("dark");
        document.getElementById("blog_link2").classList.remove("dark");

        document.getElementById("mode").classList.remove("dark");

        document.getElementById("hr1").classList.remove("dark");
        document.getElementById("hr2").classList.remove("dark");
        document.getElementById("hr3").classList.remove("dark");
        document.getElementById("hr4").classList.remove("dark");
        document.getElementById("hr5").classList.remove("dark");

        document.getElementById("bottomfade1").src = "./pics/bottom-fade.png";
        document.getElementById("bottomfade2").src = "./pics/bottom-fade.png";

        document.getElementById("mode_icon").src = "./pics/moon.png";

        document.getElementById("pfp").src = "./pics/bean_huh_rounded.jpg";

    }

}

function toggleMode() { 
    
    let mode = localStorage.getItem("mode");

    if (mode == 1) localStorage.setItem("mode", 0);
    else localStorage.setItem("mode", 1);

    //mode = 1-mode;

    setMode();

}