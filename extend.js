function extend (target) {
	var deep = false,
		objs = [].slice.call(arguments, 1),
		obj,
		asArray = '[object Array]',
		asObject = '[object Object]',
		type,
		toStr = Object.prototype.toString;

	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1];
		objs.shift();
	}

	for (var i = 0, len = objs.length; i < len; i++) {
		obj = objs[i];
		for (var prop in obj) {
			type = toStr.call(obj[prop]);
			if (deep && (type === asArray || type === asObject)) {
				extend(deep, target[prop] = type === asArray ? [] : {}, obj[prop]);	
			} else {
				target[prop] = obj[prop];	
			}
		}
	}

	return target;
}