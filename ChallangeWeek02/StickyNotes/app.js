var main = document.getElementsByClassName("main")[0];
var form = document.getElementsByClassName("form")[0];
var checkIcon = document.getElementById("check-icon")
var xIcon = document.getElementById("x-icon")
var i = 0;

xIcon.addEventListener("click", function () {
    typeNote();
})

checkIcon.addEventListener("click", function () {
    createNote();
})

function typeNote() {
    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function createNote() {
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div")
    var node1 = document.createElement("div")

    node1.innerHTML = noteText;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px;overflow:hidden;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75")
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();
    node0.appendChild(node1)

    main.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function () {
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", function () {
        node0.style.transform = "scale(1)";
    })

    

    document.getElementById("note-text").value = ''
}

function margin() {
    var random_margin = ["-15px", "1px", "15px", "20px", "25px", "30px"]
    return random_margin[Math.floor(Math.random() * random_margin.length)]
}

function rotate() {
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color() {
    var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i > random_color.length - 1) {
        i = 0;
    }

    return random_color[i++]
}