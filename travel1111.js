// JavaScript for TravelSphere Website

// Toggle Menu for Mobile View
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

// Booking Confirmation Alert
function confirmation() {
    const destination = document.querySelector("input[list='mylist']").value;
    const checkInDate = document.querySelector(".date").value;

    if (!destination || !checkInDate) {
        alert("Please select a destination and date before booking.");
    } else {
        alert(`Your booking to ${destination} on ${checkInDate} has been confirmed!`);
    }
}

// Smooth Scroll Functionality for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight Current Section in the Menu (Optional if Scroll Spy is Desired)
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".menu li a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("href") === `#${current}`) {
            li.classList.add("active");
        }
    });
});

// Responsive Menu Close on Click (Optional for Mobile Experience)
document.querySelectorAll(".menu li a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu");
        menu.classList.remove("active");
    });
});

// Image Zoom Effect (Optional)
document.querySelectorAll(".zoom-img img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
function logout() {
   
    sessionStorage.clear();  
    window.location.href = 'login.html'; 
}
