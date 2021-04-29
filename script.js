// ========= ARRAYS
const beers = [
    {
        name: 'Westvleteren 12 XII',
        price: 3.99,
        style: 'Quadrupel',
        percentage: 10.2,
        city: 'Westvleteren, Belgium',
        description: 'Westvleteren has the smallest output of the Trappist breweries, with only a small part of their production available outside of Belgium.',
        color:'rgb(93, 1, 1)',
    },
    {
        name: 'Artezan Kazimierz',
        price: 3.99,
        style: 'Porter',
        percentage: 6,
        city: 'Błonie, Masovian, Poland',
        description: "Tap at Ma Che Siete Venuti a Fa in Rome-Italy. Darkest brown pour caramel highlights, medium ivory foam. Nose: coconut milk, coffee brandy.",
        color:'rgb(226, 202, 94)',
    },
    {
        name: 'Russian River Pliny the Younger',
        price: 3.99,
        style: 'IPA',
        percentage: 11,
        city: 'Santa Rosa, California USA',
        description: "Pliny the Younger was Pliny the Elder’s nephew, in the case of this beer, the Younger is a triple IPA. Pliny the Younger is hopped three times more than our standard IPA, and is dry hopped four different times.",
        color:'rgb(20, 165, 45)',
    },
    {
        name: 'Struise Pannepot',
        price: 3.99,
        style: 'Belgian-Ale',
        percentage: 10,
        city: 'Oostvleteren, Belgium',
        description: "In the early 1900s, the village of De Panne, close to the French border, was famous for two things -- the ‘Pannepots,’ or fishing boats, that could be seen along the coast.",
        color:'rgb(128, 122, 242)',
    },
    {
        name: 'Westvleteren 8 Extra',
        price: 3.99,
        style: 'Belgian-Ale',
        percentage: 8,
        city: 'Westvleteren, Belgium',
        description: "Westvleteren has the smallest output of the Trappist breweries, with only a small part of their production going very far into the world.",
        color:'rgb(128, 122, 242)',
    },
    {
        name: 'Mikkeller X Imperial Stout 2007',
        price: 3.99,
        style: 'Stout',
        percentage: 15,
        city: 'Copenhagen, Denmark',
        description: "X-periment at the Copenhagen Beer Festival 2007. Imperial Stout brewed with lots of goodies and brettanomyces.",
        color:'rgb(0, 0, 0)',
    },
    {
        name: 'Goose Island Bourbon County Stout',
        price: 3.99,
        style: 'Stout',
        percentage: 14.7,
        city: 'Chicago, Illinois USA',
        description: "I really wanted to do something special for our 1000th batch at the original brewpub. Goose Island could have thrown a party. But we did something better. We brewed a beer.",
        color:'rgb(0, 0, 0)',
    },
    {
        name: 'Dieu du Ciel! Péché Mortel',
        price: 3.99,
        style: 'Stout',
        percentage: 14.7,
        city: 'Saint-Jérôme, Canada',
        description: "I really wanted to do something special for our 1000th batch at the original brewpub. Goose Island could have thrown a party. But we did something better. We brewed a beer.",
        color:'rgb(0, 0, 0)',
    },
    {
        name: 'Maine Beer King Titus',
        price: 3.99,
        style: 'Porter',
        percentage: 7.5,
        city: 'Freeport, Maine, United States',
        description: "Our take on an American robust porter.  Dark, thick, chewy, chocolaty, and of course, generously hopped.",
        color:'rgb(226, 202, 94)',
    },
    {
        name: 'Three Floyds Precious',
        price: 3.99,
        style: 'Porter',
        percentage: 6.3,
        city: 'Munster, Indiana, United States',
        description: "Pour on tap at the brewery, dark reddish black pour with tan head, aroma brought notes of cocoa, caramel, toffee, nice pine and spicy hops.",
        color:'rgb(226, 202, 94)',
    },
    {
        name: 'Anchor Porter',
        price: 3.99,
        style: 'Porter',
        percentage: 5.6,
        city: 'San Francisco, California, United States',
        description: "San Francisco’s famous Anchor Porter brand is made in one of the smallest and most traditional breweries in the world.",
        color:'rgb(226, 202, 94)',
    },
    {
        name: 'La Cumbre Elevated',
        price: 3.99,
        style: 'IPA',
        percentage: 7.2,
        city: 'Albuquerque, New Mexico, United States',
        description: "Did someone ask for hops? Tired of beers that promise a full lupulin experience, but never deliver more than richly malted bitterness? It’s no secret that this is what we excel at.",
        color:'rgb(20, 165, 45)',
    },
    {
        name: 'Surly Furious',
        price: 3.99,
        style: 'IPA',
        percentage: 6.7,
        city: 'Minneapolis, Minnesota, United States',
        description: "Like Hops? You’ll like this fire-hued beer. This is the beer I have always dreamed of making. This is the beer that would come to mind while spending the last two years.",
        color:'rgb(20, 165, 45)',
    },
    {
        name: 'Trappistes Rochefort 10',
        price: 3.99,
        style: 'Quadrupel',
        percentage: 12.2,
        city: 'Rochefort, Belgium',
        description: "Unfiltered In 1952, in order to place the modernisation of the brewery on the right commercial footing, much care was taken with the launch of Rochefort's two new beers.",
        color:'rgb(93, 1, 1)',
    },
]
const selectedBeer = []

