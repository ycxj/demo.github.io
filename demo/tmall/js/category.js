var dataName,
	categoryClass = sessionStorage.getItem("categoryClass"),
 	productImg = document.getElementsByClassName("p-img"),
	productPrice = document.getElementsByClassName("p-price"),
	productTitle = document.getElementsByClassName("p-title"),
	productVolume = document.getElementsByClassName("volume"),
	productComment = document.getElementsByClassName("comment"),
	productNum = document.getElementsByClassName("product");
	productShopName = document.getElementsByClassName("productShop-name");
(function checkClass(){
	switch(categoryClass){
		case "womenDress":
		dataName = womenDress;
		break;
		case "underwear":
		dataName = underwear;
		break;
	}
	setContent();
})();

function setContent(){
	console.log(dataName);
	for(var i = 0;i<dataName.length;i++){
		productImg[i].src = "images/product/" + categoryClass + "/" + dataName[i].img;
		productImg[i].setAttribute("data-num",i);
		productPrice[i].innerHTML = dataName[i].price;
		productTitle[i].innerHTML = dataName[i].title;
		productTitle[i].setAttribute("data-num",i);
		productVolume[i].innerHTML = dataName[i].volume;
		productComment[i].innerHTML = dataName[i].comment;
		productShopName[i].setAttribute("data-num",i);
	}
}

window.onload = function(){
	var list = document.getElementById("category-list");
	list.onclick = function(ev){
		var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
		if(target.nodeName.toLocaleLowerCase() == 'a'||'img'){
			var dataNum = target.getAttribute("data-num");
			sessionStorage.setItem("productNum",dataNum);
		}
	}
}

	
	
