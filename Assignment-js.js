let userName = 'John Doe';
let userAge = 25;
if (userAge < 18) {
  console.log('User is not old enough.');
} else {
  console.log('User is old enough.');
}

for (let i = 0; i < 5; i++) {
  console.log(`Number: ${i}`);
}

function greetAction() {
  alert('Hello, ' + userName + '!');
}

const url = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById('output').innerHTML = data
    .map((user) => `<p>${user.name}</p>`)
    .join('');
}
