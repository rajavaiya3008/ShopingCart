let checkOutItems = JSON.parse(localStorage.getItem('checkOutItems'));
console.log(checkOutItems);

let userDetail = JSON.parse(localStorage.getItem('userDetail'));
console.log(userDetail);




let checkout_items = document.querySelector('.summary-items');
let total_price = document.querySelector('.total-price');
let name = document.querySelector('.name');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let address = document.querySelector('.address');
let city = document.querySelector('.city');
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

name.innerHTML = "Name:  " + userDetail.name;
email.innerHTML = "Email:  " + userDetail.email;
phone.innerHTML = "Phone:  " + userDetail.phone;
address.innerHTML = "Address:  " + userDetail.address;
city.innerHTML = "City:  " + userDetail.city;


total_price.innerHTML = "Total Price:  " + checkOutItems.reduce( (acc,curr) => acc + (curr.price * curr.quantity),0);

checkOutItems.forEach( (item) => {
    let checkOutItem = document.createElement('div');
    checkOutItem.classList.add('summary-item');

    checkOutItem.innerHTML = `<p>${item.id}</p> <p>${item.name}</p> <p>${item.price}</p> <p>Quantity: ${item.quantity}</p>`;

    checkout_items.appendChild(checkOutItem);
})
