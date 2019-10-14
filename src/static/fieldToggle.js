if (typeof document !== 'undefined'){
  document.addEventListener("DOMContentLoaded", function(){

    var form = document.getElementById('wedForm');
    var x = form.lastElementChild.innerHTML;
    var hiddenField = document.getElementById('hiddenAllergy');

    if( x.checked ){
      hiddenField.classList.toggle('hidden');
    }
    console.log('DOM loaded')

  });
}