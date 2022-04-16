$(document).ready(function(){
    renderCart()
})

function renderCart(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let html = ``
    html = `
        <i class="fa-solid fa-cart-shopping"></i> 
        <span class="cart-qty">${cart ? cart.length : 0}</span>`

    document.getElementsByClassName("cart")[0].innerHTML = html
}

function addToCart(id){
    // lấy danh sách giỏ hàng
    let cart = JSON.parse(localStorage.getItem("cart"))

    // lấy danh sách id trong giỏ hàng
    const idInCart = cart && cart.map(item => item.id)

    // lấy thông tin sản phẩm
    let product = list.filter((item => item.id == id))[0]

    // Nếu product đã tồn tại trong giỏ hàng => tăng số lượng lên 1
    if(idInCart && idInCart.includes(product.id)){
        alert("Đã cập nhật giỏ hàng")
        cart = cart.map((item, index) => {
            if(item.id == product.id){
                return {...item, qty: item.qty + 1}
            }else{
                return item
            }
        })
    }else{
        alert("đã thêm vào giỏ hàng")
        // kiểm tra giỏ hàng rỗng hay không.
        cart = cart ? [...cart, {...product, qty: 1}] : [{...product, qty: 1}]
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCart()
}