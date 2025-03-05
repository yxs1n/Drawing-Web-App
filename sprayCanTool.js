//spray can object literal
function sprayCanTool()
{
    this.name = 'sprayCanTool';
    this.icon = 'assets/sprayCan.jpg';

    //slider for the concentration of the spray can
    this.pSlider = createSlider(60, 400, 80);
    this.pSlider.position(420,1070);
    this.pSlider.hide();

    //slider for the spread of the spray can
    this.sSlider = createSlider(3, 50, 10);
    this.sSlider.position(365, 1120);
    this.sSlider.hide();
    this.points = 80;
    this.spread = 10;

    //text to show what each slider does
    this.pLabel = createDiv('Concentration:');
    this.pLabel.position(300, 1068);
    this.pLabel.style('color', 'White');
    this.pLabel.style('font-size', '20px');
    this.pLabel.hide();

    this.sLabel = createDiv('Spread:');
    this.sLabel.position(300, 1118);
    this.sLabel.style('color', 'White');
    this.sLabel.style('font-size', '20px');
    this.sLabel.hide();

    //makes it so these UI items only appear when the tool is selected
    this.activate = function()
    {
        this.pSlider.show();
        this.sSlider.show();
        this.sLabel.show();
        this.pLabel.show();
    }

    //makes it so these UI items disappear when the tool is unselected
    this.unselectTool = function()
    {
        this.pSlider.hide();
        this.sSlider.hide();
        this.pLabel.hide();
        this.sLabel.hide();
    }

    this.draw = function()
    {
        this.points = this.pSlider.value();
        this.spread = this.sSlider.value();
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed)
        {
            for(var i = 0; i < this.points; i++)
            {
                point(random(mouseX - this.spread, mouseX + this.spread), random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    }
}