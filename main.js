  document.addEventListener("DOMContentLoaded", function () {

    // 🔍 Search Box Scroll-to-Section
    const searchInput = document.querySelector(".search-box");
    const sections = [
      "home", "about", "programs", "gallery",
      "trainers", "pricing", "testimonials", "blog", "contact"
    ];

    searchInput?.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = this.value.trim().toLowerCase();

        const matchedSection = sections.find(section =>
          section.includes(query)
        );

        if (matchedSection) {
          const sectionElement = document.querySelector(`#${matchedSection}`);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          alert("No matching section found.");
        }

        this.value = ""; // clear input after search
      }
    });

    // 📬 Contact Form Submission
    const contactForm = document.querySelector("form");

    contactForm?.addEventListener("submit", function (e) {
      e.preventDefault();

      // Optional: Add validation here

      const submitButton = this.querySelector("button[type='submit']");
      const originalText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      setTimeout(() => {
        alert("✅ Thank you! Your message has been sent.");
        this.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });

  });

// GSAP Entrance Animation (Optimized speed)
  gsap.utils.toArray(".section-title, .card-hover, .testimonial-card").forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%", // animation starts a bit earlier
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 30,            // reduced for faster load feel
      duration: 0.6,     // faster animation
      ease: "power2.out"
    });
  });

  // Membership Cards (Pricing) Faster Load
  gsap.from(".pricing-card", {
    scrollTrigger: {
      trigger: "#pricing",
      start: "top 85%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: 40,
    duration: 0.5,        // faster than before
    stagger: 0.2,
    ease: "power1.out"
  });