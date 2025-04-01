document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const properties = document.querySelectorAll(".property");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        properties.forEach(property => {
            const title = property.querySelector("h3").textContent.toLowerCase();
            property.style.display = title.includes(searchText) ? "block" : "none";
        });
    });

    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your message has been sent successfully!");
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Show team section when "More" is clicked
    document.getElementById("show-team").addEventListener("click", () => {
        document.getElementById("team-section").classList.toggle("hidden");
    });

    // Image modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".team-img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Close modal on click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".form-container");
    const openFormBtn = document.querySelector(".open-form-btn");
    const closeFormBtn = document.querySelector(".close-form-btn");
    const form = document.getElementById("consultationForm");
    const modal = document.getElementById("successModal");
    const closeModalBtn = document.getElementById("closeModal");

    // Open the form (slide down)
    openFormBtn.addEventListener("click", function () {
        formContainer.style.top = "50px";
    });

    // Close the form (slide up)
    closeFormBtn.addEventListener("click", function () {
        formContainer.style.top = "-100%";
    });

    // Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        if (fullName && email && phone) {
            // Show success modal
            model.style.display = "flex";

            // Reset form
            form.reset();
        } else {
            alert("Please fill all required fields!");
        }
    });

    // Close success modal
    closeModalBtn.addEventListener("click", function () {
        model.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showOptionsBtns = document.querySelectorAll(".showOptionsBtn");
    const dropdownContainers = document.querySelectorAll(".dropdownContainer");
    const closeDropdowns = document.querySelectorAll(".closeDropdown");

    showOptionsBtns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            dropdownContainers[index].style.display = "block";
        });
    });

    closeDropdowns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            dropdownContainers[index].style.display = "none";
        });
    });
});
