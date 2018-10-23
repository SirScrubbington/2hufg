class GameEngine
{
	constructor(canvas = null)
	{
		this.canvasElement = document.createElement('canvas');
		
		if(canvas)
		{
			this.canvasElement.setAttribute("id",canvas);
		}
		
		this.worldSpaceMatrix = new Mat3;
		
		this.gl = this.canvasElement.getContext('webgl2');
		
		document.body.appendChild(this.canvasElement);
		
		const vs = document.getElementById('vs01').innerHTML;
		const fs = document.getElementById('fs01').innerHTML;
	}
	
	resize(x,y)
	{
		this.canvasElement.width = x;
		this.canvasElement.height = y;
		
		let wRatio = x / (y/240);
		this.worldSpaceMatrix = new Mat3().transition(-1,1).scale(2/wRatio/2,-2/240/2);
	}
	
	update()
	{
		this.gl.viewport(0,0,this.canvasElement.width,this.canvasElement.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		
		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
		
		// just for testing!! abstract this!
		
		/*
		 this.sprite1Frame.x = new Date() * 0.006 % 4;
		//this.sprite1Frame.y = new Date() * 0.002 % 2;
		
		 this.sprite1Pos.x = (this.sprite1Pos.x + 0.1) % 256;
		
		 this.sprite1.render(this.sprite1Pos,this.sprite1Frame);
		//this.sprite2.render(this.sprite2Pos,this.sprite2Frame);
		*/
		
		if (!(this.game == null))
		{
			game.step(true);
		}
		
		this.gl.flush();
	}
	
	clearColor(r = 0.0, g = 0.0, b = 0.0, a =0.0)
	{
		this.gl.clearColor(r,g,b,a);		
	}
}