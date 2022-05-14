
window.addEventListener('keydown', function(obj){
  console.log(obj.keyCode)
  let keyNum = obj.keyCode;

  
 
  let audio = document.querySelector(`audio[data-key="${keyNum}"]`);

  if(audio)
    audio.play()
  
})

window.addEventListener('click', function(){
  console.log("Drummers don't click")
})




function drumPressed(drum){
  drum.classList.toggle('play')
  
}

