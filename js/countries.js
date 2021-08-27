const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
};
loadCountries();
const displayCountries=countries=>{
  /*   
  for(const country of countries){
        console.log(country.name)
    } 
    */
   const countriesDiv = document.getElementById('countries');
   countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML= `
        <img src="${country.flag}">
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>`;
        div.classList.add('country');
        countriesDiv.appendChild(div);
   });
}
const loadCountryByName=name =>{
    const url = `//restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetail(data[0]))
};
const displayCountryDetail=country=>{
const countryDetail = document.getElementById('country-detail');
countryDetail.innerHTML= 
`
    <h5>Country Name: ${country.name}</h5>
    <h5>Population: ${country.population}</h5>
     
`;
}
