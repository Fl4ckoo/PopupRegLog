document.querySelector('#show-register').addEventListener('click', function(){
    document.querySelector('.registerPopUp').classList.add("active1");
    console.log("Clicked")
});


document.querySelector('.registerPopUp .closeBtn2').addEventListener('click', function(){
    document.querySelector('.registerPopUp').classList.remove("active1");
});



document.querySelector('#show-login').addEventListener('click', function(){
    document.querySelector('.popup').classList.add("active");
    console.log("Clicked")
});


document.querySelector('.popup .closeBtn').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove("active");
});





