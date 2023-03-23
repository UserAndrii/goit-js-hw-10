import Notiflix from 'notiflix';

const countryListEl = document.querySelector('.country-list');
const cardEl = document.querySelector('.country-info');

function createListOfCountries(countryArray) {
  const list = countryArray
    .map(({ name, flags }) => {
      return `<li class="country-item">
              <img class="country-svg" src="${flags.svg}" alt="${flags.alt}">
              <p class="country-name">${name.official}</p>
          </li>`;
    })
    .join('');
  cardEl.innerHTML = '';
  countryListEl.innerHTML = list;
}

function createCardWithCountryData(countryArray) {
  const card = countryArray
    .map(({ name, capital, population, flags, languages }) => {
      return `
        <ul class="country__list">
          <li>
              <img class="country__svg" src="${flags.svg}" alt="${flags.alt}">
              <h2 class="country__name">${name.official}</h2>
          </li>
          <li>
              <p class="country__list-name">Capital: <span class="country__value">${capital}</span></p>
          </li>
          <li>
              <p class="country__list-name">Population: <span class="country__value">${population}</span></p>
          </li>
          <li>
              <p class="country__list-name">Languages: <span class="country__value">${Object.values(
                languages
              ).join(', ')}</span></p>
          </li>
      </ul>`;
    })
    .join('');
  countryListEl.innerHTML = '';
  cardEl.innerHTML = card;
}

function clearMarkup() {
  countryListEl.innerHTML = '';
  cardEl.innerHTML = '';
}

export {
  createListOfCountries,
  createCardWithCountryData,
  clearMarkup
};
