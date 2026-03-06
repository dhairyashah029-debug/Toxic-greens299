function scrollOrder(){

document.getElementById("order").scrollIntoView();

}

function sendOrder(){

var name=document.getElementById("name").value;

var area=document.getElementById("area").value;

var product=document.getElementById("product").value;

var qty=document.getElementById("qty").value;

var number="91XXXXXXXXXX";

var message="Hello Toxic Greens!%0AName:"+name+"%0AArea:"+area+"%0AProduct:"+product+"%0AQuantity:"+qty+"g";

var url="https://wa.me/"+number+"?text="+message;

window.open(url,'_blank');

}
