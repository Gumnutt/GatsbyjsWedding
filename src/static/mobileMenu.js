document.addEventListener('DOMContentLoaded', function() {
  const toggleMenu = document.querySelector(".navigation button");
  const menu = document.querySelector(".navigation ul");

  toggleMenu.addEventListener("click", function () {
    const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
    toggleMenu.setAttribute("aria-expanded", !open);
    menu.hidden = !menu.hidden;
  });

  let imgs = window.document.querySelectorAll('img');
  for( let x = 0; x <  imgs.length; x++ ){
    imgs.item( x ).addEventListener('click', function(e) {
      let expanded = document.querySelector('.expanded')
      e = e || window.event;
      var target = e.target || e.srcElement
      if (expanded){
        expanded.classList.remove('expanded')
      }
      target.closest('.gatsby-image-wrapper').classList.add('expanded')
    }, false);
  }
}, false);