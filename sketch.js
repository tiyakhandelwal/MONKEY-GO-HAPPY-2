var banana,bananaimage,obstacle,obstacleimage,obstaclegroup,ground,backimage;
var score;
var playes_running
function preload(){
  backimage = loadImage("jungle.jpg");
  
  player_running = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage("banana.png");
  
  obstacleimage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  ground = createSprite (200,200,10,10);
}

function draw() {
  background(220);
}