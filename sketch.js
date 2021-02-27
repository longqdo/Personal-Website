function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0)
    canvas.style('z-index', '-1')
    canvas.style('align-content', 'center')
    background(255);
    noStroke();
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}  

function draw() {
    var offset = 70;
    background(255);
    from1 = color(180, 0, 0, 0.14 * 255);
    to1 = color(0, 0, 180, 0.14 * 255);
    c1 = lerpColor(from1, to1, 0.33);
    c2 = lerpColor(from1, to1, 0.63);

    from2 = color(134, 169 ,110, 0.25 * 255);
    to2 = color(255, 180, 57, 0.14 * 255);
    c3 = lerpColor(from2, to2, 0.40);
    c4 = lerpColor(from2, to2, 0.75);


    for (let i = 0; i < 15; i++) {
      fill(from1);
      quad(
        random(-offset, 1*(windowWidth/8)), random(height),
        random(-offset, 1*(windowWidth/8)), random(height),
        random(-offset, 1*(windowWidth/8)), random(height),
        random(-offset, 1*(windowWidth/8)), random(height)
      );
      fill(c1);
      quad(
        random(1*(windowWidth/8)-offset, 2*(windowWidth/8)), random(height),
        random(1*(windowWidth/8)-offset, 2*(windowWidth/8)), random(height),
        random(1*(windowWidth/8)-offset, 2*(windowWidth/8)), random(height),
        random(1*(windowWidth/8)-offset, 2*(windowWidth/8)), random(height)
      );
      fill(c2);
      quad(
        random(2*(windowWidth/8)-offset, 3*(windowWidth/8)), random(height),
        random(2*(windowWidth/8)-offset, 3*(windowWidth/8)), random(height),
        random(2*(windowWidth/8)-offset, 3*(windowWidth/8)), random(height),
        random(2*(windowWidth/8)-offset, 3*(windowWidth/8)), random(height)
      );
      fill(to1);
      quad(
        random(3*(windowWidth/8)-offset, 4*(windowWidth/8)), random(height),
        random(3*(windowWidth/8)-offset, 4*(windowWidth/8)), random(height),
        random(3*(windowWidth/8)-offset, 4*(windowWidth/8)), random(height),
        random(3*(windowWidth/8)-offset, 4*(windowWidth/8)), random(height)
      );
    /* right side ================================== */
      fill(from2);
      quad(
        random(4*(windowWidth/8)-offset, 5*(windowWidth/8)), random(height),
        random(4*(windowWidth/8)-offset, 5*(windowWidth/8)), random(height),
        random(4*(windowWidth/8)-offset, 5*(windowWidth/8)), random(height),
        random(4*(windowWidth/8)-offset, 5*(windowWidth/8)), random(height)
      );
      fill(c3);
      quad(
        random(5*(windowWidth/8)-offset, 6*(windowWidth/8)), random(height),
        random(5*(windowWidth/8)-offset, 6*(windowWidth/8)), random(height),
        random(5*(windowWidth/8)-offset, 6*(windowWidth/8)), random(height),
        random(5*(windowWidth/8)-offset, 6*(windowWidth/8)), random(height)
      );
      fill(c4);
      quad(
        random(6*(windowWidth/8)-offset, 7*(windowWidth/8)), random(height),
        random(6*(windowWidth/8)-offset, 7*(windowWidth/8)), random(height),
        random(6*(windowWidth/8)-offset, 7*(windowWidth/8)), random(height),
        random(6*(windowWidth/8)-offset, 7*(windowWidth/8)), random(height)
      );
      fill(to2);
      quad(
        random(7*(windowWidth/8)-offset, 8*(windowWidth/8)), random(height),
        random(7*(windowWidth/8)-offset, 8*(windowWidth/8)), random(height),
        random(7*(windowWidth/8)-offset, 8*(windowWidth/8)), random(height),
        random(7*(windowWidth/8)-offset, 8*(windowWidth/8)), random(height)
      );
    }
    frameRate(1);
  }
  