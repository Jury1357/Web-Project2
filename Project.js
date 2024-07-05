

var icon =document.getElementById("img1id");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src ="sun.png";
    }
    else{
        icon.src="moon.png"; 
    }
}
