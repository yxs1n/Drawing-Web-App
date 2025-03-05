function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//slider to control thickness of the pen
	this.tSlider = createSlider(1, 10, 1);
	this.tSlider.position(390,1070);
	this.tSlider.hide();

	//label to show what slider does
	this.tLabel = createDiv('Thickness:');
	this.tLabel.position(300, 1068);
	this.tLabel.style('font-size', '20px');
	this.tLabel.style('color', 'White');
	this.tLabel.hide();

	this.unselectTool = function()
	{
		strokeWeight(1);
		this.tSlider.hide();
		this.tLabel.hide();
	}

	this.activate = function()
	{
		this.tSlider.show();
		this.tLabel.show();
	}

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//The loadpixels function makes sure that every line that is drawn isn't
				//removed when a new line is drawn.
				loadPixels();
			}

			else{
				//The updatepixels function prevents multiple lines from being drawn
				//as the user moves the mouse and only draws a single line ones where 
				//the user stops pressing the mouse.
				updatePixels();
				strokeWeight(this.tSlider.value());
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
