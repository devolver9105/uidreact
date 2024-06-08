
document.addEventListener("DOMContentLoaded", function() {

  var filterLinks = document.querySelectorAll('.filter-link');
  
  
  filterLinks.forEach(function(link) {
  
  link.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      var category = this.getAttribute('data-category'); 
  
   
      var cards = document.querySelectorAll('.card');
  
     
      cards.forEach(function(card) {
         
          if (category ===  "all"|| card.classList.contains(category)) {
              card.style.display = 'block'; 
          } else {
              card.style.display = 'none'; 
          }
      });
  
      
      filterLinks.forEach(function(link) {
          link.classList.remove('active');
      });
  
  
      this.classList.add('active');
  });
  });
  });
  
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;
   arrowParent.classList.toggle("showMenu");
    });
  }
  let menubar = document.querySelector(".menubar");
  let menubarBtn = document.querySelector(".bx-menu");
  console.log(menubarBtn);
  menubarBtn.addEventListener("click", ()=>{
    menubar.classList.toggle("close");
  });