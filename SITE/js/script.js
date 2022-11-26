let center = [62.032484431389896,129.72704231242415];

function init() {
	let map = new ymaps.Map('map-test', {
		center: [62.032484431389896,129.72704231242415],
		zoom: 17
	});
	map.geoObjects.add(placemark);
}

ymaps.ready(init);