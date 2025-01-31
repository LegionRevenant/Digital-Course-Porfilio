var modal = document.getElementById("imageModal");

var images = document.getElementsByClassName("zoomable");
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        var modalImg = document.getElementById("modalImage");
        var captionText = document.getElementById("caption");
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
