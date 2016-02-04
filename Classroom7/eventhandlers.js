var myElements = document.querySelectorAll(".my-div");

for (var i = 0; i < myElements.length; i++) {
    myElements[i].addEventListener("click", function() {
        alert("Click worked!");
    });
}
