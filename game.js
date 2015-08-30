
// console.log('game1 loaded');

// (function () {
      
//   var numCoins = 5,
//     score = 0,
//       coins = [],
//     canvas;     

//   function gameLoop () {
  
//     var i;
  
//     window.requestAnimationFrame(gameLoop);
    
//     // Clear the canvas
//     canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

//     for (i = 0; i < coins.length; i += 1) {
//       coins[i].update();
//       coins[i].render();
//     }
//   }
  
//   function sprite (options) {
  
//     var that = {},
//       frameIndex = 0,
//       tickCount = 0,
//       ticksPerFrame = options.ticksPerFrame || 0,
//       numberOfFrames = options.numberOfFrames || 1;
    
//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.x = 0;
//     that.y = 0;
//     that.image = options.image;
//     that.scaleRatio = 1;
    
//     that.update = function () {

//             tickCount += 1;

//             if (tickCount > ticksPerFrame) {

//         tickCount = 0;
        
//                 // If the current frame index is in range
//                 if (frameIndex < numberOfFrames - 1) {  
//                     // Go to the next frame
//                     frameIndex += 1;
//                 } else {
//                     frameIndex = 0;
//                 }
//             }
//         };
    
//     that.render = function () {

//       // Draw the animation
//       that.context.drawImage(
//         that.image,
//         frameIndex * that.width / numberOfFrames,
//         0,
//         that.width / numberOfFrames,
//         that.height,
//         that.x,
//         that.y,
//         that.width / numberOfFrames * that.scaleRatio,
//         that.height * that.scaleRatio);
//     };
    
//     that.getFrameWidth = function () {
//       return that.width / numberOfFrames;
//     };
    
//     return that;
//   }
  
//   function destroyCoin (coin) {
  
//     var i;
    
//     for (i = 0; i < coins.length; i += 1) {
//       if (coins[i] === coin) {
//         coins[i] = null;
//         coins.splice(i, 1);
//         break;
//       }
//     }
//   }
  
//   function spawnCoin () {
  
//     var coinIndex,
//       coinImg;
  
//     // Create sprite sheet
//     coinImg = new Image();  
  
//     coinIndex = coins.length;
    
//     // Create sprite
//     coins[coinIndex] = sprite({
//       context: canvas.getContext("2d"),
// 	    width: 320,
//       height: 64,      


//       // width: 1000,
//       // height: 100,
//       image: coinImg,
//       numberOfFrames: 5,
//       // numberOfFrames: 10,
//       ticksPerFrame: i
//     });
    
//     coins[coinIndex].x = Math.random() * (canvas.width - coins[coinIndex].getFrameWidth() * coins[coinIndex].scaleRatio);
//     coins[coinIndex].y = Math.random() * (canvas.height - coins[coinIndex].height * coins[coinIndex].scaleRatio);
    
//     coins[coinIndex].scaleRatio = Math.random() * 0.5 + 0.5;
    
//     // Load sprite sheet
    
//     coinImg.src = "http://www.nordenfelt-thegame.com/blog/wp-content/uploads/2011/11/explosion_transparent.png"
//     // coinImg.src = "images/coin-sprite-animation.png";
//   }
  
//   function getElementPosition (element) {
  
//        var parentOffset,
//            pos = {
//                x: element.offsetLeft,
//                y: element.offsetTop 
//            };
           
//        if (element.offsetParent) {
//            parentOffset = getElementPosition(element.offsetParent);
//            pos.x += parentOffset.x;
//            pos.y += parentOffset.y;
//        }
//        return pos;
//     }
  
//   function distance (p1, p2) {
  
//     var dx = p1.x - p2.x,
//       dy = p1.y - p2.y;
      
//     return Math.sqrt(dx * dx + dy * dy);
//   }
  
//   function tap (e) {
  
//     var i,
//       loc = {},
//       dist,
//       coinsToDestroy = [];
//       pos = getElementPosition(canvas),
//       tapX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX,
//       tapY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY,
//       canvasScaleRatio = canvas.width / canvas.offsetWidth;

//     loc.x = (tapX - pos.x) * canvasScaleRatio;
//     loc.y = (tapY - pos.y) * canvasScaleRatio;
      
//     for (i = 0; i < coins.length; i += 1) {
    
//       // Distance between tap and coin
//       dist = distance({
//         x: (coins[i].x + coins[i].getFrameWidth() / 2 * coins[i].scaleRatio),
//         y: (coins[i].y + coins[i].getFrameWidth() / 2 * coins[i].scaleRatio)
//       }, {
//         x: loc.x,
//         y: loc.y
//       });
      
//       // Check for tap collision with coin    
//       if (dist < coins[i].getFrameWidth() / 2 * coins[i].scaleRatio) {
//         coinsToDestroy.push(coins[i]);
//       }
//     }
    
//     // Destroy tapped coins
//     for (i = 0; i < coinsToDestroy.length; i += 1) {
    
//       score += parseInt(coinsToDestroy[i].scaleRatio * 10, 10);
//       destroyCoin(coinsToDestroy[i]); 
//       setTimeout(spawnCoin, 1000);  
//     }
    
//     // if (coinsToDestroy.length) {
//     //   document.getElementById("score").innerHTML = score;
//     // }
//   }
  
//   // Get canvas
//   canvas = document.getElementById("coinTapGame");
//   canvas.width = 460;
//   canvas.height = 230;
  
//   for (i = 0; i < numCoins; i += 1) {
  
//     spawnCoin();
//   }
  
//   gameLoop();
  
//   canvas.addEventListener("touchstart", tap);
//   canvas.addEventListener("mousedown", tap);

// } ());
