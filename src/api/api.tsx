import axios from "axios"

// need to call the api from here and clean up project a bit befor finished. But now i think its dine just fix the bugg that it first shows null and then get one behind... but soon finished just need to look thru the checklist

export default axios.create({
  baseURL: 'http://api.geonames.org/searchJSON?q=',
  auth: undefined
})