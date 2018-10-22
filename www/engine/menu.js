class MenuItem
{
	
}

class Label extends MenuItem
{
	constructor(x, y, w=0, h=0, txt, fnt, fntSiz)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.txt = txt;
		this.fnt = fnt;
		this.fntSiz = fntSiz;
	}
}

class Button extends MenuItem
{
	constructor(x, y, w=0, h=0, txt, fnt, fntSiz, callback)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.txt = txt;
		this.fnt = fnt;
		this.fntSiz = fntSiz;
		
		this.callback = callback;
	}
}