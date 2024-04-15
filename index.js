const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 1000,
        quantity: 1,
        image: 'https://source.unsplash.com/random/200x200?sig=1'
    },
    {
        id: 2,
        name: 'Tablet',
        price: 500,
        quantity: 1,
        image: 'https://source.unsplash.com/random/200x200?sig=2'
    },
    {
        id: 3,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=3'
    },
    {
        id: 4,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=4'
    },
    {
        id: 5,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=5'
    },
    {
        id: 6,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=6'
    },
    {
        id: 7,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=7'
    },
    {
        id: 8,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=8'
    },
    {
        id: 9,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=9'
    },
    {
        id: 10,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=10'
    },
    {
        id: 11,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=11'
    },
    {
        id: 12,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=12'
    },
    {
        id: 13,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=13'
    },
    {
        id: 14,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=14'
    },
    {
        id: 15,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=15'
    },
    {
        id: 16,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=16'
    },
    {
        id: 17,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=17'
    },
    {
        id: 18,
        name: 'Mobile',
        price: 200,
        quantity: 1,
        image:'https://source.unsplash.com/random/200x200?sig=18'
    },
    
]

//const cartItems = [];

let cartItems = JSON.parse(localStorage.getItem('cartItems'));

const checkOutItems = [];


let cards = document.querySelector('.cards');
let cart_list = document.querySelector('.cart-list');
let cart_btn = document.querySelector('.cart-btn');
let cart_page = document.querySelector('.cart-page');
let close_btn = document.querySelector('.close-btn');
let total_price = document.querySelector('.total-price');
let more_btn = document.querySelector('.more-btn');
let menu_list = document.querySelector('.menu-list');
let cart_count = document.querySelector('.cart-count');
let checkout_btn = document.querySelector('.checkout-btn');
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



checkout_btn.addEventListener('click',checkOutAllItems);

function checkOutAllItems(){
    localStorage.setItem('checkOutItems', JSON.stringify(checkOutItems));
    
}





var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

function totalPrice(arr){
    let totalPrice = arr.reduce( (acc,curr) => acc + (curr.price * curr.quantity),0);
    console.log(totalPrice);

    total_price.innerHTML = totalPrice;


}

function removeCart(){
    cart_page.style.display = "none";
}

function removeItemFromCart(id){
    console.log(id);

    let currentItem = cartItems.find(cartItem => cartItem.id == id);
    console.log(currentItem);

    currentItem.quantity = 1;

    removeByAttr(cartItems, 'id', id); 
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    cart_count.innerHTML = cartItems.length;

    let rmv_item = document.getElementById(`item${id}`).remove();

    totalPrice(cartItems);





}

close_btn.addEventListener('click', removeCart);
function showCart(){
    cart_page.style.display = "block";
}

// remove_btn.addEventListener('click',removeItemFromCart);

cart_btn.addEventListener('click',showCart);



function increaseQuantity(id){
    let currentItem = cartItems.find(cartItem => cartItem.id == id);

    currentItem.quantity++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    document.querySelector(`#itemm${id}`).innerHTML = currentItem.quantity;
    document.querySelector(`#cardi${id}`).innerHTML = currentItem.quantity;

    totalPrice(cartItems);


}

function decreaseQuantity(id){
    let currentItem = cartItems.find(cartItem => cartItem.id == id);

    if(currentItem.quantity === 1){
        removeItemFromCart(id);
        // document.querySelector('.quantity-container').style.display = "none";
        document.querySelector(`#cardno${id}`).removeChild(document.querySelector(`#quantity${id}`));
        // document.querySelector(`#btn-${id}`).style.display = "block";

        let addButton = document.querySelector(`#btnnn-${id}`);
        if (addButton) {
            addButton.style.display = "block";
        }

        // if(!(cartItems.includes(currentItem))){
        //     document.querySelector(`#btn-${id}`).style.display = "block";
        // }

    }

    

    else{
        currentItem.quantity--;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        document.querySelector(`#itemm${id}`).innerHTML = currentItem.quantity;
        document.querySelector(`#cardi${id}`).innerHTML = currentItem.quantity;

        totalPrice(cartItems);
    }

    


}

//function for check out page
function checkOutOneItem(id){
    let checkOutItem = cartItems.find(cartItem => cartItem.id == id);

    checkOutItems.length = 0;


    checkOutItems.push(checkOutItem);

    localStorage.setItem('checkOutItems', JSON.stringify(checkOutItems));


}

