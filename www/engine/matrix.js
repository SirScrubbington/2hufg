class Mat3
{
	constructor()
	{
		this.matrix = 
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
	}
	multiply(m)
	{
		var output = new Mat3();
		output.matrix =
		[
			this.matrix[Mat3.M00] * m.matrix[Mat3.M00] + this.matrix[Mat3.M10] * m.matrix[Mat3.M01] + this.matrix[Mat3.M20] * m.matrix[Mat3.M02],
			this.matrix[Mat3.M01] * m.matrix[Mat3.M00] + this.matrix[Mat3.M11] * m.matrix[Mat3.M01] + this.matrix[Mat3.M21] * m.matrix[Mat3.M02],
			this.matrix[Mat3.M02] * m.matrix[Mat3.M00] + this.matrix[Mat3.M12] * m.matrix[Mat3.M01] + this.matrix[Mat3.M22] * m.matrix[Mat3.M02],
			
			this.matrix[Mat3.M00] * m.matrix[Mat3.M10] + this.matrix[Mat3.M10] * m.matrix[Mat3.M11] + this.matrix[Mat3.M20] * m.matrix[Mat3.M12],
			this.matrix[Mat3.M01] * m.matrix[Mat3.M10] + this.matrix[Mat3.M11] * m.matrix[Mat3.M11] + this.matrix[Mat3.M21] * m.matrix[Mat3.M12],
			this.matrix[Mat3.M02] * m.matrix[Mat3.M10] + this.matrix[Mat3.M12] * m.matrix[Mat3.M11] + this.matrix[Mat3.M22] * m.matrix[Mat3.M12],
			
			this.matrix[Mat3.M00] * m.matrix[Mat3.M20] + this.matrix[Mat3.M10] * m.matrix[Mat3.M21] + this.matrix[Mat3.M20] * m.matrix[Mat3.M22],
			this.matrix[Mat3.M01] * m.matrix[Mat3.M20] + this.matrix[Mat3.M11] * m.matrix[Mat3.M21] + this.matrix[Mat3.M21] * m.matrix[Mat3.M22],
			this.matrix[Mat3.M02] * m.matrix[Mat3.M20] + this.matrix[Mat3.M12] * m.matrix[Mat3.M21] + this.matrix[Mat3.M22] * m.matrix[Mat3.M22]
		];
		return output;
	}
	transition(x,y)
	{
		var output = new Mat3();
		
		output.matrix = 
		[
			this.matrix[Mat3.M00],
			this.matrix[Mat3.M01],
			this.matrix[Mat3.M02],
			
			this.matrix[Mat3.M10],
			this.matrix[Mat3.M11],
			this.matrix[Mat3.M12],
			
			x * this.matrix[Mat3.M00] + y * this.matrix[Mat3.M10] + this.matrix[Mat3.M20],
			x * this.matrix[Mat3.M01] + y * this.matrix[Mat3.M11] + this.matrix[Mat3.M21],
			x * this.matrix[Mat3.M02] + y * this.matrix[Mat3.M12] + this.matrix[Mat3.M22]
		];
		
		return output;
	}
	scale(x,y)
	{
		var output = new Mat3();
		output.matrix =
		[
			this.matrix[Mat3.M00] * x,
			this.matrix[Mat3.M01] * x, 
			this.matrix[Mat3.M02] * x,
			
			this.matrix[Mat3.M10] * y,
			this.matrix[Mat3.M11] * y,
			this.matrix[Mat3.M12] * y,
			
			this.matrix[Mat3.M20],
			this.matrix[Mat3.M21],
			this.matrix[Mat3.M22]
		];
		return output;
	}
	getFloatArray()
	{
		return new Float32Array(this.matrix);
	}
}

Mat3.M00 = 0;
Mat3.M01 = 1;
Mat3.M02 = 2;
Mat3.M10 = 3;
Mat3.M11 = 4;
Mat3.M12 = 5;
Mat3.M20 = 6;
Mat3.M21 = 7;
Mat3.M22 = 8;