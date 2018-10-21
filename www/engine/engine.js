function loop()
{
	window.game.update();
	requestAnimationFrame(loop);
}

class Game
{
	constructor(GameClass = null)
	{
		this.canvasElement = document.createElement('canvas');
		
		this.worldSpaceMatrix = new Mat3;
		
		this.gl = this.canvasElement.getContext('webgl2');
		this.gl.clearColor(0.4,0.4,1.0,0.0);		
		
		document.body.appendChild(this.canvasElement);
		
		const vs = document.getElementById('vs01').innerHTML;
		const fs = document.getElementById('fs01').innerHTML;

		this.game = GameClass;
		
		// just for testing!! abstract this!
		
		/*
		//this.sprite1 = new Sprite(this.gl,"img/reimu.png",vs,fs,{width:32,height:52});
		//this.sprite2 = new Sprite(this.gl,"img/marisa.png",vs,fs,{width:32,height:48});
		
		this.sprite1Pos = new Point();
		//this.sprite2Pos = new Point();
		
		this.sprite1Frame = new Point();
		//this.sprite2Frame = new Point();
		*/
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
			game.step();
			render(game.gameObjects);
		}
		
		this.gl.flush();
	}
	
	render(objects)
	{
		for (var object in objects)
		{
			if(objects.hasOwnProperty(object) && object.active == true)
			{
				
			}
		}
	}
}