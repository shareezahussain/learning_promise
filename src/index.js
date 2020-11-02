import { fetch_shopstyle_data } from "./api/shopstyle_api.js";
import { product_elements } from "./product.js";



let offset = 0;
let currentPage = 1;



function main() {

    let result = 'No';

    fetch_shopstyle_data(offset).then((data) => {

        //clear the div in order for new responses can get rendered after clicking on next/previous buttons
        product_area.innerHTML = "";

        for (let product of data.products) {

            for (let color of product.colors) {


                //looking for only pink items
                if (color.name == 'pink') {

                    result = 'Yes';

                    product_elements(product_area, product.name, product.price, product.image.sizes.Best.url, product.clickUrl)
                    div_visibility('no_items', 'none');


                }

            }

        }

    })

    if (result === 'No') {
        div_visibility('no_items', 'block');


    }

}


//pagination
function nextPage() {
    currentPage++;
    offset = currentPage * 50;
    main();
    document.getElementById('previous_page_container').classList.remove('disabled');


}

function previousPage() {

    //2-1 = 1
    currentPage--;

    (currentPage == 1 ? (offset = 0, document.getElementById('previous_page_container').classList.add('disabled')) : offset = currentPage * 50);
    main();
}


//feature

const div_visibility = (id, display) => {
    document.getElementById(id).style.display = display;
}


//event listeners

document.getElementById('next_page').addEventListener('click', nextPage);
document.getElementById('previous_page').addEventListener('click', previousPage);
window.addEventListener('DOMContentLoaded', main());