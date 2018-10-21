class GameObject
{
	constructor(
		name,
		sprite,
		main = function(){},
		onCreate = function(){},
		onDestroy = function(){},
		onCollision = function(other){}
	)
	{
		this.name = name;
		this.sprite = sprite;
		this.properties = {};
		this.animations = {};
		this.onCreate = onCreate;
		this.onDestroy = onDestroy;
		this.onCollision = onCollision;
	}
	
	addNewAnimationState(name,texcoords)
	{
		animations[name]=texcoords;
	}
	
	getAnimationState(name='default')
	{
		if (name in animations)
			return animations[name];
		return null;
	}
}

class Instance
{
	constructor(name,object)
	{
		this.object = object;
		this.properties = object.properties;
		
		this.main = object.main;
		this.onCreate = object.onCreate;
		this.onDestroy = object.onDestroy;
		this.onCollision = object.onCollision;
		
		reset();
	}
	
	setAnimationState(name)
	{
		this.frames = this.object.getAnimation(name);
		this.activeFrame = 0;
	}
	
	resetAnimationState()
	{
		
	}
	
	reset()
	{
		this.object = object;
		this.properties = object.data;
		
		this.animation = 'default';
		
		this.frames = getDefaultAnimationState();
		
		if(!(this.frames))
			this.frames = [0]
		
		this.activeFrame = 0;
	}
}