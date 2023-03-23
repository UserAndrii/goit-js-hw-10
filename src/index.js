import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries';
import {
  createListOfCountries,
  createCardWithCountryData,
  clearMarkup,
} from './js/country-markup';
import { Search } from './js/search';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(e) {
  const nameCountry = e.target.value.trim();

  if (nameCountry === '') {
    clearMarkup();
    return;
  }

  fetchCountries(nameCountry)
    .then(response => {
      if (response.length === 1) {
        createCardWithCountryData(response);
        return;
      } else if (response.length > 2 && response.length <= 10) {
        createListOfCountries(response);
        return;
      }

      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      clearMarkup();
    })
    .catch(error => {
      console.log(error);
      clearMarkup();
    });
}

document.querySelectorAll('.search').forEach(element => {
  new Search(element);
});
