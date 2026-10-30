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
      // ==========================================
    // 3. DYNAMIC CONTENT: SERVICE SEARCH FILTER
    // ==========================================
    let searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = searchInput.value.toLowerCase();
            let cards = document.querySelectorAll('.service-card');

            cards.forEach(function(card) {
                let text = card.innerText.toLowerCase();
                if (text.includes(filter)) {
                    card.style.display = ""; // show
                } else {
                    card.style.display = "none"; // hide
                }
            });
        });
    }
    // ==========================================
    // 5. INTERACTIVE ELEMENTS: MOBILE HAMBURGER MENU
    // ==========================================
    let hamburgerBtn = document.getElementById('hamburger-btn');
    let navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            // Toggles the 'active' class on and off
            navLinks.classList.toggle('active');
        });
    }
});
   
   // ==========================================
// 4. INTERACTIVE ELEMENTS: LIGHTBOX
// ==========================================
// (These go outside the DOMContentLoaded block)
function openLightbox(imageSrc) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imageSrc;
    }
}

function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}