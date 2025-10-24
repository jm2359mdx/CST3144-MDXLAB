// // Get references
// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// // Variable to hold what’s shown
// let currentInput = "";

// // Loop through every button
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "C") {
//       // Clear everything
//       currentInput = "";
//       display.value = "";
//     } 
//     else if (value === "=") {
//       try {
//         // Evaluate the expression
//         currentInput = eval(currentInput);
//         display.value = currentInput;
//       } catch (error) {
//         display.value = "Error";
//         currentInput = "";
//       }
//     } 
//     else {
//       // Add button text to display
//       currentInput += value;
//       display.value = currentInput;
//     }
//   });
// });


const { createApp } = Vue;

createApp({
  data() {
    return {
      display: ''
    };
  },
  methods: {
    append(value) {
      this.display += value;
    },
    clear() {
      this.display = '';
    },
    calculate() {
      try {
        this.display = String(eval(this.display));
      } catch (e) {
        this.display = 'Error';
      }
    }
  }
}).mount('#app');
