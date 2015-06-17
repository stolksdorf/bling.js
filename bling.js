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

Node.prototype.hasClass = function(className){
	return this.className.indexOf(className) !== -1;
}
Node.prototype.addClass = function(className){
	if(!this.hasClass(className)) this.className += ' ' + className;
	return this;
}
Node.prototype.removeClass = function(className){
	if(this.hasClass(className)){
		var classNames = this.className.split(' ');
		var idx = classNames.indexOf(className);
		if(idx > -1) classNames.splice(idx, 1);
		this.className = classNames.join(' ');
	}
	return this;
}
