let image1 = "https://static.vecteezy.com/system/resources/thumbnails/001/849/553/small/modern-gold-background-free-vector.jpg"
let image2 = "https://t3.ftcdn.net/jpg/08/27/09/20/360_F_827092074_tUV40nTZFcjGT69jkS2EJErmYQ9HaDK6.jpg"
let image3 = "https://img.freepik.com/premium-photo/abstract-neon-lights-background-with-smoke-fog-grunge-texture_324689-575.jpg?semt=ais_hybrid&w=740&q=80"

let images = [image1, image2, image3]

let i = 0;
function next() {
    i++;
    if (i >= images.length) {
        i = 0
    }
    document.getElementById("image").src = images[i];
    console.log("hello")
}

function previous() {
    i--;
    if (i < 0) {
        i = images.length-1
    }
    document.getElementById("image").src = images[i];
    console.log("hello")
}


setInterval(function(){
next()
},2000)