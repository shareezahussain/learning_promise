let product_counter = 0;

export const product_elements = (area_id, title, price, img_src, link) => {

    product_counter++;
    let product_div = document.createElement('div');
    product_div.setAttribute('id', 'product' + product_counter);
    product_div.setAttribute('class', 'product');
    area_id.appendChild(product_div);

    let product_link = document.createElement('a');
    product_link.setAttribute('href', link);
    product_link.setAttribute('target', '_blank');
    let img = document.createElement('img');
    img.setAttribute('src', img_src);
    img.setAttribute('alt', img_src);
    img.setAttribute('class', 'rounded img-fluid figure-img ');
    product_div.appendChild(product_link);
    product_link.appendChild(img);

    let ul = document.createElement('ul');
    product_div.appendChild(ul);

    let li_title = document.createElement('li');
    li_title.setAttribute('class', 'product__details');
    li_title.textContent = title;
    ul.appendChild(li_title);

    let li_price = document.createElement('li');
    li_price.setAttribute('class', 'product__details product__details--price');
    li_price.textContent = `$${price}`;
    ul.appendChild(li_price);






}