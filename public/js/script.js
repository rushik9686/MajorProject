(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//indexjs//

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
      taxSwitch.addEventListener("click", () => {
        let taxInfo = document.getElementsByClassName("tax-info");
        for (info of taxInfo) {
          if (info.style.display != "inline") {
            info.style.display = "inline";
          } else {
            info.style.display = "none";
          }
        }
      });


      let scrollContainer = document.querySelector(".gallery");
      let forBtn = document.getElementById("forBtn");

      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY
        scrollContainer.style.scrollBehavior = "aoto";
      });

      forBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
      });
      backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
      });