import Notiflix from 'notiflix';

export function fetchCountries(country) {
  const BASIC_URL = 'https://restcountries.com/v3.1';
  const searchParameters = 'fields=name,capital,population,flags,languages';

  return fetch(`${BASIC_URL}/name/${country}?${searchParameters}`)
    .then(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }
      return response.json();
    })
}
