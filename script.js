const alertaEmail = document.getElementById('email');
const alertaSenha = document.getElementById('senha');
const button = document.getElementById('button');

function alerta() {
  if (alertaEmail.value === 'tryber@teste.com' && alertaSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', alerta);

const btnClick = document.getElementById('submit-btn');
const agreementClick = document.getElementById('agreement');

btnClick.disabled = true;

agreementClick.addEventListener('input', () => {
  if (agreementClick.checked === true) {
    btnClick.disabled = false;
  } else {
    btnClick.disabled = true;
  }
});
