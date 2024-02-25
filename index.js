var acc = document.getElementsByClassName("accordion");
var panels = document.querySelectorAll(".panel");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var isActive = panel.classList.contains('active');

    // Close all panels
    for (var j = 0; j < panels.length; j++) {
      panels[j].style.display = "none";
      panels[j].classList.remove('active');
      acc[j].classList.remove('active');
    }

    // If the clicked panel is not active, open it
    if (!isActive) {
      panel.style.display = "block";
      panel.classList.add('active');
      this.classList.add('active'); 
    }
  });
}

















