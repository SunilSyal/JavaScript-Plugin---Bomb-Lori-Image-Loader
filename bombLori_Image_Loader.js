/////////////////////////////////////////////////////////////
// JavaScript Document
// Bomb Lori - Image Loader Pluggin
// Created by : Â© Sunil Syal
// http://thetutorialhub.com/main/plugin-load-multiple-images/
// Date : Feb 03, 2013
// License : You can use it for commercial purpose only if you 
// keep the description intact.
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// How to use it
// Include the JS file in your html file.
// Download jQuery library and include in your html file
// Create an array of div elements where you want to load images. (divArr)
// Create another array which includes path of images.(imageArr)(Both arrays should have same length)
// Call the following command.
// var imageObj = new BL_ImageLoader(divArr,imageArr);
//------------------------------------------------------------//
// Definition of class BL_ImageLoader
//------------------------------------------------------------//
function BL_ImageLoader(divArrRef, imageArrRef){
  this.loadedImageCount = 0;
	this.divArr = divArrRef;
	this.imageArr = imageArrRef;
	this.maxImageCount = imageArrRef.length;
	this.fnLoadImages();
}
//------------------------------------------------------------//
// Load multiple images
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnLoadImages = function() {
	var objRef = this;
    for (var i = 0; i < this.imageArr.length; i++) {
        var divRef = document.getElementById(this.divArr[i]);
        var img = new Image();
        img.id = i;
        img.onload = function () {
			objRef.loadedImageCount++;
            objRef.fnTakeAction(this.id);
        }
		this.fnClearDiv(divRef);
		divRef.appendChild(img);
		this.fnHideDiv(divRef);
		img.src = this.imageArr[i];	
    }
}
//------------------------------------------------------------//
// Create Image Element
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnCreateImageElement = function(divRef) {
	divRef.innerHTML = "<img/>"
}
//------------------------------------------------------------//
// Hide Div
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnHideDiv = function(divRef) {
	$(divRef).find("img").hide()
}
//------------------------------------------------------------//
// Show Div
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnShowDiv = function(divRef) {
	$(divRef).find("img").fadeIn()
}
//------------------------------------------------------------//
// Clear Div
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnClearDiv = function(divRef) {
	if ( divRef.hasChildNodes() ){
    	while ( divRef.childNodes.length >= 1 ){
        	divRef.removeChild( divRef.firstChild );       
    	} 
	}
}
//------------------------------------------------------------//
// Called when an image is loaded
//------------------------------------------------------------//
BL_ImageLoader.prototype.fnTakeAction = function(ID) {
    var divRef = document.getElementById(this.divArr[ID]);
	this.fnShowDiv(divRef);
    if (this.loadedImageCount >= this.maxImageCount) {
       // alert("All images loaded successfully.");
    }
}
