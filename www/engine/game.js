class Game
{
	constructor()
	{
		this.scenes = {};
		createScene('default',true);
		
		this.running = false;
	}
	
	createScene(name,active=false)
	{
		if (!(this.scenes.hasOwnProperty(name)))
		{
			this.scenes[name] = Scene();
		}
		
		if(active)
		{
			this.activeScene = name;
		}
	}
	
	deleteScene(name)
	{
		if(this.scenes.hasOwnProperty(name))
		{
			delete this.scenes[name];
		}
	}
	
	run()
	{
		this.running = true;
	}
	
	stop()
	{
		this.running = false;
	}
	
	step(render=true)
	{
		if(running)
		{
			this.scene[activeScene].step(render);
		}
	}
}

class Scene
{
	constructor()
	{
		this.objects = {};
	}
	
	step(render=true)
	{
		for (object in this.objects)
		{
			if(objects.hasOwnProperty(object) && object.hasOwnProperty('active') && object.active == true)
			{
				if(object.hasOwnProperty('step'))
				{
					object.step();
				}
				
				if(render && object.hasOwnProperty('render'))
				{
					object.render();
				}
			}
		}
	}
}