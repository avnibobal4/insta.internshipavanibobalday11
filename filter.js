// ===========================
// PRODUCT SEARCH
// ===========================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const products =
document.querySelectorAll(".product-card");

products.forEach((product)=>{

const name =
product.querySelector("h3")
.innerText
.toLowerCase();

if(name.includes(value)){

product.style.display = "block";

}

else{

product.style.display = "none";

}

});

});

}

// ===========================
// CATEGORY FILTER
// ===========================

const categoryFilter =
document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change",()=>{

const category =
categoryFilter.value;

const products =
document.querySelectorAll(".product-card");

products.forEach((product)=>{

if(category === "all"){

product.style.display = "block";

}

else{

if(
product.dataset.category === category
){

product.style.display = "block";

}

else{

product.style.display = "none";

}

}

});

});

}

// ===========================
// SORTING
// ===========================

const sortSelect =
document.getElementById("sortSelect");

if(sortSelect){

sortSelect.addEventListener("change",()=>{

const container =
document.getElementById("productContainer");

const products =
Array.from(
document.querySelectorAll(".product-card")
);

const value =
sortSelect.value;

// Price Low → High

if(value === "low"){

products.sort((a,b)=>{

return a.dataset.price -
b.dataset.price;

});

}

// Price High → Low

else if(value === "high"){

products.sort((a,b)=>{

return b.dataset.price -
a.dataset.price;

});

}

// Rating High → Low

else if(value === "rating"){

products.sort((a,b)=>{

return b.dataset.rating -
a.dataset.rating;

});

}

container.innerHTML = "";

products.forEach((product)=>{

container.appendChild(product);

});

});

}