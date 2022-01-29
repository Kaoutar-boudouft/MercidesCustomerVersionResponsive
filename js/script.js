function change(){
    var col=document.getElementById("checkcolor").value;
    document.getElementById("head").style.backgroundColor = col;
    document.getElementById("head1").style.backgroundColor = col;
    document.getElementById("head2").style.color = col;
    document.getElementById("head3").style.di = col;
}
function dark(){
    var ic=document.getElementById("i").value;
    if(ic==="fa fa-sun-o"){
        document.body.style.di ='white';
        ic.className="fa fa-moon-o";

    }
}