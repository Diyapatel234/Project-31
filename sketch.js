
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;



function setup() {
	createCanvas(480, 800);
	

	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground = new Ground(0,795,1000,10);
    division1 = new Divisions(3,750,5,350);
	division2 = new Divisions(83,750,5,350);
	division3 = new Divisions(162,750,5,350);
	division4 = new Divisions(243,750,5,350);
	division5 = new Divisions(323,750,5,350);
	division6 = new Divisions(403,750,5,350);
	division7 = new Divisions(477,750,5,350);
    
	plinko1 = new Plinko(40,75,5)
	plinko2 = new Plinko(90,75,5)
	plinko3 = new Plinko(140,75,5)
	plinko4 = new Plinko(190,75,5)
	plinko5 = new Plinko(240,75,5)
	plinko6 = new Plinko(290,75,5)
	plinko7 = new Plinko(340,75,5)
	plinko8 = new Plinko(390,75,5)
	plinko9 = new Plinko(440,75,5)

	plinko10 = new Plinko(15,150,5)
	plinko11 = new Plinko(65,150,5)
	plinko12 = new Plinko(115,150,5)
	plinko13 = new Plinko(165,150,5)
	plinko14 = new Plinko(215,150,5)
	plinko15 = new Plinko(265,150,5)
	plinko16 = new Plinko(315,150,5)
	plinko17 = new Plinko(365,150,5)
	plinko18 = new Plinko(415,150,5)
	plinko19 = new Plinko(465,150,5)
    
	plinko20 = new Plinko(40,225,5)
	plinko21 = new Plinko(90,225,5)
	plinko22 = new Plinko(140,225,5)
	plinko23 = new Plinko(190,225,5)
	plinko24 = new Plinko(240,225,5)
	plinko25 = new Plinko(290,225,5)
	plinko26 = new Plinko(340,225,5)
	plinko27 = new Plinko(390,225,5)
	plinko28 = new Plinko(440,225,5)

	plinko29 = new Plinko(15,300,5)
	plinko30 = new Plinko(65,300,5)
	plinko31 = new Plinko(115,300,5)
	plinko32 = new Plinko(165,300,5)
	plinko33 = new Plinko(215,300,5)
	plinko34 = new Plinko(265,300,5)
	plinko35 = new Plinko(315,300,5)
	plinko36 = new Plinko(365,300,5)
	plinko37 = new Plinko(415,300,5)
	plinko38 = new Plinko(465,300,5)
	particle = new Particles(240,5,10);
	
	Engine.run(engine);
	
		
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 division5.display();
 division6.display();
 division7.display();

 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();

 plinko10.display();
 plinko11.display();
 plinko12.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();
 plinko17.display();
 plinko18.display();
 plinko19.display();
 
 plinko20.display();
 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display();
 plinko25.display();
 plinko26.display();
 plinko27.display();
 plinko28.display();
 
 plinko29.display();
 plinko30.display();
 plinko31.display();
 plinko32.display();
 plinko33.display();
 plinko34.display();
 plinko35.display();
 plinko36.display();
 plinko37.display();
 plinko38.display();
particle.display();
particleS(); 
drawSprites();

}

function particleS(){
	if(frameCount % 60 === 0){
		
		particles.push(new Particles(random(width/2-10, width/2+10),10,10));
	}
}
