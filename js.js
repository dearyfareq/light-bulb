function changeoff(){
    var img = document.getElementById('bulb');
    img.setAttribute('src','/light-bulb/light-bulb off.png'); 
    document.getElementById("myAudio").play();

    // changing the buttons class to add highlighting effect
    document.getElementById("btn").classList.add('btn2');
    document.getElementById("btn").classList.remove('btn');
    document.getElementById("btn2").classList.add('btn');
    document.getElementById("btn2").classList.remove('btn2');
    // changing the buttons class to add highlighting effect
}
function changeon(){
    var img = document.getElementById('bulb');
    img.setAttribute('src','/light-bulb/light-bulb on.png'); 
    document.getElementById("myAudio").play();

    // changing the buttons class to add highlighting effect
    document.getElementById("btn").classList.add('btn');
    document.getElementById("btn").classList.remove('btn2');
    document.getElementById("btn2").classList.add('btn2');
    document.getElementById("btn2").classList.remove('btn');
    // changing the buttons class to add highlighting effect

}