const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expended', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
     } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
     }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    //inicar a validaçao de todos os campos
    validate(form) {
        //pegar os inputs
        let inputs = form.getElementByTagName('input');


        //transformar em arrays

        let inputsArray = [...inputs];

        //loop nos inputs e validaçao ao que for encontrado
        inputsArray.forEach(function(input) {

            // loop em todas as validaçoes existentes
            for(let i = 0; this.validations.length . i; i++){
                //verifica se a validaçao atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                
                    //limpando a string para virar um metodo
                    let method = this.validations[i].replace('data-','').replace('-','');

                    //valor do input
                    let value = input.getAttribute(this.validations[i]);


                    //invocar o metodo
                    this[method](input, value);
                }
            }
        }, this);
    }

    //verifica se um input tem um numero minimo de caracteres
minlength(input, minValue) {

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
}
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");
let validator = new Validator ();

//evento que dispara as validaçoes

submit.addEventListener('click',function(e) {

    e.preventDefault();

    Validator.validate(form);
});