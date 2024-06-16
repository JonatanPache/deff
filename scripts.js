let chatbotVisible = false;

function toggleChatbot() {
    const chatContainer = document.getElementById('chatContainer');
    const floatingButton = document.getElementById('floatingButton');

    if (!chatbotVisible) {
        chatContainer.style.display = 'block';
        floatingButton.innerHTML = '&#10006;'; // Icono de cerrar
    } else {
        chatContainer.style.display = 'none';
        floatingButton.innerHTML = '&#9998;'; // Icono de chat
    }

    chatbotVisible = !chatbotVisible;
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    respondToUser(userInput);
    document.getElementById('userInput').value = '';
}

function appendMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerHTML = sender === 'user' ? '<img src="user-icon.png">' : '<img src="bot-icon.png">';
    messageElement.appendChild(avatar);

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = message;
    messageElement.appendChild(content);

    chatMessages.appendChild(messageElement);

    // Scroll al final del contenedor de mensajes
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function respondToUser(userInput) {
    let response;
    if (userInput.toLowerCase().includes('enfoque principal') || userInput.toLowerCase().includes('campo del machine learning')) {
        response = "El enfoque principal de DEFF en el campo del machine learning es desarrollar soluciones personalizadas que optimicen procesos empresariales mediante análisis avanzados de datos.";
    } else if (userInput.toLowerCase().includes('tipos de soluciones') || userInput.toLowerCase().includes('ofrece de machine learning')) {
        response = "DEFF ofrece soluciones en áreas como predicción de datos, análisis de sentimientos, reconocimiento de imágenes y optimización de procesos mediante algoritmos de machine learning.";
    } else if (userInput.toLowerCase().includes('ejemplos de proyectos exitosos')) {
        response = "Algunos proyectos exitosos de DEFF incluyen la optimización de cadenas de suministro, personalización de recomendaciones en plataformas de comercio electrónico y detección de fraudes financieros.";
    } else if (userInput.toLowerCase().includes('garantiza la calidad') || userInput.toLowerCase().includes('precisión de sus modelos')) {
        response = "DEFF asegura la calidad y precisión de sus modelos de machine learning mediante rigurosos procesos de validación y pruebas con datos reales.";
    } else if (userInput.toLowerCase().includes('tecnologías y herramientas')) {
        response = "DEFF utiliza tecnologías como TensorFlow, PyTorch y scikit-learn, junto con herramientas personalizadas para la implementación eficiente de modelos de machine learning.";
    } else if (userInput.toLowerCase().includes('diferenciar a deff') || userInput.toLowerCase().includes('otras empresas')) {
        response = "DEFF se distingue por su enfoque personalizado, expertise técnico y capacidad para integrar soluciones de machine learning de manera efectiva en diferentes sectores industriales.";
    } else if (userInput.toLowerCase().includes('colaborar con deff')) {
        response = "Puedes comenzar a colaborar con DEFF contactando a nuestro equipo a través de nuestro sitio web o enviando un correo electrónico a contacto@deffml.com.";
    } else if (userInput.toLowerCase().includes('privacidad y seguridad')) {
        response = "La privacidad y seguridad de los datos son fundamentales para DEFF. Implementamos medidas estrictas para proteger la información confidencial de nuestros clientes durante todo el ciclo de vida del proyecto.";
    } else if (userInput.toLowerCase().includes('impacto y retorno de inversión')) {
        response = "DEFF evalúa el impacto y el retorno de inversión de nuestras soluciones de machine learning mediante métricas específicas y casos de estudio que demuestran mejoras significativas en eficiencia y rentabilidad.";
    } else if (userInput.toLowerCase().includes('filosofía o visión')) {
        response = "Nuestra visión en DEFF es liderar la innovación en machine learning, aplicando tecnologías avanzadas para resolver desafíos complejos y crear valor sostenible para nuestros clientes.";
    } else {
        response = "Gracias por tu pregunta. Para obtener información más detallada, te recomendamos visitar nuestro sitio web o contactar directamente con nuestro equipo.";
    }

    setTimeout(() => {
        appendMessage('bot', response);
    }, 500);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
