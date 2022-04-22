function formatVND(price){
    return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
}


const listItem = list.map(item => {
    return `
    <option value="${item.id}">${item.name}</option>    
    `
}).join('')

$('#productList').append(listItem)

$('#search-btn').click(function(){
    var productList = document.getElementById("productList");
    var id = productList.options[productList.selectedIndex].value
    console.log(id)
    getDetail(id)
    
})