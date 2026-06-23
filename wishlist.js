// Remove Wishlist Item

const deleteButtons =
document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        button.closest(".wishlist-item").remove();

    });

});

// Move To Cart

const moveButtons =
document.querySelectorAll(".move-btn");

moveButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        alert("Item moved to cart!");

        button.closest(".wishlist-item").remove();

    });

});