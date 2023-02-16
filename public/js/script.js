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

// // an event for playing the music
// window.addEventListener('load', () => {
//   const audio = document.getElementById('hippy-shake');
//   const button = document.getElementById('play-button');
//   const volumeControl = document.getElementById('volume-control');
//   // Set initial volume to 100%
//   audio.volume = 1;
//   // Add event listener to the button to play the audio when clicked
//   button.addEventListener('click', () => {
//     if (audio.paused) {
//       audio.play();
//       button.textContent = 'Stop';
//     } else {
//       audio.pause();
//       button.textContent = 'Play';
//     }
//   });
  
//   // Add event listener to the volume control to update the volume when changed
//   volumeControl.addEventListener('input', () => {
//     audio.volume = volumeControl.value;
//   });

// });

// volume
// window.addEventListener('load', () => {
//   const audio = document.getElementById('hippy-shake');
//   const volumeControl = document.getElementById('volume-control');

//   // Set initial volume to 100%
//   audio.volume = 1;

//   // Add event listener to the volume control to update the volume when changed
//   volumeControl.addEventListener('input', () => {
//     audio.volume = volumeControl.value;
//   });
// });
