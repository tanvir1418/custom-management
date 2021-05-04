function resetContactFormFields() {
    let contactFormInputs = $(".contact-sp-container .custom-input-only input");
    for (i = 0; i < contactFormInputs.length; i++) {
        contactFormInputs[i].value = "";
    }
    document.querySelector(".contact-sp-container .sp-textbox textarea").value = "";
}