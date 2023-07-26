function checkPalindrome() {
    const input = document.getElementById("input").value.toLowerCase();
    const reversedInput = input.split("").reverse().join("");
  
    if (input === reversedInput) {
      document.getElementById("result").innerText = `"${input}" is a palindrome!`;
    } else {
      document.getElementById("result").innerText = `"${input}" is not a palindrome.`;
    }
  }
  
