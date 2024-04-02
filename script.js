let urlBase = 'https://api.openweathermap.org/data/2.5/weather?q='
let api_key = 'c17b3c3a7025a9406b52f30b6080fadb'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad) 
    }
})

function fetchDatosClima(ciudad){
    
    fetch(`${urlBase}${ciudad}&appid=${api_key}`)
        .then(res => res.json())
        .then(res => mostrarDatosClima(res))
}


function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const paisNombre = data.sys.country
    const ciudadNombre = data.name
    const description = data.weather[0].description
    const temperaturaCiudad = data.main.temp
    const humedadCiudad = data.main.humidity
    const icon = data.weather[0].icon
    


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${paisNombre}, ${ciudadNombre}`

    const descriptionP = document.createElement('p')
    descriptionP.textContent = `La descripcion meteorologíca es: ${description}`

    const tempP = document.createElement('p')
    tempP.textContent =  `La temperatura es: ${Math.floor(temperaturaCiudad - difKelvin)}°C 🌡️` 

    const iconoImagen = document.createElement('img')
    iconoImagen.src= 'https://openweathermap.org/img/wn/10d@2x.png'

    const humedadP = document.createElement('p')
    humedadP.textContent = `La humedad es: ${humedadCiudad}%`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(iconoImagen)
    divDatosClima.appendChild(tempP)
    divDatosClima.appendChild(humedadP)
    divDatosClima.appendChild(descriptionP)
}
