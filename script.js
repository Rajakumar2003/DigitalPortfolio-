const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');

toggleButton.addEventListener('click', () => {
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        toggleButton.textContent = 'Hide Details';
    } else {
        hiddenContent.classList.add('hidden');
        toggleButton.textContent = 'More about Gandhi';
    }
});
