const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const person = {
    name: "Costas",
    address:  {
        street: "Lalaland 12"
}};


const getCompanies = () => 
    companies.forEach((company) => 
        console.log(
            `O nome desta empresa é + ${company.name} + e foi fundada em + ${company.start}`
        )
    );
/* 
OU
companies.forEach(company => console.log(`O nome desta empresa é + ${company.name} + e foi fundada em + ${company.start}`)); 
 */


/* 
OU
const companiesStart = (initial) => {
    return companies.filter((company) => company.start > initial);
};
console.log(companiesStart(1987));
 */

const companiesStart = () => {
    return companies.filter((company) => company.start > 1987);
};
console.log(companiesStart());


/* 
const initialValue = 0;
const soma = ages.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue );
console.log(soma);
*/
const soma = ages.reduce(
(accumulator, currentValue) => accumulator + currentValue, 0);
console.log(soma);


const {name, category} = companies[0];
const newObject = {name, category};
console.log(newObject); 
/* console.log({ name: companies[1].name, category: companies[1].category }); */



// const { street } = person.address;
// ou
/* const { address } = person;
const { street } = address; */
// ou
const {address: {street}} = person;
console.log(street);



/* const companiesList = (companies) => {
    return companies.filter(company => company.start > 1996 && company.start < 2004);
};
console.log(companiesList(companies)); */
const companiesList = () =>
    companies.map((company) => 
        company.start > 1996 && company.start < 2004 ? true : false
);