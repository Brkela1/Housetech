let errors = {}; 

let inputs = document.querySelectorAll('.input');

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');

        if (inputValue.length > 4) {
            errors[inputName] = [];
            switch (inputName) {
                case 'ime_prezime':
                    let validation = inputValue.trim().split(' ');
                    if (validation.length < 2) {
                        errors[inputName].push('Morate uneti i ime i prezime');
                    }
                    break;

                case 'email':
                    if (!validateEmail(inputValue)) {
                        errors[inputName].push('Neispravna email adresa');
                    }
                    break;

                case 'poruka':
                    if (inputValue.length > 200) {
                        errors[inputName].push('Poruka može sadržati maksimalno 200 karaktera');
                    }
                    break;
            }
        } else {
            errors[inputName].push('Polje ne može imati manje od 5 karaktera');
        }

        napisiGreske();
    });
});

const validateEmail = email => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

let napisiGreske = () => {
    let forma = document.querySelector('form');
    forma.querySelectorAll('ul').forEach(elem => elem.remove());

    for (let inputName in errors) {
        let errorsElement = document.createElement('ul');
        errors[inputName].forEach(error => {
            let li = document.createElement('li');
            li.innerText = error;
            errorsElement.appendChild(li);
        });
        forma.appendChild(errorsElement);
    }
};