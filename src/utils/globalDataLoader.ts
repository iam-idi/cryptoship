import axios from "axios";
import { API_KEY, API_URL } from "../private";

export const globalDataLoader = async () => {
    const res = await axios.get(`${API_URL}global?x_cg_demo_api_key=${API_KEY}`);
    if(res.status != 200){
        throw new Error('Something went wrong!')
    }
    // console.log("global data: " + JSON.stringify(res.data.data));
    return res.data.data;
}