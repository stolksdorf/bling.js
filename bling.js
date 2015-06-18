/* bling.js */
window.$ = document.querySelectorAll.bind(document)

Node.prototype.on = function(name, fn){
	this.addEventListener(name, fn)
	return this;
};

Node.prototype.find = function(query){
	return this.querySelectorAll(query);
	return this;
};


NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn){
	this.forEach(function(elem, i){
		elem.on(name, fn)
	})
	return this;
};

//Classes
Node.prototype.addClass = function(cn){
	this.classList.add(cn);
	return this;
}
Node.prototype.removeClass = function(cn){
	this.classList.remove(cn);
	return this;
}
Node.prototype.toggleClass = function(cn){
	this.classList.toggle(cn);
	return this;
}
Node.prototype.hasClass = function(cn){
	return this.classList.contains(cn);
}
