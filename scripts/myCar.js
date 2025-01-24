const addCarBtn = document.getElementById('addCar')
const carsSelect = document.createElement('select')
carsSelect.className = 'carsSelect'
const carObj = []
const carName = []
addCarBtn.onclick = addCar
addCar()
document.getElementById('cars').onchange = addCar
async function addCar() {
  try {
    const baseCar = await fetch('https://raw.githubusercontent.com/blanzh/carsBase/refs/heads/master/cars.json')
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
  const optionCar = document.createElement('option')
  optionCar.innerHTML = el.id
  const select = document.getElementById('cars')
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
  const carsOption = document.createElement('option')
  carsSelect.append(carsOption)
  carsOption.innerHTML += el['name']
  const nameCar = document.createElement('span')
  const modelCar = document.createElement('span')
  const myCar = document.getElementById('myCar')
  nameCar.innerHTML = el['name']
  modelCar.innerHTML = el['path']
  // if (el['name'] = ) 
}
