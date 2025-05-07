// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Untuk bersihin form setelah dikirim dan setelah kita reload web
// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Certificate Modal Functionality
const certificateModal = document.getElementById("certificateModal");
const modalClose = document.querySelector(".modal-close");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIssuer = document.getElementById("modalIssuer");
const modalDate = document.getElementById("modalDate");
const modalCredential = document.getElementById("modalCredential");
const modalSkills = document.getElementById("modalSkills");

// Certificate data
const certificateData = {
  cert1: {
    title: "High School Overall Champion",
    image: "images/awards1.png",
    issuer: "Al-Muslimun Islamic Boarding School",
    date: "January 2024",
    credential: "019/DTM-Lsk/I/24",
    skills:
      "Overall Subject include Mathematics, Physics, Chemistry, Biology, Pancasila and Civics, Islamic Religious, History of Islamic Civilization ,English, Indonesian and Arabic Language",
  },
  cert2: {
    title: "Madrasah Science Competition",
    image: "images/awards2.png",
    issuer: "Indonesian Ministry of Religion",
    date: "Agustus 2022",
    credential: "B-1984/Dt.I.I/PP.03.2/08/2022",
    skills: "Integrated Mathematics, Science, Islamic Religious",
  },
  cert3: {
    title: "Contest of Wits",
    image: "/api/placeholder/800/600",
    issuer: "Modal Bangsa Arun Senior High School",
    date: "June 2023",
    credential: "edX-RNM-2023",
    skills: "React Native, Mobile App Development, JavaScript, Redux",
  },
  cert4: {
    title: "AWS Cloud Practitioner",
    image: "/api/placeholder/800/600",
    issuer: "Amazon Web Services",
    date: "November 2022",
    credential: "AWS-CP-12345678",
    skills: "AWS, Cloud Computing, Security, Networking",
  },
};

// Open certificate modal
document.querySelectorAll(".view-certificate").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const certId = e.target
      .closest(".view-certificate")
      .getAttribute("data-id");
    const certData = certificateData[certId];

    modalTitle.textContent = certData.title;
    modalImage.src = certData.image;
    modalImage.alt = certData.title;
    modalIssuer.textContent = certData.issuer;
    modalDate.textContent = certData.date;
    modalCredential.textContent = certData.credential;
    modalSkills.textContent = certData.skills;

    certificateModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// Close certificate modal
modalClose.addEventListener("click", () => {
  certificateModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
certificateModal.addEventListener("click", (e) => {
  if (e.target === certificateModal) {
    certificateModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certificateModal.classList.contains("active")) {
    certificateModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Back to top button
  if (window.scrollY > 500) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }

  // Scroll animations
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 300;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      // Active nav link
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });

      // Animate elements based on section
      if (sectionId === "skills") {
        skillBars.forEach((bar) => {
          const width = bar.getAttribute("data-width");
          bar.style.width = `${width}%`;
        });

        skillCategories.forEach((category, index) => {
          setTimeout(() => {
            category.classList.add("animated");
          }, 200 * index);
        });
      }

      if (sectionId === "certificates") {
        certificateCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animated");
          }, 150 * index);
        });
      }

      if (sectionId === "projects") {
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animated");
          }, 150 * index);
        });
      }

      if (sectionId === "about") {
        aboutImage.classList.add("animated");
        aboutText.classList.add("animated");
      }

      if (sectionId === "contact") {
        contactForm.classList.add("animated");
        contactInfo.classList.add("animated");
      }
    }
  });
});

// Initialize animations on load
window.addEventListener("load", () => {
  // Check initial scroll position
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  }

  if (window.scrollY > 500) {
    backToTop.classList.add("active");
  }

  // Set correct active nav link based on scroll position
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 300;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  if (currentSection) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  // Initialize first animation
  if (window.scrollY < 300) {
    skillBars.forEach((bar) => {
      bar.style.width = "0";
    });
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
