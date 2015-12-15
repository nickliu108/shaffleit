(function(){
	console.log('hello');

	var clicked = false;

	var container = document.getElementById('container');
	var ctx = container.getContext('2d');
	var offset = {
		left: container.offsetLeft,
		top: container.offsetTop
	};

	var originalX, originalY;

	var timeout = 50;
	var drawing;

	function keepDrawing(start, end, width, heigth){
		drawing = setInterval(function(){
			ctx.strokeRect(start, end, width, heigth);
		}, timeout);
	}

	function stopDrawing(){
		clearTimeout(drawing);
	}

	function click(e){
		console.log(e);
		if(clicked){
			clicked = false;
			container.removeEventListener('mousemove', move);
		} else {
			clicked = true;
			originalX = e.clientX-offset.left;
			originalY = e.clientY-offset.top
			container.addEventListener('mousemove', move);
		}
		
	}

	function clearAll(){
		ctx.clearRect(0, 0, container.width, container.height);
	}

	function move(e){
		console.log('move');
		clearAll();
		ctx.strokeRect(originalX, originalY, e.clientX-offset.left-originalX, e.clientY-offset.top-originalY);
		// ctx.strokeRect(start, end, width, heigth);
	}

	container.addEventListener('mousedown', click);

})();