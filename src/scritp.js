let isShowing = false
let haveVoted = false
function addMusic(){
    let music = document.querySelector('#music')
    let playButton = document.querySelector('#play-button')
    let enable = document.querySelectorAll('.enable')
    
    if(!isShowing){
        enable.forEach((element) => {
            element.classList.add('disable')
        })
        isShowing = true
        music.classList.remove('hidden')
        music.classList.remove('remove-iframe')
        music.classList.add('animate-bottom')
        playButton.classList.remove('fa-play')
        playButton.classList.add('fa-pause')
    }
    else{
        enable.forEach((element) => {
            element.classList.remove('disable')
        })
        isShowing = false
        music.classList.add('remove-iframe')
        playButton.classList.remove('fa-pause')
        playButton.classList.add('fa-play')

    }
    console.log('super')
}

function vote(obj){
    let vote = document.querySelector('#vote')
    if(!haveVoted){
        vote.classList.remove('hidden')
        vote.classList.remove('remove-pin')
        vote.classList.add('add-pin')
        obj.innerText = 'remove vote'
        haveVoted = !haveVoted
    }
    else{
        vote.classList.remove('add-pin')
        vote.classList.add('remove-pin')
        haveVoted = !haveVoted
        obj.innerText = 'vote'

    }
}