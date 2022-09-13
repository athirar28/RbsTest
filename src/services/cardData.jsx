import axios from "axios"

export const getCharacterDetails=(params)=>{
     return axios.get("https://rickandmortyapi.com/api/character/",{params})
}

