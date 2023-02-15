// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("hippy-hippy-shake JS imported successfully!");
});

function verifyAge() {
  const birthdate = document.getElementById("birthdate").value;
  const age = calculateAge(birthdate);
  if (age >= 21) {
    window.location.href = "/auth/";
  } else {
    alert("Sorry, you must be 21 or older to enter.");
  }
}

function calculateAge(birthdate) {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const month = today.getMonth() - birthdateObj.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }
  return age;
}
