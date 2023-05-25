// Declare your genre arrays here
let drama = document.querySelector(".action")
let action = document.querySelector(".drama")
let horror = document.querySelector(".horror")
let output = document.querySelector("div")
let dramaList = ["BMF", "The Bridge", "Jurassic World Fallen Kingdom"];
let actionList = ["The Matrix", "John Wick Chapter4", "Geostorm"];
let horrorList = ["Scream", "Final Destination 3", "Us"];

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector(".SumbitButton");
submitButton.onclick = function() {
  // console.log(document.querySelector(".TypeInput").value)
  // if (document.querySelector(".TypeInput").value === "action") {
  //   console.log("yolo")

  // } else if (document.querySelector(".TypeInput").value === "drama") {

  // }
  // else if (document.querySelector(".TypeInput").value === "horror"){
  //   for(let el of horrorList ){
  //     output.insertAdjacentHTML("afterbegin", "<p>HELLO</p>");
  //   }
    output.innerHTML = "WHATUP"
    console.log(output)
  console.log(submitButton)
  // }
};



// let suggestButton = document.querySelector(".SuggestButton");
// suggestButton.onclick = function() {
// };





