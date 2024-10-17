import axios from "axios";


const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
})



// HTTP GET METHOD 

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}




// https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags
//




//https://freetestapi.com/api/v1/politicians