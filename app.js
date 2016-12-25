(function(){
'use strict';


angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var ToBuy = this;
	

ToBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

ToBuy.moveToBoughtList=function(itemIndex){
ShoppingListCheckOffService.moveToBoughtList(itemIndex);
	}
}
 
 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

 function AlreadyBoughtController(ShoppingListCheckOffService){
 		var AlreadyBought = this;
AlreadyBought.boughtList=ShoppingListCheckOffService.getBoughtList();
}

//all the business model are handled by service
function ShoppingListCheckOffService(){
	var service=this;

	var toBuyList=[
{
 name:"Jeans",
 quantity:5
},
{
 name:"Perfume",
 quantity:6
},
{
 name:"Jacket",
 quantity:8
},
{
 name:"T-shirt",
 quantity:4
},
{
 name:"SunGlass",
 quantity:1
},
{
name:"Belt",
quantity:3
}
];

// initially bought item is empty.
var boughtList = [];

service.moveToBoughtList=function(itemIndex){
	boughtList.push(toBuyList[itemIndex]);
	toBuyList.splice(itemIndex,1);
}	


service.getBoughtList=function(){
	return boughtList;
	};

service.getToBuyList=function(){
    return toBuyList;
};

}

})();