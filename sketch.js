var Azul;
var Red;
var points=1
function preload () {
    Azul=loadImage ("Sprites/ballBlue.png")
    Red=loadImage ("Sprites/ballGrey.png")
}



function setup() {
    createCanvas (800,600)
    Raquete = createSprite(350, 585, 50, 20);
    Raquete.shapeColor = color(255, 0, 0);
 greenGroup=new Group ()
 redGroup=new Group ()
}

function draw() {
    background ("black")
    if (keyDown("a")) {
        Raquete.position.x -= 10;
      }
      if (keyDown("d")) {
        Raquete.position.x += 10;
      }
drawSprites ()    
redBalls()
greenBalls ()
fill ("red")
textSize (25)
text ("Pontos: "+points,50,50)
redGroup.forEach (redB=>{
    if (Raquete.overlap(redB)){
        redB.remove ()
        points--
    }
})
greenGroup.forEach (greenB=>{
    if (Raquete.overlap(greenB)){
        greenB.remove ()
        points++
    }
})
}

function greenBalls() {
    if (frameCount % 40 === 0) {
      for (let i = 0; i < 2; i++) { //Quantas bolas verdes serão criadas quando o if for verdadeiro.
        let size = random(10, 30);
        let greenB = createSprite(random(0, 780), 0, size, size);
        greenB.addImage (Azul)
        greenB.shapeColor = color(0, random(100, 255), 0);
        greenB.velocityY = random(3, 12);
        greenB.lifetime = 500;
        greenGroup.add(greenB);
      }
    }
  }
  
  function redBalls() {
    if (frameCount % 20 === 3) {
      for (let i = 0; i < 2; i++) { 
        let size = random(10, 30);
        let redB = createSprite(random(0, 780), 0, size, size);
        redB.addImage (Red)
        redB.shapeColor = color(0, random(100, 255), 0);
        redB.velocityY = random(5, 15);
        redB.lifetime = 500;
        redGroup.add(redB);
      }
    }
  }
  