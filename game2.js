$(function(){
console.log('game2loaded')


})

$('#fire').click(function(){
    $('#main-canvas').css('display','block');
    moveSprite();
    setInterval(loop, 50);
    // stopSprite()
    spriteCounter = 0
    });

        // var SCREEN_WIDTH = window.innerWidth,
        // SCREEN_HEIGHT = window.innerHeight;        
         
        var canvas = $('#main-canvas');
        var c = canvas[0].getContext('2d');
          
        canvas.width = 500;
        canvas.height = 500;

        // canvas.width = 70;
        // canvas.height = 70;

        // canvas.width = SCREEN_WIDTH;
        // canvas.height = SCREEN_HEIGHT;
        
        var xpos=0, 
            ypos=0, 
            index=0, 
            
            numFrames = 16, 
            frameSize= 200;

            // numFrames = 25, 
            // frameSize= 64;
         
          // document.body.appendChild(canvas); 

        image = new Image();

        image.src = "http://i81.photobucket.com/albums/j205/zanbatou-T-S/fire19pv.png";
        // image.src = "http://www.nordenfelt-thegame.com/blog/wp-content/uploads/2011/11/explosion_transparent.png";
          
    
        function loop() {
            
            c.clearRect(0,0, canvas.height, canvas.width);
            c.drawImage(image,xpos,ypos,frameSize,frameSize,0,0,frameSize, frameSize);
            
            xpos += frameSize;
            
            index += 1;
            
            
            if (index >= numFrames) {
                xpos =0;
                ypos =0;
                index=0;    
            
            } else if (xpos + frameSize > image.width){
                xpos =0;
                ypos += frameSize;
            }
            
            
            
        }

        var sprite = null;
        var spriteCounter = 0;
        

        function moveSprite(){
            console.log('moveSprite works');
            $('#main-canvas').css('display','block');
            sprite = $('canvas');
            sprite.css('top', ($('video:nth-child(2)').position +10) + 'px');
            setTimeout(moveSprite,1000);
        
            controlSprite = setInterval(function(){
                var spriteStart = (sprite.position().top + 10);
                sprite.css('top', spriteStart);

                if (spriteStart > (500)){
                    sprite.css('top', ($('video:nth-child(2)').height()+20) + 'px');
                    
                }
                }, 300);
            spriteCounter +=1;
            
                if (spriteCounter >=15){
                    
                    clearInterval(moveSprite);
                    $('#main-canvas').css('display','none');
                   
                    console.log('sprite stopped');
                }

            };


