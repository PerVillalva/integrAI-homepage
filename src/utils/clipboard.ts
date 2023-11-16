export function clibpboardInteractions() {
  // Function to copy code on button click
  function copyCode() {
    const div = document.getElementById('code-to-copy');
    const button = document.querySelector('.btn_copy-code');

    if (div && button) {
      const originalContent = button.innerHTML;

      navigator.clipboard
        .writeText(div.innerText)
        .then(() => {
          button.innerHTML = ''; // Change button content to a checkmark icon (using fontawsome icons)

          setTimeout(() => {
            button.innerHTML = originalContent;
          }, 1000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  }

  const copyButton = document.querySelector('.btn_copy-code');
  if (copyButton) {
    copyButton.addEventListener('click', copyCode);
  }
}
