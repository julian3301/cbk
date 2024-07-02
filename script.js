document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("joinForm");
    const submitButton = form.querySelector("button[type='submit']");
    const spinner = document.getElementById("spinner");
    const checkmark = document.querySelector(".checkmark");
    const hero = document.querySelector(".hero");
    const scriptURL = "https://docs.google.com/spreadsheets/d/1A-fwFHkPUuXxQLyNu16o_HBqGuCtd3aZFuXVLJBpSbk/edit?gid=0#gid=0";
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      hero.classList.add("loading");
  
      let requestBody = new FormData(form);
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then(response => {
          hero.classList.remove("loading");
          hero.classList.add("success");
          submitButton.disabled = false;
          form.reset();
          checkmark.style.display = "block";
        })
        .catch(error => {
          console.error("Error:", error.message);
          hero.classList.remove("loading");
          submitButton.disabled = false;
        });
    });
  });
  
  
  /*
  document.getElementById('joinButton').addEventListener('click', function() {
    document.getElementById('joinForm').scrollIntoView({behavior: 'smooth'});
  });
  
  
  */
  
  document.getElementById('joinButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

