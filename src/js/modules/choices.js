import Choices from "choices.js";
document.querySelectorAll('.select').forEach(choicesEl => {
  const choice = new Choices(choicesEl, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
  });
});

