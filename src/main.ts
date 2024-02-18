const userNameInput = document.getElementById('userName') as HTMLInputElement;
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const submitButton = document.getElementById('submit') as HTMLButtonElement;
const recivedUserName = document.querySelector('.recived-username') as HTMLLIElement;
const recivedFullName = document.querySelector('.recived-fullname') as HTMLLIElement;
const recivedAge = document.querySelector('.recived-age') as HTMLLIElement;

interface User {
  userName: string;
  fullName: string;
  age: string;
}

function getUser(): User {
  return {
    userName: userNameInput.value,
    fullName: fullNameInput.value,
    age: ageInput.value
  };
}

function getLocalStorage(): User {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : { userName: '', fullName: '', age: '' };
}

function setData() {
  setLocalStorage();
  const { userName, fullName, age } = getLocalStorage();
  recivedUserName.textContent = `Username: ${userName}`;
  recivedFullName.textContent = `Full Name: ${fullName}`;
  recivedAge.textContent = `Age: ${age}`;
  userNameInput.value = '';
  fullNameInput.value = '';
  ageInput.value = '';
}

function setLocalStorage() {
  const { userName, fullName, age } = getUser();
  localStorage.setItem('userData', JSON.stringify({ userName, fullName, age }));
}

submitButton.addEventListener('click', (e: Event) => {
  e.preventDefault();
  setData();
});

recivedUserName.textContent = `Username: ${getLocalStorage()?.userName}`;
recivedFullName.textContent = `Full Name: ${getLocalStorage()?.fullName}`;
recivedAge.textContent = `Age: ${getLocalStorage()?.age}`;
