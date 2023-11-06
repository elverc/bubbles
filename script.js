document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.getElementById('output');
    const words = ['Fruits&Veggies', 'Fiber&Spice', 'Whole Health System', '69.95', '129.90']; // Array of words
  
    // Function to create a paragraph element for each word and add it to the content div
    function renderWords() {
      const contentDiv = document.getElementById('content');
      words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.classList.add('word');
        contentDiv.appendChild(wordElement);
      });
    }
  
    // Call the renderWords function to display words on the web page
    renderWords();
  
    document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('word')) {
        const selectedWord = event.target.textContent;
        copyToClipboard(selectedWord);
        outputElement.textContent = `Copied: ${selectedWord}`;
      } else {
        outputElement.textContent = '';
      }
    });
  
    function copyToClipboard(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  });
  