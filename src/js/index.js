//Elementos del DOM
const userWordElement = document.getElementById('userWord');
const labelErrorElement = document.getElementById('labelError');





// Escuchamos eventos
userWordElement.addEventListener('keydown', event => {
	// Verificamos si la tecla presionada es "Enter"
	if (event.key === 'Enter') {
		// Evitamos el envío del formulario si la longitud de la palabra no es igual a 5
		if (userWordElement.value.length !== 5) {
			event.preventDefault();
			labelErrorElement.textContent = 'La palabra debe tener 5 letras';
		}
	}
});
