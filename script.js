function irParaAgendamento() {
    window.location.href = "#agendamento";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agendamento');

    function validarFormulario(event) {
        event.preventDefault();
        let isValid = true;


        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';


        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
            isValid = false;
            esconderMensagem('nameError');
        }


        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
            esconderMensagem('emailError');
        }

        const message = document.getElementById('message').value;
        if (message.trim() === '') {
            document.getElementById('messageError').textContent = 'Por favor, insira uma mensagem.';
            isValid = false;
            esconderMensagem('messageError');
        }

        if (isValid) {
            document.getElementById('formMessage').textContent = 'Enviado com sucesso!';
            esconderMensagem('formMessage');
        }
    }

    function esconderMensagem(elementId) {
        setTimeout(() => {
            document.getElementById(elementId).textContent = '';
        }, 5000);
    }

    form.addEventListener('submit', validarFormulario);
});

var msgCookies = document.getElementById('cookies-msg');

function aceito() {
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar');
}

if (localStorage.getItem('lgpd') === 'sim') {
    msgCookies.classList.remove('mostrar');
} else {
    msgCookies.classList.add('mostrar');
}
