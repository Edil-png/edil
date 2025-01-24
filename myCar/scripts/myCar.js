let addCarBtn = document.getElementById('addCar')
let carsSelect = document.createElement('select')
carsSelect.className = 'carsSelect'
let carObj = []
let carName = []
addCarBtn.onclick = addCar
addCar()
document.getElementById('cars').onchange = addCar
async function addCar() {
  try {
    let baseCar = await fetch('https://raw.githubusercontent.com/blanzh/carsBase/refs/heads/master/cars.json')
    carObj = await baseCar.json()
    if (!baseCar.ok) {
      throw new Error('Uup could not fetch cars')
    } else {
      carObj.forEach(renderCar)
    }
  } catch (error) {
    document.querySelector('main').innerText = error.message
  }
}
function renderCar(el) {
  let optionCar = document.createElement('option')
  optionCar.innerHTML = el.id
  let select = document.getElementById('cars')
  select.append(optionCar)
  if (select.value == el.id) {
    carObj.push(...el['models'])
    carName = []
    el['models'].forEach(el => carName.push(el))
    carsSelect.innerHTML = null

    // carsOption.innerHTML = ''
    carName.forEach(renderModels)
    document.getElementById('main').append(carsSelect)
  }
}
function renderModels(el) {
  let carsOption = document.createElement('option')
  carsSelect.append(carsOption)
  carsOption.innerHTML += el['name']
  let nameCar = document.createElement('span')
  let modelCar = document.createElement('span')
  let myCar = document.getElementById('myCar')
  nameCar.innerHTML = el['name']
  modelCar.innerHTML = el['path']
  // if (el['name'] = ) 
}
