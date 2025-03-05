function Eraser(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";
    
	//slider to control the size of the eraser
	this.eSlider = createSlider(5, 70, 5);
	this.eSlider.position(350, 1070);
	this.eSlider.hide(); 

	//label to show what the slider is for
	this.eLabel = createDiv('Size:');
	this.eLabel.position(305, 1068);
	this.eLabel.style('font-size', '20px');
	this.eLabel.style('color', 'White');
	this.eLabel.hide();
	

	//to erase we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started erasing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	//makes it so these UI items disappear when tool is unselected
	this.unselectTool = function()
	{
		stroke(colourP.selectedColour);
		this.eSlider.hide();
		this.eLabel.hide();
	}

	//makes it so these UI Items appear when tool is selected
	this.activate = function()
	{
		this.eSlider.show();
		this.eLabel.show();
	}

	this.draw = function(){

		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can erase from 
			//there to the current mouse location
			else{
                fill(255);
				stroke(255);
				circle(mouseX, mouseY, this.eSlider.value());
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	
}