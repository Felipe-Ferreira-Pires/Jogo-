var Azul;
var Red;
var Blue;
var points=1
var iniciar_tempo
var tempo_jogo
var Game_State="Start"
//variaveis acima ficam de modo 'global' basicamente funcionam em qlqr função
function preload () {
    Azul=loadImage ("Sprites/ballBlue.png")
    Red=loadImage ("Sprites/ballGrey.png")
    Blue=loadImage ("Sprites/planet00.png")
} // função acima serve para exportar imagens das pastas para o jogo



function setup() {
    createCanvas (800,600)
    Raquete = createSprite(350, 585, 50, 20);
    Raquete.shapeColor = color(255, 0, 0);
    greenGroup=new Group ()
    redGroup=new Group ()
    blueGroup=new Group ()
    Edges=createEdgeSprites ()
    iniciar_tempo=millis ()
} // todos os comandos acima produzem algo que aparece no setup


function draw() {

    background ("black")
    if (Game_State=="Start"){
     textSize (25)
      fill ("grey")
      text ("Aperte o espaço para iniciar e pegue as bolas azuis: " ,100,300)
      if  (keyDown (" ")) {
        Game_State="Play"
      }
    } else if (Game_State=="Play"){
    

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
  
    

      fill ("blue")
      textSize (20)
      text ("Tempo: "+tempo_jogo,50,100)
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
 blueGroup.forEach (BlueB=>{
  if (Raquete.overlap(BlueB)){
    BlueB.remove ()
    points+=3
  }
 })
    Raquete.bounce (Edges)

    tempo_jogo=Math.floor ((millis()-iniciar_tempo)/1000)

    blueBalls ()
    if (points==0) {
      Game_State="Game_Over"
    }

    } else if (Game_State=="Game_Over"){
      
      textSize (25)
      fill ("grey")
     text ("Você perdeu. Clique espaço para reiniciar",185,300)
      text ("Você sobreviveu por: "+tempo_jogo + " Segundos",200,350)
     if (keyDown (" ")) {
      Game_State="Play"
      tempo_jogo=0
      greenGroup.removeSprites ()
      redGroup.removeSprites ()
      blueGroup.removeSprites ()
      points=1
     }

    }
    
   
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
  
function blueBalls () {
  if (frameCount % 75 === 1) {
      let size = random (10,30);
      let BlueB=createSprite(random(0,780),0,size,size);
      BlueB.addImage (Blue)
      BlueB.scale=0.03
      BlueB.velocityY = random (10,15)
      BlueB.lifetime = 500;
      blueGroup.add(BlueB)
    }
  


}
