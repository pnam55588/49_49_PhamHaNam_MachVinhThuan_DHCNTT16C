function renderBuying(){
    let html = JSON.parse(localStorage.getItem("cart"))?.map(item => {
        return `
        <div class="buying__item">
            <div class="item__img" style="background-image: url(${item.img});">

            </div>
            <div class="item__detail">
                <div class="item__detail-name font-weight-bold">
                    ${item.name}
                </div>
                <div class="item__detail-price">
                    ${formatVND(item.price * item.qty)} Đ
                </div>
                <div class="item__detail-qty">
                    <button class="btn btn-primary" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="btn btn-primary" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
        `
    }).join('')
    document.getElementsByClassName('list__buying')[0].innerHTML = html ? html : "nothing in cart"
}

function updateQty(id, number){
    let cart = JSON.parse(localStorage.getItem("cart"))

    cart = cart.map(item => {
        if(item.id == id){
            return {...item, qty: item.qty + number < 0 ? 0 : item.qty + number}
        }
        else{
            return item
        }
    })
    localStorage.setItem("cart", JSON.stringify(cart))
    renderBuying()
    renderTotal()
}

function renderTotal(){
    const total = JSON.parse(localStorage.getItem("cart"))?.reduce((total, current) => {
        return total = total + current.qty*current.price
    }, 0)
    document.getElementsByClassName('total')[0].innerHTML = formatVND(total ? total : 0)
}

function payment(){
    const account = JSON.parse(localStorage.getItem("account"))
    if(account){
        localStorage.removeItem("cart")
        const timeId = setTimeout(() => {
            alert("Mua hàng thành công")
        }, 3000)
        
    }else{
        alert("bạn phải đăng nhập để mua")
    }
    
}

renderTotal()
renderBuying()