function addToCart(product) {

    // document.querySelector('.quantity-container').style.display = "block";

    // let quantity = document.querySelectorAll('.quantity');

    // console.log(quantity);
    

    if(cartItems.includes(product)){
        let currentItem = cartItems.find(cartItem => cartItem.id == product.id);
        
        let quantity = currentItem.quantity++;
        console.log(quantity);
        console.log(currentItem);

        document.querySelector(`#itemm${currentItem.id}`).textContent = currentItem.quantity;
        totalPrice(cartItems);
    }

    
    else{

            


            cartItems.push(product);
            console.log(cartItems);

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            //cartItems = JSON.parse(localStorage.getItem('cartItems'));

            checkOutItems.push(product);

            // localStorage.setItem('checkOutItems', JSON.stringify(checkOutItems));

            cart_count.innerHTML = cartItems.length;

            let currentItem = cartItems[cartItems.length - 1];

            let one_item = document.createElement('div');
                one_item.classList.add('one-item');
                one_item.id = `item${currentItem.id}`;
            
                one_item.innerHTML = `<p class='id'>${currentItem.id}</p> <p class='name'>${currentItem.name}</p> 
                                        <p class='price'>${currentItem.price}</p> <button class='remove-btn' onClick="removeItemFromCart(${currentItem.id})">Remove</button>
                                        <div class="quantity-container">
                                            <button onClick="decreaseQuantity(${currentItem.id})" class="decrease"> < </button>
                                            <p class='quantity' id='itemm${currentItem.id}'>${currentItem.quantity}</p>
                                            <button onClick="increaseQuantity(${currentItem.id})" class="increase">></button>
                                        </div>
                                        <button onClick="checkOutOneItem(${currentItem.id})" class="single-checkout"><a href="checkout.html" target="_blank">Check Out</a></button>`;


            
            cart_list.appendChild(one_item);

            totalPrice(cartItems);

            

            // let remove_btn = document.querySelector('.remove-btn');
            // remove_btn.addEventListener('click',removeItemFromCart);




        }

    
}


// cart Items in cart List
cartItems.forEach( (item) => {
    let one_item = document.createElement('div');
                one_item.classList.add('one-item');
                one_item.id = `item${item.id}`;
            
                one_item.innerHTML = `<p class='id'>${item.id}</p> <p class='name'>${item.name}</p> 
                                        <p class='price'>${item.price}</p> <button class='remove-btn' onClick="removeItemFromCart(${item.id})">Remove</button>
                                        <div class="quantity-container">
                                            <button onClick="decreaseQuantity(${item.id})" class="decrease"> < </button>
                                            <p class='quantity' id='itemm${item.id}'>${item.quantity}</p>
                                            <button onClick="increaseQuantity(${item.id})" class="increase">></button>
                                        </div>
                                        <button onClick="checkOutOneItem(${item.id})" class="single-checkout"><a href="checkout.html" target="_blank">Check Out</a></button>`;


            
            cart_list.appendChild(one_item);
            cart_count.innerHTML = cartItems.length;
            //document.querySelector(`#cardi${id}`).innerHTML = item.quantity;


            totalPrice(cartItems);
})


//All product in html
products.forEach( (product) => {

    //cartItems = JSON.parse(localStorage.getItem('cartItems'));

    //let currentItem = cartItems.find( (cartItem) => cartItem.id === product.id);
    //console.log("current Item" + currentItem);
    // if(cartItems.includes(product)){
    //     let currentItem = cartItems.find( (cartItem) => cartItem.id === product.id);
    //     console.log("current Item" + JSON.parse(currentItem));
    // }

    function handleClickWithParam(event){
        addToCart(product);
        event.target.style.display = 'none';
        
        card.appendChild(quantity);
        //document.querySelector('.quantity-container').style.display = "block";
        
    }

    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id',`cardno${product.id}`);

    let img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    let title = document.createElement('h3');
    title.textContent = product.name;

    let price = document.createElement('p');
    price.textContent = `$${product.price}`;

    let button = document.createElement('button');
    button.classList.add('add-btn');
    button.setAttribute('id',`btnnn-${product.id}`);

    button.addEventListener('click',handleClickWithParam)
    button.textContent = 'Add to Cart';

    let quantity = document.createElement('div');
    quantity.classList.add('quantity-container');
    quantity.setAttribute('id',`quantity${product.id}`);

    quantity.innerHTML = `<button onClick="decreaseQuantity(${product.id})" class="decrease-btn"><</button>
                          <span class="card-quantity" id='cardi${product.id}'>${product.quantity}</span>
                          <button onClick="increaseQuantity(${product.id})" class="increase-btn">></button>`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    // card.appendChild(button);

    if (cartItems.some(item => item.id === product.id)) {
        // If a product with the same ID is already in the cartItems array
        // Hide the button
        console.log('item present in cart');
        button.style.display = "none";
        // Append a quantity element to the card
        card.appendChild(quantity);
    } else {
        // If the product is not in the cartItems array
        // Append the button to the card
        //card.appendChild(button);
    }


    
    
    
    card.appendChild(button);
    cards.appendChild(card);
})

cartItems.forEach(item => {

    if(item.quantity > 1) {
        document.querySelector(`#cardi${item.id}`).innerHTML = item.quantity;

}
}
);





// cartItems.forEach( (item) => {
    
//     let one_item = document.createElement('div');
//     one_item.classList.add('one-item');

//     one_item.innerHTML = `<p>${item.id}</p> <p>${item.name}</p> <p>${item.price}</p> <button>Remove</button>`;

//     cart_list.appendChild(one_item);
// })