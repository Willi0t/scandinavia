const videoclip = document.querySelectorAll('.videoclip');
for (let i = 0; i<videoclip.length; i++){
    videoclip[i].addEventListener('mouseenter', function(e){
        videoclip[i].play()
    })
    videoclip[i].addEventListener('mouseout', function(e){
        videoclip[i].pause()
    })
}