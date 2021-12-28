function failedSnackbar(msg, position = "bottom-right") {
    Snackbar.show({
        text: msg,
        pos: position,
        customClass: "snackbar-custom-d",
        showAction: true,
        actionText: "×",
        actionTextColor: "#000",
    });
}

function successSnackbar(msg, position = "bottom-right") {
    Snackbar.show({
        text: msg,
        pos: position,
        customClass: "snackbar-custom-s",
        showAction: true,
        actionText: "×",
        actionTextColor: "#000",
    });
}
