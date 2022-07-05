
let full_menu = ""
let item_data = [
    {id:1,img_name:"Veggie Paradise.jpg",name:"Veggie Paradise",desc:"A delightful and delicious pizza for vegans",price:250,amount:0},
    {id:2,img_name:"Turkey_Veg_Pizza.jpg",name:"Turkey Veg Pizza",desc:"A delightful and delicious pizza for vegans",price:250,amount:0},
    {id:3,img_name:"mashroom_pizza.jpg",name:"Mashroom Pizza",desc:"A delightful and delicious pizza for vegans",price:250,amount:0},
    {id:4,img_name:"MushRoom_Chessy_Pizza.jpg",name:"MushRoom Chessy Pizza",desc:"A delightful and delicious pizza for vegans",price:250,amount:0},
    {id:5,img_name:"red-pepper_veggie.jpg",name:"Red-Pepper Pizza",desc:"A delightful and delicious pizza for vegans",price:250,amount:0},
]
const init=()=>{
    let crt=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    console.log(crt)
    crt.map(item=> refresh(item.id))
    showCart()
}
const menu_render= ({id,img_name,name,desc,price,amount},index) =>{
    var template = `<tr>
    <td style="width: 20%;"><img src="../Asset/${img_name}" class="menu_image"></td>
    <td style="width: 55%;"><p class="menu_name">${name}<span class="menu_price">₹${price}</span></p>
    <p class="menu_description">${desc}</p></td>

    <td style="width: 25%;text-align: center;">
        <button class="menu_add" data-id="${id}" onClick="addToCart(${id},${index})">ADD</button>
    </td>
    </tr> `;
    return template;
}
const cart_render= ({id,img_name,name,desc,price,amount},index) =>{
    var template = `<tr>
    <td style="width: 20%;"><img src="../Asset/${img_name}" class="menu_image"></td>
    <td style="width: 55%;"><p class="menu_name">${name}<span class="menu_price">${price*amount}</span></p>
    <td style="width: 25%;text-align: center;">
        <p>
            <button class="box" onClick="cartDecrease(${id},${index})">-</button>
            <span id="item1" class="counter">${amount}</span>
            <button class="box" onClick="cartIncrease(${id},${index})">+</button>
            <button class="cartbox" onClick="cartdel(${id},${index})">Delete</button>
        </p>
    </tr>`;
    return template;
}

item_data.map((item,index)=>{
    full_menu+=menu_render(item,index)
})
let amountno = document.getElementById("amountid");
let cart_bar = document.getElementById("cartmenu");
let menu_bar = document.getElementById("menubar");
let carts = document.getElementById("cart");
menu_bar.innerHTML=full_menu;
localStorage.setItem("menu",JSON.stringify(item_data))


const addToCart=(id,index)=>{
    let btn = button.find(item=> item.dataset.id==id)
    btn.disabled=true
    btn.innerHTML="In Cart"
    
    let cart=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    item_data[index].amount=1
    cart.push(item_data[index])
    localStorage.setItem("cart",JSON.stringify(cart))
    showCart()
    carts.classList.remove("hide")
    carts.classList.add("show")
    // carts.style.visibility="visible"
    
}
let button=[...document.querySelectorAll(".menu_add")]

console.log(button)

const refresh=(id)=>{
    let btn = button.find(item=> item.dataset.id==id)
    btn.disabled=true
    btn.innerHTML="in cart"
}

const showCart=()=>{
    let itemcart=""
    let amount=0
    let cartitems=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[];
    cartitems.map((item,index)=>{
        itemcart+=cart_render(item,index)
        amount+=item.amount*item.price
    })
    cart_bar.innerHTML=itemcart
    amountno.innerHTML=amount     
    if(cartitems.length==0){
        // carts.style.visibility="hidden"
        carts.classList.remove("show")
        carts.classList.add("hide")
    
    }
    else{
        // carts.style.visibility="visible"
        carts.classList.remove("hide")
    carts.classList.add("show")
    }
}
const cartdel=(id,index)=>{
    let cartitems=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[];
    let itemcart=cartitems.filter(item=> item.id!=id)
    localStorage.setItem("cart",JSON.stringify(itemcart))
    showCart()
    let btn = button.find(item=> item.dataset.id==id)
    btn.disabled=false
    btn.innerHTML="Add"
    
}
const cartIncrease=(id,index)=>{
    let cartitems=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[];
    let itemcart=cartitems.find(item=> item.id==id)
    console.log(itemcart)
    itemcart.amount=itemcart.amount+1
    localStorage.setItem("cart",JSON.stringify(cartitems))
    showCart()
}
const cartDecrease=(id,index)=>{
    let cartitems=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[];
    let itemcart=cartitems.find(item=> item.id==id)
    if(itemcart.amount==1){
        cartdel(id,index)
    }
    if(itemcart.amount>1)
    {
        itemcart.amount=itemcart.amount-1
        localStorage.setItem("cart",JSON.stringify(cartitems))
        showCart()
    }
    
}