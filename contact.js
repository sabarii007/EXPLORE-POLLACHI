 const FORM_URL = "https://formspree.io/f/xppdkneb";

    const form = document.getElementById("contactForm");
    const statusBox = document.getElementById("status");
    const sendBtn = document.getElementById("sendBtn");

    function setError(id, text) {
      document.getElementById(id).textContent = text;
    }

    function validate() {
      let ok = true;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      setError("nameError", "");
      setError("emailError", "");
      setError("messageError", "");

      if (name.length < 2) { setError("nameError", "Enter your name."); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("emailError", "Enter a valid email, like name@example.com."); ok = false;
      }
      if (message.length < 10) {
        setError("messageError", "Write at least 10 characters."); ok = false;
      }
      return ok;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusBox.textContent = "";
      statusBox.className = "";
      if (!validate()) return;

      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";

      try {
        const res = await fetch(FORM_URL, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: new FormData(form)
        });
        if (res.ok) {
          statusBox.textContent = "Message sent. Thank you!";
          statusBox.className = "ok";
          form.reset();
        } else {
          throw new Error("Request failed");
        }
      } catch (err) {
        statusBox.textContent = "Message not sent. Check your connection and try again.";
        statusBox.className = "fail";
      } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = "Send message";
      }
    });

    // TOGGLE BUTTON

let menubtn = document.getElementById("menubtn");
let navbar = document.getElementById("navbar");

menubtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menubtn.textContent = "✕";
    } else {
        menubtn.textContent = "☰";
    }
});

let navLinks = navbar.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menubtn.textContent = "☰";
    });
});