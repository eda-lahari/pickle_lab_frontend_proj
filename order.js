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
        description: "Sweet and tangy, our Mango Pickle is a perfect blend of flavors."
    },
    lemon: {
        name: "Lemon Pickle",
        description: "Sour and spicy, our Lemon Pickle is a great addition to any meal."
    },
    ginger: {
        name: "Ginger Pickle",
        description: "Spicy and aromatic, our Ginger Pickle is a flavorful delight."
    },
    gongura: {
        name: "Gongura Pickle",
        description: "Tangy and slightly sweet, our Gongura Pickle is a popular choice."
    },
    redchilli: {
        name: "Red Chilli Pickle",
        description: "Spicy and bold, our Red Chilli Pickle is not for the faint of heart."
    },
    tomato: {
        name: "Tomato Pickle",
        description: "Sweet and tangy, our Tomato Pickle is a great accompaniment to any dish."
    },
    chicken: {
        name: "Chicken Pickle",
        description: "Savory and spicy, our Chicken Pickle is a meat lover's delight."
    },
    prawns: {
        name: "Prawns Pickle",
        description: "Sweet and spicy, our Prawns Pickle is a seafood lover's dream."
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
        document.getElementById("buy-now-button").style.display = "none";
        document.getElementById("review-section").style.display = "block";
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