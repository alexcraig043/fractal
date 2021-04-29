function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(51);
    noFill();
    stroke(255);

    iterationSlider = createSlider(1, 10, 1, 1);
    iterationSlider.position(width / 2 - 60, (5/6) * height);
    iterationSlider.style('width', '10000');
 
    var size = width / 3;
    noFill();
    iterateTriangle(width / 2 - size / 2, height / 2 + size / 3, size);
    
    function iterateTriangle(x, y, size)
    {
        if (size > 5) 
        {
            triangle(x, y, x + size, y, x + size / 2, y - size / 3 * 2.6);
            
            //Left Triangle:
            iterateTriangle(x, y, size / 2);
    
            //Right Triangle:
            iterateTriangle(x + size / 2, y, size / 2);
    
            //Top Triangle:
            iterateTriangle(x + size / 4, y - size / 2.3, size / 2);
        }
    }
}
