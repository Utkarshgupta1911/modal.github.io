
const modal= document.querySelector(".modal");
const overlay= document.querySelector(".overlay");
const closeModal= document.querySelector(".close-modal");
const openmodal= document.querySelectorAll(".show-modal");

console.log(openmodal);

for(let i=0;i<openmodal.length;i++){
     console.log(openmodal[i].addEventListener('click', function(){
          console.log("Button Clicked");
          modal.classList.remove("hidden");
          overlay.classList.remove("hidden");
     }));
}

closeModal.addEventListener('click', function(){
     modal.classList.add("hidden");
     overlay.classList.add("hidden");
});

overlay.addEventListener('click', function(){
     modal.classList.add("hidden");
     overlay.classList.add("hidden");
})

document.addEventListener('keydown', function(e){
     console.log(e.key);
     if(e.key=='Escape'){
          modal.classList.add("hidden");
          overlay.classList.add("hidden");
     }
})