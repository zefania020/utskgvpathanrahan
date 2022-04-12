#version 330

uniform vec4 color1;
uniform vec4 color2;
uniform vec4 color3;
uniform vec4 color4;
uniform vec4 color5;
uniform vec4 color6;
uniform vec4 color7;
uniform vec4 color8;


layout (location = 0) out vec4 color;
varying vec2 vPos;

void main()
{
	if (vPos.x < 0.0 && vPos.y <= vPos.x)
	{
		color = color1;
	}
	
	else if (vPos.y < 0.0 && vPos.x <= vPos.y)
	{
		color = color2;
	}

	else if (vPos.x < 0.0 && -vPos.x <= vPos.y)
	{
		color = color3;
	}

	else if (vPos.y < 0.0 && -vPos.x <= vPos.y)
	{
		color = color4;
	}

	else if (vPos.x > 0.0 && vPos.x >= vPos.y)
	{
		color = color5;
	}

	else if(vPos.y < 0.0 && -vPos.x >= -0.5 + vPos.y )
	{
		color = color6;
	}

	else
	{
		color = color8;
	}

}
