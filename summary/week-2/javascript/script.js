function changeQuestion(evt) {
   var i, tabcontent, tablinks;
   console.log(evt.currentTarget.value);
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(evt.currentTarget.value).style.display = "block";
   evt.currentTarget.className += " active";
}

document.querySelectorAll(".tablinks").forEach((element, index) => element.addEventListener('click', changeQuestion));