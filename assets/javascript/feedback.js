function sendToEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "reid.sean142@gmail.com",
        Password : "Familyday1",
        To : 'reid.sean14@yhoo.com',
        From : document.getElementById('email').value,
        Subject : "New Form submitted",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}