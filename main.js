function leerFraseAFirebase() {
    axios.get('https://660e07c96ddfa2943b359ce5.mockapi.io/detector')
        .then(response => {
            console.log('Lectura correcta :', response.data);
            // Convertir el JSON de respuesta a un array
            const jsonArray = response.data;
            const array = Object.entries(jsonArray);
            console.log('Array resultante:', array);
            
            // Obtener el último registro del array
            const ultimoRegistro = array[array.length - 1];
            
            // Actualizar el contenido del elemento HTML con el último registro
            const ordenTexto = document.getElementById('orden-texto');
            ordenTexto.textContent = ultimoRegistro[1].frase;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
