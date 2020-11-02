import { shopstyle_api_link } from "./api_link.js";

export const fetch_shopstyle_data = (offset) => {

    console.log(`${shopstyle_api_link}&offset=${offset}`);
    const result = fetch(`${shopstyle_api_link}&offset=${offset}`)
        .then((response) => {
            return response.json();

        })
        .catch((error) => {
            console.log("something happen" + err.message);
            throw err;
        })

    return result;
}