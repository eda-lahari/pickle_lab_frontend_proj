let modal = document.getElementById("modal");
let closeModalButton = document.querySelector(".close");
let buyNowButton = document.getElementById("buy-now-button");
let reviewForm = document.getElementById("review-form");
let reviewText = document.getElementById("review-text");
let reviewsContainer = document.getElementById("reviews");
let modalDescription = document.getElementById("modal-description");

let pickleTypes = {
    mango: {
        name: "Mango Pickle",
        description: "Indulge in the tropical goodness of our Mango Pickle. Bursting with the sweetness of ripe mangoes and a hint of spice, this pickle is a perfect accompaniment to any meal or a delightful snack on its own."
    },
    lemon: {
        name: "Lemon Pickle",
        description: "Experience the zesty tang of our Lemon Pickle! Made with sun-ripened lemons and a blend of spices, this pickle offers a refreshing burst of flavor that elevates your dishes and tantalizes your taste buds."
    },
    ginger: {
        name: "Ginger Pickle",
        description: "Awaken your senses with our Ginger Pickle! This tangy and spicy delight combines the warmth of fresh ginger with a medley of spices, creating a pickle that's perfect for adding a kick to your meals or enjoying straight from the jar."
    },
    gongura: {
        name: "Gongura Pickle",
        description: "Savor the unique flavor of our Gongura Pickle, made from the tangy gongura leaves. This pickle is a delightful blend of sour and spicy, making it a fantastic addition to rice or as a side dish that will leave you craving more."
    },
    redchilli: {
        name: "Red Chilli Pickle",
        description: "For the spice lovers, our Red Chilli Pickle is a must-try! Bursting with fiery flavors and a perfect balance of heat, this pickle is ideal for adding a bold kick to your meals. Dare to spice up your life!"
    },
    tomato: {
        name: "Tomato Pickle",
        description: "Enjoy the rich and tangy flavor of our Tomato Pickle! Made from the freshest tomatoes and a blend of spices, this pickle is perfect for enhancing your sandwiches, rice dishes, or simply enjoying as a snack."
    },
    chicken: {
        name: "Chicken Pickle",
        description: "Delight in the savory goodness of our Chicken Pickle! Infused with aromatic spices and tender chicken, this pickle is a unique treat that pairs wonderfully with rice or can be enjoyed straight from the jar."
    },
    prawns: {
        name: "Prawns Pickle",
        description: "Indulge in the exotic flavors of our Prawns Pickle. This spicy and tangy pickle features succulent prawns marinated in a blend of spices, making it a delectable addition to any meal or a perfect snack for seafood lovers."
    }
};

function openModal(pickleType, showBuyButton) {
    modal.style.display = "block";
    document.getElementById("modal-title").innerHTML = pickleTypes[pickleType].name;

    if (showBuyButton) {
        modalDescription.innerHTML = pickleTypes[pickleType].description;
        document.getElementById("buy-now-button").style.display = "block";
        document.getElementById("review-section").style.display = "none";
    } else {
        modalDescription.innerHTML = ""; // Clear the description
        document.getElementById("buy-now-button").style.display = "none";
        document.getElementById("review-section").style.display = "block";
        document.getElementById("modal-title").innerHTML = `Review ${pickleTypes[pickleType].name}`;
    }
}

function closeModal() {
    modal.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);

buyNowButton.addEventListener("click", function() {
    alert("Purchase successful!");
});

reviewForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let review = reviewText.value;
    reviewsContainer.innerHTML += `<p>${review}</p>`;
    reviewText.value = "";
});
