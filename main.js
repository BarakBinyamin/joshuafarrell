import './style.css'
import './fonts.css'

export function donate() {
    alert("There's no donation link at the moment, please come back soon!") 
}
// Attach the function to the button inside the script
document.getElementById('donateBtn').addEventListener('click', donate)

export function scrollToId(id="meet-joshua-farrell") {
  // 1. Get the element using its unique ID
  const element = document.getElementById(id);
 console.log(id)
  // 2. If the element exists, scroll it into view
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth' // Optional: adds a smooth animation
    });
  }
}
document.getElementById('meetBtn').addEventListener('click', scrollToId)
