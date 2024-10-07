import axios from "axios";
import { API_KEY, API_URL } from "../private";

export const homeDataLoader = async () => {

    const res = await axios.get(`${API_URL}search/trending?x_cg_demo_api_key=${API_KEY}`);
    if(res.status != 200){
        throw new Error('Something went wrong!')
    }
    console.log("trending data" + JSON.stringify(res))
    return res.data;
}