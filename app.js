
function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(51);

    // Create iteration slider:
    iterationSlider = createSlider(1, 8, 1, 1);
    iterationSlider.position(windowWidth / 2, (5/6) * windowHeight).center('horizontal');
    //Create size slider:


}

function draw()
{
    background(51);
    textSize(20);
    textStyle(NORMAL);
    textAlign(CENTER);
    fill('white');
    text('Iterations: ' + iterationSlider.value(), windowWidth / 2, (4.95/6) * windowHeight);

    noFill();
    stroke('white');
    let size = width / 3;
    iterateTriangle(width / 2 - size / 2, height / 2 + size / 3, size, iterationSlider.value())
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
    iterationSlider.remove();
    setup();
}

function iterateTriangle(x, y, size, iterations)
{
    iterations--;
    if (iterations >= 0)
    {
        console.log(iterations)
        triangle(x, y, x + size, y, x + size / 2, y - size / 3 * 2.6);
        
        //Left Triangle:
        iterateTriangle(x, y, size / 2, iterations);

        //Right Triangle:
        iterateTriangle(x + size / 2, y, size / 2, iterations);
        //Top Triangle:
        iterateTriangle(x + size / 4, y - size / 2.3, size / 2, iterations);
    }
}
