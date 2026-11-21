// --- Week 10: Existing Greeting & Age Calculation ---
let userName = "Roman Jaishi";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

let birthYear = 2005;
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// --- Week 11: Dark Mode Toggle ---
// 1. Select the toggle button (make sure your HTML button has id="theme-toggle" or class="theme-toggle")
const themeBtn = document.querySelector("#theme-toggle") || document.querySelector(".theme-toggle");

// 2. Add the click event listener to toggle the "dark-mode" class on the body
if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
  });
}

// --- Week 12 Step 1: Hobby/Skill List Rendering ---
const hobbies = ["Cricket", "Web Developing", "Reading Books"];
const listContainer = document.getElementById("hobby-list");

if (listContainer) {
  const ul = document.createElement("ul");

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }

  listContainer.appendChild(ul);
  console.log("Rendered " + hobbies.length + " hobbies.");
}

// --- Week 12 Step 2: Hobby Gallery (Extension) ---
// Update these strings if you use different filenames or image URLs
const galleryImages = [
  "hobbies.1.jpg",
  "hobbies.2.jpg",
  "hobbies.3.jpg"
];

let currentIndex = 0;
const galleryImg = document.getElementById("gallery-img");
const nextPhotoBtn = document.getElementById("next-photo-btn");

if (galleryImg && nextPhotoBtn && galleryImages.length > 0) {
  galleryImg.src = galleryImages[currentIndex];

  nextPhotoBtn.addEventListener("click", function () {
    currentIndex++;

    // Reset index to 0 when reaching the end of the array to prevent undefined
    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    galleryImg.src = galleryImages[currentIndex];
    console.log("Showing gallery image index:", currentIndex);
  });
}