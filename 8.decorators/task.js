function cachingDecoratorNew(func) {
	let cache = [];
	function wrapper(...args) {
		const hash = args.join(","); 
		let objectInCache = cache.find((item) => item.hash === hash); 
		if (objectInCache) { 
			console.log("Из кэша: " + objectInCache.value);
			return "Из кэша: " + objectInCache.value;
		}
		let result = func(...args); 
		cache.push({ "hash": hash, "value": result });
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}
function debounceDecoratorNew(func, ms) {
	let timeout;
	function wrapper(...args) {
		wrapper.allCount++;
		if (!timeout) {
			func.apply(this, args);
			wrapper.count++;
		}
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
		}, ms);
	}
	wrapper.allCount = 0;
	wrapper.count = 0;
	return wrapper;
}
