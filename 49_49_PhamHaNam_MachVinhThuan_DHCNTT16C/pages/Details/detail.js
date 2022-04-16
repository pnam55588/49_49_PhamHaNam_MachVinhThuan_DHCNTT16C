


let item = JSON.parse(localStorage.getItem("detail"))
$(".row").append(`
    <div class = "col-lg-5 col-md-5 col-sm-6" > 
        <div style="background-image: url(${item.img})" class="detail__img fit-img-contain"></div>
    </div>
    <div class="col-lg-7 col-md-7 col-sm-6">
        <h4 class="box-title mt-5">${item.name}</h4>
        <p>${item.info}</p>
        <h2 class="mt-5">
            ${formatVND(item.price)}
        </h2>
        <button class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart" onclick="addToCart(${item.id})">
            <i class="fa fa-shopping-cart"></i>
            Add to cart
        </button>
        <a href="../Buy/buy.html" class="btn btn-primary btn-rounded" onclick="handleBuy(${item.id}})">Buy Now</a>
    </div>
   
`)

function handleBuy(id){
    addToCart(id)

}