# React + Bob

## Definición del componente App:
Se define un componente funcional de React llamado App.

## Función hey: 
Esta función toma un mensaje como entrada y devuelve una respuesta basada en el contenido del mensaje. La lógica de la respuesta se basa en cuatro condiciones:

Si el mensaje está vacío o contiene solo espacios en blanco, responde con "¡Bien! ¡Sé así entonces!".
Si el mensaje está escrito completamente en mayúsculas y termina con un signo de interrogación, responde con "¡Tranquilo, sé lo que estoy haciendo!".
Si el mensaje está escrito completamente en mayúsculas pero no termina con un signo de interrogación, responde con "¡Whoa, cálmate!".
Si el mensaje termina con un signo de interrogación, responde con "¡Claro!". En cualquier otro caso, responde con "Lo que sea.".
Funciones auxiliares:

hearsBoring: Verifica si el mensaje está vacío o contiene solo espacios en blanco.
hearsFreaky: Verifica si el mensaje está escrito completamente en mayúsculas.
hearsInquisitive: Verifica si el mensaje termina con un signo de interrogación.
Manejo de eventos del formulario:

Cuando se envía el formulario, se llama a la función handleMessageSubmit.
Esta función obtiene el mensaje ingresado por el usuario desde el campo de entrada del formulario.
Llama a la función hey para obtener la respuesta correspondiente.
Muestra la respuesta en un cuadro de alerta en el navegador.
Renderizado del componente App:

El componente App renderiza un formulario simple que permite al usuario ingresar un mensaje y enviarlo al chatbot.
## Código

const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector('input[type="text"]');
    if (inputElement instanceof HTMLInputElement) {
        const message = inputElement.value;
        const response = hey(message);
        alert(response);
    }
};
