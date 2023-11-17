const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const showSuccess = document.querySelector(".show-success"); //Сделать хорошо</a>
const modalClose = document.querySelectorAll(".modal__close_times"); //<div class="modal__close modal__close_times">&times;</div>


function showPopup() {
    modalMain.classList.add("modal_active");
  }


showSuccess.onclick  = function successOpen() { 
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
};

function closePopup() {
    for (let i = 0; i < modalClose.length; i++) {
        let close = modalClose[i];

        let closeFunc = function() {
            modalSuccess.style.display = "none";
            modalMain.style.display = "none";
        };

        close.onclick = closeFunc;
    }
}


showPopup();
closePopup();
