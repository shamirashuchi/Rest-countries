const loadcountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
         //console.log(countries[1]);
         const CountriesHTML = countries.map(country => getCountryHTML(country))
         //console.log(CountriesHTML);
         const container = document.getElementById("countries");
         container.innerHTML = CountriesHTML.join(' ');
}
//option 2
const getCountryHTML = ({ name, flags, area, region, languages }) => {
    let languageList = '';
   //console.log(Object.values(languages).map((l,i) => `${i+1}. ${l}`).join(''))
    if (languages && Object.values(languages)) {
        languageList = Object.values(languages).map((l, i) => `${i+1}. ${l}`).join('<br>');
      }
  
    return `
      <div class = "country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Continent: ${region}</p>
        ${languageList && `<p>Languages: <ul>${languageList}</ul></p>`}
        <img src="${flags.png}">
    </div>
    `;
  };
  
  
  
  
  
  
// //original
// const getCountryHTML = country =>{
//     return `
//       <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src = "${country.flags.png}">
//       </div>
//     `
// }
// //option 1
// const getCountryHTML = country =>{
//     const{name,flags} = country;
//     return `
//       <div class="country">
//         <h2>${name.common}</h2>
//         <img src = "${flags.png}">
//       </div>
//     `
// }
loadcountries();