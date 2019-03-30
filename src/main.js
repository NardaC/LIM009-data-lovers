const data = INJURIES;
const btnTrain = document.getElementById('btn_train');
const btnEnter = document.getElementById('btn_enter');
const btnPedalcyclists = document.getElementById('btn_pedalcyclists');
const btnMotorcyclist = document.getElementById('btn_motocyclists');
const btnCar = document.getElementById('btn_car');
const btnBus = document.getElementById('btn_bus');
const sectionLogin = document.getElementById('login');
const sectionHome = document.getElementById('home');
const btnSearch = document.getElementById('search');
const sectionFilterYear = document.getElementById('year_section');
const train = 'Total_Injured_Persons_Railroad_Train_Accidents';
const pedalcyclists = 'Total_Injured_Persons_Pedalcyclists';
const motorcyclists = 'Total_Injured_Persons_Motorcyclists';
const car = 'Total_Injured_Persons_Passenger_Car_Occupants';
const bus = 'Total_Injured_Persons_Bus_Occupants';
const sectionFooter = document.querySelector('footer');
const selectTableCategory = document.getElementById('select_table_categoria');
const userImage = document.getElementById('user-image');
const nameUser = document.getElementById('name_user');
const tableStructureCategory = document.getElementById('table_structure_category');
const tableStructureYear = document.getElementById('table-structure-year');
const sectionSuma = document.getElementById('suma_section');
sectionLogin.classList.toggle('classShow');
sectionFooter.classList.toggle('classHidden');
selectTableCategory.classList.toggle('classHidden');
userImage.classList.toggle('classHidden');


btnEnter.addEventListener('click', (enter) => {
  enter.preventDefault();
  const user = document.getElementById('username').value;
  if (user === '') {
    alert('Please, enter your name');
  } else {
    nameUser.innerHTML = user;
    sectionLogin.classList.toggle('classShow');
    sectionFooter.classList.toggle('classHidden');
    sectionHome.classList.toggle('classShow');
    sectionFilterYear.classList.toggle('classShow');
    userImage.classList.toggle('classShow');
    sectionSuma.classList.toggle('classShow');
    tableStructureCategory.classList.toggle('classHidden');
    tableStructureYear.classList.toggle('classHidden');
  }
});

btnSearch.addEventListener('click', () => {
  let selectYear = document.getElementById('selected_year').value;
  const tableYear = document.getElementById('table_year');
  userImage.classList.toggle('classShow');
  nameUser.classList.toggle('classShow');
  tableStructureYear.classList.toggle('classShow');
  const arrayFilterYear = window.filterByYear(data, selectYear);
  arrayFilterYear.forEach((i) => {
    tableYear.innerHTML = `<td>Train:</td><td>${i.Total_Injured_Persons_Railroad_Train_Accidents}</td>`;
    tableYear.innerHTML += `<td>Pedalcyclist:</td><td>${i.Total_Injured_Persons_Pedalcyclists}</td>`;
    tableYear.innerHTML += `<td>Motocyclist:</td><td>${i.Total_Injured_Persons_Motorcyclists}</td>`;
    tableYear.innerHTML += `<td>Car:</td><td>${i.Total_Injured_Persons_Passenger_Car_Occupants}</td>`;
    tableYear.innerHTML += `<td>Bus:</td><td>${i.Total_Injured_Persons_Bus_Occupants}</td>`;
  });
});

const printYears = (data) => {
  const tableCategory = document.getElementById('table_category');
  tableCategory.innerHTML = '';
  data.forEach((ele) => {
    tableCategory.innerHTML += `<td>${ele.Year}</td><td>${ele.Injuries}</td>`;
  });
};

const printSuma = (data, category) => {
  const tableSuma = document.getElementById('table_suma');
  let total = window.computeStats(data);
  tableSuma.innerHTML = '';
  tableSuma.innerHTML += `<td>${category}</td><td>${total}</td>`;
};

const viewCategory = (idCategory, categoryName) => {
  document.getElementById(idCategory).classList.toggle('classShow');
  selectTableCategory.classList.toggle('classShow');
  tableStructureCategory.classList.toggle('classShow');
  const dataCategory = window.showCategory(data, categoryName);
  printYears(dataCategory);
  printSuma(dataCategory, categoryName);
  const selectOrder = document.getElementById('select_order');
  selectOrder.addEventListener('change', () => {
    let sortOrder = document.getElementById('select_order').value;
    let listOrder = [];
    if (sortOrder === 'ascendente') {
      listOrder = window.sortData(dataCategory, 'Year', 'A');
    } else if (sortOrder === 'descendente') {
      listOrder = window.sortData(dataCategory, 'Year', 'D');
    }
    printYears(listOrder);
  });
};

// LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA TRAIN//
btnTrain.addEventListener('click', () => {
  viewCategory('train', train);// seccion HTML , constante con el string
});

btnPedalcyclists.addEventListener('click', () => {
  document.getElementById('train').classList.toggle('classShow');
  viewCategory('pedalcyclists', pedalcyclists);
  sectionFilterYear.classList.toggle('classShow');
});

btnMotorcyclist.addEventListener('click', () => {
  document.getElementById('pedalcyclists').classList.toggle('classShow');
  viewCategory('motocyclists', motorcyclists);
});

btnCar.addEventListener('click', () => {
  document.getElementById('motocyclists').classList.toggle('classShow');
  viewCategory('car', car);
});

btnBus.addEventListener('click', () => {
  document.getElementById('car').classList.toggle('classShow');
  viewCategory('bus', bus);
});