// ========= VARIABLES
const mainContainer = document.querySelector('.main-menu');
const btnContainer = document.querySelector('.btn-container')
const cartNumber = document.querySelector('.cart-number')
const cartComunicat = document.querySelector('.cart-comunicat')
const cartBtn = document.querySelector('.cart');
const cartTotal = document.querySelector('.cart-items')

// ========= EVENT LISTENERS
window.addEventListener('DOMContentLoaded',function(){
    displayBeer(beers)
    displayBtns ()
    })
// ========= FUNCTIONS

// display beer function and some btn style event
function displayBeer(beersArray){
    let beerList = beersArray.map((item)=>{
        return `<section class="beer">
        <div class="order-btn" style="border: 4px ${item.color} solid;"></div>
        <h2>${item.name}</h2>
        <h3>${item.style} - ${item.percentage}% - ${item.city}<br><span class="cost">${item.price}&nbsp&#36;</span></h3>
        <p>${item.description}</p>
        </section>`
    }).join('')
    mainContainer.innerHTML=beerList

    const addToCart = document.querySelectorAll('.order-btn');
    addToCart.forEach((addBtn)=>{
        addBtn.addEventListener('click',function(e){
        const target = e.currentTarget;
        const targetStyle = target.style.border;
        const indexNumber = targetStyle.indexOf('r');
        const styleColor = targetStyle.slice(indexNumber,targetStyle.length)
        target.style.backgroundColor = styleColor;
        cartComunicat.classList.add('cart-comunicat-visible');
        setTimeout(function(){
        target.style.backgroundColor = 'white';
        cartComunicat.classList.remove('cart-comunicat-visible');
        },800)
        
        const beerName = target.nextSibling.nextSibling.textContent;
        const beer = beers.filter(function(beer){
            return beer.name === beerName;
        })
        selectedBeer.push(beer[0]);
        cartNumber.innerHTML=selectedBeer.length
    })
    })
}

// filter btns display 
function displayBtns (){
    // select all beer styles from array
        const styles = beers.reduce(
            function(values,item){
                if(!values.includes(item.style)){
                    values.push(item.style)
                }
            return values
            },['all']
        );
    // display filter btns 
        const filterBtns = styles.map((item)=>{
        return `<button class="btn" type="button" data-id=${item}>${item}</button>`
        }).join('')
        btnContainer.innerHTML=`<h2 class="btn-title">choose your favorite style or taste you like:</h2>`+filterBtns;
    
        const btns = document.querySelectorAll('.btn');
        btns.forEach((btn)=>{
            btn.addEventListener('click',function(e){
            const category = e.currentTarget.dataset.id;
    
            const beersMenu = beers.filter(function(beer){
                if(beer.style===category){
                    return beer;
                }
            })
            if (category === "all") {
                displayBeer(beers);
              } else {
                displayBeer(beersMenu);
              }
            })
        })
    }


// Display items in cart 
cartBtn.addEventListener('click',function(e){
    const orderList = selectedBeer.map((item)=>{
         return`<div class='single-item'><h2 class="item-name">${item.name} &nbsp<span class='delete'>x</span></h2></div>`
    }).join('');

    let total = selectedBeer.reduce(function(acc,currItem){
        acc+=currItem.price
        return acc
    }, 0);
    total = total.toFixed(2);

    cartBtn.classList.add('cart-off')

    cartTotal.innerHTML= `<h3>Your order:</h3>
    <div class="items">
    ${orderList}
    </div>
    <h3 class="total">Total : ${total} dolars</h3>
    <button class="btn btn-order">Order</button>
    <button class="btn btn-close">close</button>
    <button class="btn btn-clear">clear order</button>`

    const btnOrder = document.querySelector('.btn-order')
    const btnClose = document.querySelector('.btn-close')
    const btnClear = document.querySelector('.btn-clear');
    btnOrder.addEventListener('click',function(){
        cartTotal.innerHTML=''
        cartBtn.classList.remove('cart-off')
        selectedBeer.length=0;
        cartNumber.innerHTML='';
        console.log('your order is coming');
    })
    btnClose.addEventListener('click',function(){
        cartTotal.innerHTML=''
        cartBtn.classList.remove('cart-off')
    })
    btnClear.addEventListener('click',()=>{
        cartTotal.innerHTML=''
        cartBtn.classList.remove('cart-off')
        selectedBeer.length=0;
        cartNumber.innerHTML='';
    })
    const tempWrapper = document.querySelector('.items')
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn)=>{
        btn.addEventListener('click',function(e){
            currBtn = e.currentTarget.parentElement.parentElement;
            let currBeer = e.currentTarget.parentElement.textContent.slice(0,-3);
            console.log(currBeer);
            tempWrapper.removeChild(currBtn)
            const deleteBeer = selectedBeer.find(element => element.name ===currBeer);
        const index = selectedBeer.indexOf(deleteBeer);
        if (index > -1) {
            selectedBeer.splice(index, 1);
          }
          cartNumber.innerHTML=selectedBeer.length
        })
    })

    })