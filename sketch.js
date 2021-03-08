var bg;
var harry, harryIMG, voldy, voldyIMG;
var hFLASH, vFLASH, flash1IMG, flash2IMG; 
var die, whoosh1, whoosh2;
var harryHealth= 100;
var voldyHealth= 100;
var hDisarm, hShield, hStun, hHealing, hBurn;
var vDisarm, vStun, vKill;
var turn= 0;

function preload(){
  bg = loadImage("Background.jpg");
  harryIMG= loadImage("ClipartKey_77309.png")
  voldyIMG= loadImage("ClipartKey_2539150.png")
  flash1IMG= loadImage("Harry Flash.png");
  flash2IMG= loadImage("Voldemort FLash.png")
}

function setup() {
  createCanvas(1400, 650);
  harry=createSprite(1250, 500, 50, 50);
  harry.addImage(harryIMG)
  harry.scale= 0.15

  voldy=createSprite(100, 500, 50, 50);
  voldy.addImage(voldyIMG)
  voldy.scale= 0.30

  hFLASH= createSprite(1030,550,50,50);
  hFLASH.addImage(flash1IMG);
  hFLASH.scale= 2;
  hFLASH.visible= false;

  vFLASH= createSprite(280,500,50,50);
  vFLASH.addImage(flash2IMG);
  vFLASH.scale= 2;
  vFLASH.visible= false;

  hDisarm= createButton("Expelliarmus");
  hStun=  createButton("Stupefy");
  hShield=createButton("Protego");
  hHealing= createButton("Healing Potion");
  hBurn= createButton("Hurt Potion");
  hDisarm.position(1220, 100)
  hStun.position(1220, 130)
  hShield.position(1220, 160)
  hHealing.position(1220, 190)
  hBurn.position(1220, 220)
  hide();

}

function draw() {
  background(bg); 

  if (turn === 0){
    show();
    vFLASH.visible= false;

    hDisarm.mousePressed(()=>{
      console.log("Disarmed") ;
      hFLASH.visible= true;
      disarm(voldy);
      hide();
      if (frameCount===120){
      turn=1;
      }
       })

    hStun.mousePressed(()=>{
        console.log("Stunned") ;
        hFLASH.visible= true;
        stun(voldy);
        hide();
        if (frameCount===120){
          turn=1;
          }
         })

    hShield.mousePressed(()=>{
          console.log("Protected") ;
          hFLASH.visible= true;
          hide();
          if (frameCount===120){
            turn=1;
            }
           })
    hHealing.mousePressed(()=>{
            console.log("Healed") ;
            heal(voldy)
            hide();
            if (frameCount===120){
              turn=1;
              }
            //hFLASH.visible= true;
            
             })
    hBurn.mousePressed(()=>{
              console.log("Opponent Hurt") ;
              hurt(voldy);
              hide();
              if (frameCount===120){
                turn=1;
                }
              //hFLASH.visible= true;
               })
          
  }

  if (turn === 1){
    hDisarm.hide()
    hStun.hide()
    hShield.hide()
    hHealing.hide()
    hBurn.hide()
    hFLASH.visible= false;

    vSpellCast();
    if (frameCount===120){
      turn=0;
      }

  }

  drawSprites();
  textSize(24)
  fill("white")
  textFont("Courier New")
  text("Harry's Health: "+ harryHealth, 1100, 50);
  text("Voldemort's Health: "+ voldyHealth, 50, 50);

  
}

function disarm(person){
  if (person === harry){
    harryHealth= harryHealth-20;

  }

  if (person === voldy){
    voldyHealth= voldyHealth-20;
  }
}

function stun(person){
if (person === harry){
  harryHealth= harryHealth-15;
}

if (person === voldy){
  voldyHealth= voldyHealth-15;
}
}


function kill(person){
if (person === harry){
  harryHealth= harryHealth-30;
}

if (person === voldy){
  voldyHealth= voldyHealth-15;
}
}

function heal(person){
  if (person === voldy){
    harryHealth= harryHealth+30;
  }
  
  if (person === harry){
    voldyHealth= voldyHealth+15;
  }
}

function hurt(person){
  if (person === harry){
    harryHealth= harryHealth-25;
  }
  
  if (person === voldy){
    voldyHealth= voldyHealth-25;
  }
}

function hide(){
  hDisarm.hide()
  hStun.hide()
  hShield.hide()
  hHealing.hide()
  hBurn.hide()
}

function show(){
  hDisarm.show()
    hStun.show()
    hShield.show()
    hHealing.show()
    hBurn.show()
}

function vSpellCast(){
  var rand = Math.round(random(1,5));
  //console.log(rand);
  if (rand===1){
    disarm(harry);
    vFLASH.visible= true;
  }

  if (rand===2){
    stun(harry);
    vFLASH.visible= true;
  }

  if (rand===3){
    disarm(harry);
    vFLASH.visible= true;
  }

  if (rand===4){
    stun(harry);
    vFLASH.visible= true;
  }

  if (rand===5){
    kill(harry);
    vFLASH.visible= true;
  }

}

