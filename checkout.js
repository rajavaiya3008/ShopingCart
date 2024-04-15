// const checkOutArr = localStorage.getItem('checkOutItems');

let checkOutItems = JSON.parse(localStorage.getItem('checkOutItems'));
console.log(checkOutItems);

let checkout_items = document.querySelector('.checkout-items');
let total_price = document.querySelector('.total-price');
let myForm = document.querySelector('.myForm');
let more_btn = document.querySelector('.more-btn');
let menu_list = document.querySelector('.menu-list');
let body = document.querySelector('body');



body.addEventListener('click',removeMenu);

function removeMenu(){
    menu_list.style.display = 'none';
}

more_btn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the body
    toggleMenu();
  });

  function toggleMenu() {
    menu_list.style.display = menu_list.style.display === 'block' ? 'none' : 'block';
  }


// function showMenu(){
//     if(menu_list.style.display === 'block'){
//         menu_list.style.display = 'none';
//     }
//     else{
//         menu_list.style.display = 'block';
//     }
// }

// more_btn.addEventListener('click', showMenu);


myForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

// function empty(){
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let phone = document.querySelector('#phone').value;
//     let address = document.querySelector('#address').value;
//     let city = document.querySelector('#city').value;

//     if((name && email && phone && address && city) === '') {
//         alert("Please fill up form");
//     }
//     else if(name === ''){
//         alert('Please enter your name');
//     }

//     else if(email === ''){
//         alert('Please enter your email');
//     }

//     else if(phone === ''){
//         alert('Please enter your phone');
//     }

//     else if(address === ''){
//         alert('Please enter your address');
//     }

//     else if(city === ''){
//         alert('Please enter your city');
//     }

//     if(name !== '' && email !== '' && phone !== '' && address !== '' && city !== ''){
//         let url = "file:///Users/mac/Desktop/shoppingCart/summury.html";

//         window.open(url, '_blank');
//     }

//     // let url = "file:///Users/mac/Desktop/shoppingCart/summury.html";

//     // window.open(url, '_blank');
// }

// function empty() {
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let phone = document.querySelector('#phone').value;
//     let address = document.querySelector('#address').value;
//     let city = document.querySelector('#city').value;

//     // let allInputs = document.querySelectorAll('input');

//     let userDetail = {
//         name: name,
//         email: email,
//         phone: phone,
//         address: address,
//         city: city
//     };

//     localStorage.setItem('userDetail', JSON.stringify(userDetail));

//     // if (!name && !email && !phone && !address && !city) {
//     //     alert("Please fill up all fields");
//     // } else {
//     //     if (!name ) {
//     //         alert('Please enter your name');
//     //     } else if (!email) {
//     //         alert('Please enter your email');
//     //     } else if (!phone) {
//     //         alert('Please enter your phone');
//     //     } else if (!address) {
//     //         alert('Please enter your address');
//     //     } else if (!city) {
//     //         alert('Please enter your city');
//     //     } else {
//     //         let url = "file:///Users/mac/Desktop/shoppingCart/summury.html";
//     //         window.open(url, '_blank');
//     //     }
//     // }

//     switch(true){
//         case(!name && !email && !phone && !address && !city):
//             alert("Please fill up all fields");
//             break;
//         case (!name.trim()):
//             alert("Please enter your name");
//             break;
//         case (!email.trim()):
//             alert("Please enter your email");
//             break;
//         case (!phone.trim()):
//             alert("Please enter your phone number");
//             break;
//         case (!address.trim()):
//             alert("Please enter your address");
//             break;
//         case (!city.trim()):
//             alert("Please enter your city");
//             break;
//         default:
//             let url = "file:///Users/mac/Desktop/shoppingCart/summury.html";
//             window.open(url, '_blank');
//     }
// }

function empty() {
    // Get all input fields
    let inputs = document.querySelectorAll('.myForm-input');
    let userDetail = {};

    // Loop through each input field
    for (let input of inputs) {
        let value = input.value.trim();
        let id = input.id;

        // Check if the value is empty
        if (!value) {
            alert(`Please enter your ${id}`);
            return;
        }

        // Add the input value to userDetail object
        userDetail[id] = value;
    }

    // Save user details to localStorage
    localStorage.setItem('userDetail', JSON.stringify(userDetail));

    // Open summary page
    let url = "file:///Users/mac/Desktop/shoppingCart/summury.html";
    window.open(url, '_blank');
}





// let totalPrice = checkOutItems.reduce( (acc,curr) => acc + (curr.price * curr.quantity),0);
total_price.innerHTML = "Total Price:" + checkOutItems.reduce( (acc,curr) => acc + (curr.price * curr.quantity),0);

checkOutItems.forEach( (item) => {
    let checkOutItem = document.createElement('div');
    checkOutItem.classList.add('checkout-item');

    checkOutItem.innerHTML = `<p>${item.id}</p> <p>${item.name}</p> <p>Quantity: ${item.price}</p> <p>${item.quantity}</p>`;

    checkout_items.appendChild(checkOutItem);
})

