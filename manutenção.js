
function showMaintenanceMessage() {
    const popup = document.getElementById("maintenancePopup");
    popup.style.display = "flex";

    document.getElementById("popupClose").onclick = () => {
        popup.style.display = "none";
    };
}

// Fechar clicando fora da caixa
document.addEventListener("click", (e) => {
    const popup = document.getElementById("maintenancePopup");
    if (e.target === popup) popup.style.display = "none";
});
