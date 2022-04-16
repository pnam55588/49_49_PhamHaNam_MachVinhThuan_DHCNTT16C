
function renderList(){
    const listLoa = list.map(function(item){
            if(item.loai =="loa")
                return `
                    <div class="card">
                        <a href="../Details/detail.html" onclick="getDetail(${item.id})">
                            <img class="card-img-top" src=${item.img} alt="Card image cap">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${formatVND(item.price)}</p>
                            <div class="card__button d-flex justify-content-between">
                                <a  class="btn btn-danger w-50" onclick="addToCart(${item.id})">
                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                </a>
                                <a  href="../Details/detail.html" class="btn btn-primary  w-50" onclick="getDetail(${item.id})">Buy</a>
                            </div>
                        </div>
                    </div>`
    }).join('')
    const listTaiNghe = list.map(function(item){
            if(item.loai =="tai nghe")
                return `
                    <div class="card">
                        <a href="../Details/detail.html" onclick="getDetail(${item.id})">
                            <img class="card-img-top" src=${item.img} alt="Card image cap">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${formatVND(item.price)}</p>
                            <div class="card__button d-flex justify-content-between">
                                <a  class="btn btn-danger w-50" onclick="addToCart(${item.id})">
                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                </a>
                                <a  href="../Details/detail.html" class="btn btn-primary  w-50" onclick="getDetail(${item.id})">Buy</a>
                            </div>
                        </div>
                    </div>`
    }).join('')
    $('#loa').click(function(){

        $(' #list__container').empty()
        $(' #list__container').append(listLoa)

    })
    $('#tai').click(function(){
        $(' #list__container').empty()
        $(' #list__container').append(listTaiNghe)
    })
}
    
renderList()