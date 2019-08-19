global.window = global;
require('../src/data.js');

const input = [
  {
    totalInjuredPersonsRailroadTrainAccidents: null,
    totalInjuredPersonsPedalcyclists: null,
    totalInjuredPersonsMotorcyclists: null,
    totalInjuredPersonsPassengerCarOccupants: null,
    totalInjuredPersonsBusOccupants: null,
    Year: '1965-01-04'
  },
  {
    totalInjuredPersonsRailroadTrainAccidents: 82,
    totalInjuredPersonsPedalcyclists: 67088,
    totalInjuredPersonsMotorcyclists: 80435,
    totalInjuredPersonsPassengerCarOccupants: 2234594,
    totalInjuredPersonsBusOccupants: 20959,
    Year: '1991-01-04'
  },
  {
    totalInjuredPersonsRailroadTrainAccidents: 138,
    totalInjuredPersonsPedalcyclists: 66572,
    totalInjuredPersonsMotorcyclists: 57480,
    totalInjuredPersonsPassengerCarOccupants: 2469358,
    totalInjuredPersonsBusOccupants: 19214,
    Year: '1995-01-04'
  },
  {
    totalInjuredPersonsRailroadTrainAccidents: 211,
    totalInjuredPersonsPedalcyclists: 43481,
    totalInjuredPersonsMotorcyclists: 102994,
    totalInjuredPersonsPassengerCarOccupants: 1379181,
    totalInjuredPersonsBusOccupants: 12141,
    Year: '2007-01-04'
  }
];

const yearSelect = '1995';

const outputFilterYear = [
  {
    Year: '1995-01-04',
    totalInjuredPersonsBusOccupants: 19214,
    totalInjuredPersonsMotorcyclists: 57480,
    totalInjuredPersonsPassengerCarOccupants: 2469358,
    totalInjuredPersonsPedalcyclists: 66572,
    totalInjuredPersonsRailroadTrainAccidents: 138,
  }
];

const outputShowCategory = [
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '2007',
    Injuries: 211
  },
];

const inputSortData = [
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const outputSortData = [
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '2007',
    Injuries: 211
  },
];

const outputSortDescending = [
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const inputCompute = [
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const outputCompute = 431;

describe('Injuries', () => {
  it('deberia ser un array', () => {
    expect(Array.isArray(['INJURIES'])).toBe(true);
  });
});

// describe('INJURIES - global ', () => {
//   it('debería ser un objeto', () => {
//     expect(typeof global).toBe('object');
//   });
// });

describe('filterByYear ', () => {
  it('debería ser una función', () => {
    expect(typeof filterByYear).toBe('function');
  });
  it('debería retornar un tipo de dato objeto', () => {
    expect(typeof window.filterByYear(input, yearSelect)).toBe('object');
  });
  it('debería retorna un array de objeto', () => {
    expect(window.filterByYear(input, yearSelect)).toEqual(outputFilterYear);
  });
});

describe('showCategory ', () => {
  it('debería ser una función', () => {
    expect(typeof showCategory).toBe('function');
  });
  it('debería retornar los datos de una categoria ', () => {
    expect(window.showCategory(input, 'totalInjuredPersonsRailroadTrainAccidents')).toEqual(outputShowCategory);
  });
});

describe('sortData ', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it('ordenado ascendente por Años ', () => {
    expect(window.sortData(inputSortData, 'Year', 'A')).toEqual(outputSortData);
  });
  it('ordenado descendente por Años ', () => {
    expect(window.sortData(inputSortData, 'Year', 'D')).toEqual(outputSortDescending);
  });
});

describe('computeStats ', () => {
  it('debería ser una función', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('debería retornar el total de injuries de una categoria', () => {
    expect(window.computeStats(inputCompute)).toBe(outputCompute);
  });
});
