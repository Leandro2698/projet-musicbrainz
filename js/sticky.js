const option = document.querySelector("#myOptions")
const sticky = option.offsetTop;

function toStick(){
    if (window.pageYOffset > sticky){
        option.classList.add("sticky") ;
    }
    else{
        option.classList.remove("sticky");
    }
}
window.onscroll = function(){toStick()};



// _____________________________________________________