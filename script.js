let allTotal = 0;
let buttons = document.querySelectorAll('.dodaj');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let index = Array.from(buttons).indexOf(this); 
        let price = document.querySelectorAll('.price')[index].innerText;
        let name = document.querySelectorAll('h3')[index].innerText;
        let quantity = document.querySelectorAll('input')[index].value;
        let cartItems = document.querySelector('.cart-items');
    
        
    
        if(parseInt(quantity) > 0){
    
            price = price.substring(1);
            price = parseInt(price);
    
            let total = price * parseInt(quantity);
    
            allTotal += total;
            
            cartItems.innerHTML += `<div class = "cart-single-item"> <h3 class = "cart-item-heading"> ${name} </h3> <p>$${price}x${quantity}=$<span class="spanTotal">${total}</span></p><br><button class = "removeItem" >Ukloni</button></div>`;
            
            document.querySelector('.total').innerText = 'Total: $' + allTotal;
            button.innerText = 'Dodato';
            button.setAttribute('disabled', 'true');
        } else {
            alert('odaberi kolicinu');
        }
    });
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('removeItem')) {
        let mainEl = event.target.parentElement;
        let price = parseInt(mainEl.querySelector('.spanTotal').innerText);
        let name = mainEl.querySelector('.cart-item-heading').innerText;

        allTotal -= price;
        document.querySelector('.total').innerText = 'Total: $' + allTotal;
        
        mainEl.remove();

        for (let i = 0; i < buttons.length; i++) {
            let actions = buttons[i].parentElement;
            let buttonProduct = actions.parentElement.querySelector('h3').innerText;
            if (buttonProduct === name) {
                buttons[i].disabled = false;
                buttons[i].innerText = 'Dodaj';
                buttons[i].parentElement.querySelector('input').value = 0;
                break;
            }
        }


    } 
});


let kupi = document.querySelector('.kupi');
let modalWindow = document.querySelector('.modal');

kupi.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
});
    
let closeModal = document.querySelector('.closeModal');

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    location.reload()
});



            


        



