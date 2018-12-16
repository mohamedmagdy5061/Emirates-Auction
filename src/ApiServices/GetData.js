import axios from "../../node_modules/axios";


const url = "http://api.emiratesauction.com/v2/carsonline"

export const GetData = ()=>{

 return( axios.get(`${url}`).then(res => {
      const responseAllCars = res.data.Cars;
      // eslint-disable-next-line no-useless-escape
       responseAllCars.map(res => res.image=res.image.replace(/w\_\[w\]\,h\_\[h\]/,"w_500,h_500"));
    
      return responseAllCars;
   })

   .catch(error => console.error(error)))
}