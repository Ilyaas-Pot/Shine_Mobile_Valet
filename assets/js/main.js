// Wait for the HTML to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize EmailJS
    emailjs.init("C0L086uoSUFnzEvMu");

    // ==========================================
    // 1. CONTACT FORM
    // ==========================================
    let contactForm = document.getElementById('contact-form');
    let contactBtn = contactForm ? contactForm.querySelector('input[type="submit"]') : null;

    if (contactBtn) {
        contactBtn.addEventListener('click', function(event) {
            
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let type = document.getElementById('message-type').value;
            let message = document.getElementById('message').value;
            
            let errorMsg = document.getElementById('form-error');
            let successMsg = document.getElementById('form-success');

            // If anything is empty, show red text immediately
            if(name === "" || email === "" || type === "" || message === "") {
                errorMsg.style.display = "block";
                successMsg.style.display = "none";
                return; // Let the browser handle the popup bubble
            }

            // If everything is filled, stop the page from reloading and send
            event.preventDefault(); 

            let templateParams = {
                from_name: name,
                reply_to: email,
                message_type: type,
                message: message
            };

            emailjs.send("service_zic6gc8", "template_b0bmupz", templateParams)
                .then(function() {
                    successMsg.style.display = "block";
                    errorMsg.style.display = "none";
                    contactForm.reset();
                }, function(error) {
                    alert("Failed to send message: " + error.text);
                });
        });
    }

    // ==========================================
    // 2. ENQUIRY FORM
    // ==========================================
    let enquiryForm = document.getElementById('enquiry-form');
    let enquiryBtn = enquiryForm ? enquiryForm.querySelector('input[type="submit"]') : null;

    if (enquiryBtn) {
        enquiryBtn.addEventListener('click', function(event) {
            
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
            let service = document.getElementById('service').value;
            let date = document.getElementById('date').value;
            let address = document.getElementById('address').value;
            let message = document.getElementById('message').value;
            
            let errorMsg = document.getElementById('enquiry-error');
            let successMsg = document.getElementById('enquiry-success');

            if(name === "" || email === "" || phone === "" || service === "" || date === "" || address === "" || message === "") {
                errorMsg.style.display = "block";
                successMsg.style.display = "none";
                return; // Let the browser handle the popup bubble
            }

            event.preventDefault(); 

            let fullMessage = "Phone: " + phone + "\nService: " + service + "\nDate: " + date + "\nAddress: " + address + "\nMessage: " + message;

            let templateParams = {
                from_name: name,
                reply_to: email,
                message_type: "Booking Enquiry",
                message: fullMessage
            };

            emailjs.send("service_zic6gc8", "template_b0bmupz", templateParams)
                .then(function() {
                    successMsg.style.display = "block";
                    errorMsg.style.display = "none";
                    enquiryForm.reset();
                }, function(error) {
                    alert("Failed to send enquiry: " + error.text);
                });
        });
    }
});