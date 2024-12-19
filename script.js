// Seleccionamos los botones de selección de planes
const planButtons = document.querySelectorAll('.card button');

// Seleccionamos la sección del formulario
const formSection = document.getElementById('formSection');

// Añadimos un evento de click a cada botón de selección de plan
planButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mostrar el formulario cuando se selecciona un plan
        formSection.style.display = 'block';
        
        // Scroll suave hacia el formulario
        formSection.scrollIntoView({ behavior: 'smooth' });

        
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Obtiene todos los botones "Seleccionar"
    const seleccionarBtns = document.querySelectorAll('.card button');
    console.log(seleccionarBtns)


    // Añade un evento click a cada botón "Seleccionar"
    seleccionarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Captura el valor de la card seleccionada usando el atributo data-card-id
            const selectedCardId = this.getAttribute('data-card-id');

            //obtiene el  input oculto que va a contener como valor el plan seleccionado
                        const selectedCardInput = document.getElementById('selectedCard');

            // Establece el valor en el campo oculto del formulario
            selectedCardInput.value = selectedCardId;

            //obtiene el  input oculto que va a contener como valor el plan seleccionado
            const priceCardInput = document.getElementById('priceCard');


            if (selectedCardId == 1){
                priceCardInput.value = 100
            } else if (selectedCardId == 2){
                priceCardInput.value = 200
            } else {
                priceCardInput.value = 300
            }

            // Opcionalmente, puedes mostrar qué card fue seleccionada
            console.log("Card seleccionada: " + selectedCardId);


        });
    });
});