let ydes = window.pageYOffset;
window.onscroll = function(){
    let des = window.pageYOffset;
    if(ydes >= des){
        document.getElementById('navegacion').style.top = "0px";
        document.getElementById('navegacion').style.background = "#16141c";
    }
    else{
        document.getElementById('navegacion').style.top = "-140px";
        document.getElementById('navegacion').style.background = "transparent";
    }
    ydes=des;
}