document.addEventListener("DOMContentLoaded", () => {
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surprisePopup = document.getElementById("surprisePopup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    // Mostrar o pop-up de surpresa quando clicar no botão
    surpriseBtn.addEventListener("click", () => {
        surprisePopup.style.display = "flex";
    });

    // Fechar o pop-up
    closePopupBtn.addEventListener("click", () => {
        surprisePopup.style.display = "none";
    });
});
