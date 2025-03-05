function HighlighterTool(){
	//set an icon and a name for the object
	this.icon = "assets/highlighter.jpg";
	this.name = "highlighter";

	//slider to control thickness of the highlighter
	this.tSlider = createSlider(10, 30, 10);
	this.tSlider.position(390,1070);
	this.tSlider.hide();

	//label to show what slider does
	this.tLabel = createDiv('Thickness:');
	this.tLabel.position(300, 1068);
	this.tLabel.style('font-size', '20px');
	this.tLabel.style('color', 'White');
	this.tLabel.hide();

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.unselectTool = function()
	{
		strokeWeight(1);
		this.tSlider.hide();
		this.tLabel.hide();
		stroke(colourP.selectedColour);
		blendMode(BLEND);
	}

	this.activate = function()
	{
		this.tSlider.show();
		this.tLabel.show();
	}

	this.draw = function(){
		//burn blendmode increases contrast between the darker colours so you can see what is being highlighted
        blendMode(BURN);
        stroke(255, 251, 0, 80);
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				//strokeWeight(this.tSlider.value());
                strokeWeight(this.tSlider.value());
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}