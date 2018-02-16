window.onload=function(){

	inp = document.getElementsByClassName("inp");

	for(i=0;i<inp.length;i++)
		inputs = document.getElementsByTagName("input")

	render.addEventListener('click',update);

	function update(){
		
		largura = canvasx.value;
		altura = canvasy.value;

		myCanvas.width = largura;
		myCanvas.height = altura;

		n = numeros.value;
		m = n.match(/\d{6}/g);

		canvas = document.getElementById("myCanvas");
		ctx = canvas.getContext("2d");

		q = 0;
		fx = 0;
		fy = 0;
		tp = parseInt(tpixel.value);

		for(i=0;i<m.length;i++){
			
			ctx.fillStyle="#"+m[i];
			ctx.fillRect((fx++)*tp,fy*tp,tp,tp)
			
			if(fx*tp%parseInt(largura) == 0){
				fx=0
				fy++
			}
		}
	}
}

window.onkeyup=function(e){
	if(e.key == "Enter")
		render.click()
}
