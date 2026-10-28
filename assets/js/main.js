// 1. Initialize EmailJS with your Public Key
emailjs.init("C0L086uoSUFnzEvMu");

// 2. Listen for the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page from refreshing
    
    // 3. Grab the values the user typed in
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let type = document.getElementById('message-type').value;
    let message = document.getElementById('message').value;
    
    // 4. Find the error and success messages
    let errorMsg = document.getElementById('form-error');
    let successMsg = document.getElementById('form-success');

    // 5. JavaScript Validation: Check if anything is empty
    if(name === "" || email === "" || type === "" || message === "") {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
        return; // Stop the function here
    }

    // 6. Prepare the data to send to EmailJS
    let templateParams = {
        from_name: name,
        email: email,
        reply_to: email,
        message_type: type,
        message: message
    };

    // 7. Send the email!
    emailjs.send("service_zic6gc8", "template_b0bmupz", templateParams)
        .then(function() {
            // If it works, show success and clear the form
            successMsg.style.display = "block";
            errorMsg.style.display = "none";
            document.getElementById('contact-form').reset();
        }, function(error) {
            // If it fails, show an alert
            alert("Failed to send message: " + error.text);
        });
});