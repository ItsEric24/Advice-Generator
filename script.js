const button = document.querySelector(".btn");
let count = document.getElementById("id");
let adviceText = document.querySelector(".advice-text");
let dice = document.querySelector(".dice");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    if (data && data.slip && data.slip.advice) {
      return data.slip;
    } else {
      throw new Error("Failed to fetch advice.");
    }
  } catch (error) {
    console.error("Error fetching advice:", error.message);
    return null;
  }
}

button.addEventListener("click", function () {

  dice.classList.add("rotate");

  setTimeout(() => {
    dice.classList.remove("rotate");
  }, 3000);

  getAdvice()
    .then((advice) => {
      if (advice) {
        count.innerHTML = "#" + advice.id;
        adviceText.innerHTML = "“" + advice.advice + "”";
      } else {
        adviceText.innerHTML =
          "Failed to fetch advice. So sorry try again later!!";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
