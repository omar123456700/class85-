canvas=document.getElementById("canvas1");

ctx = canvas.getContext("2d");

rover_width = 100;

rover_height = 90;

background_image= "mars.jpg";

rover_image = "rover.png";

rover_x = 10; 

rover_y = 10;

function add() { background_img1= new Image(); 

background_img1.onload=uploadbackground;

 background_img1.src=background_image;

rover_img1= new Image();

rover_img1.onload=roverground;
 
rover_img1.src=rover_image;
}

function uploadbackground() { ctx.drawImage(background_img1 , 0 , 0,canvas.width,canvas.height);

 } function roverground() { ctx.drawImage(rover_img1 , rover_x , rover_y,rover_width,rover_height);

 }

 window.addEventListener("keydown",mykeydown);

 function mykeydown(e){

     keypress=e.keyCode;

     if(keypress=='38'){

    up();

    console.log("up");

     }

     if(keypress=='40'){

        down();
    
        console.log("down");
    
         }
         if(keypress=='37'){

            left();
        
            console.log("left");
        
             }
             if(keypress=='39'){

                right();
            
                console.log("right");
            
                 } 
                  }

                  function up() 
                  { if(rover_y >=0) 
                    { rover_y = rover_y - 10; 
                        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                   uploadbackground();
                    roverground(); 
                } }

                function down() 
                { if(rover_y <=500) 
                  { rover_y = rover_y + 10; 
                      console.log("When up down is pressed, x = " + rover_x + " | y = " +rover_y);
                 uploadbackground();
                  roverground(); 
              } }

              function left() 
              { if(rover_x >=0) 
                { rover_x = rover_x - 10; 
                    console.log("When up left is pressed, x = " + rover_x + " | y = " +rover_y);
               uploadbackground();
                roverground(); 
            } }

            function right() 
            { if(rover_x <=800) 
              { rover_x = rover_x + 10; 
                  console.log("When up right is pressed, x = " + rover_x + " | y = " +rover_y);
             uploadbackground();
              roverground(); 
          } }
