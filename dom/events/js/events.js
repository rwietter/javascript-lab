const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');

  li.textContent = 'New item';
  ul.append(li);
});

const lis = document.querySelectorAll('li');

ul.addEventListener('click', (event) => {
  let clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    clickedElement.remove();
  }
});

function stopPropagationDeprecated() {
  lis.forEach((li) => {
    li.addEventListener('click', (event) => {
      const clickedElement = event.target;
      console.log('Clicou na LI');

      event.stopPropagation();

      clickedElement.remove();
    });
  });

  ul.addEventListener('click', () => {
    console.log('Clicou na UL');

    event.stopPropagation();
  });

  const body = document.querySelector('body');
  body.addEventListener('click', () => {
    console.log('Clicou no body');
  });
}
