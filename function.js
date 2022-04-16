var sales_div = document.getElementById("btn btn-primary");
function buy(){
sales.innerHTML = 'Спасибо за покупку! <input type="button" value="Отменить покупку" onclick="cancel()" />';
}
function cancel(){
sales.innerHTML = 'Купи меня! <input type="button" value="Купить" onclick="buy()" />';
}
