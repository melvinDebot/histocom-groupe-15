<template>
<div class="containt">
  <div class="containt-name">
    <button>
      <img :src="fleche " alt="" />
      Retour
    </button>
    <h2>{{ title }}</h2>
    <canvas id="bridge" width="488" height="378" style="border : 2px solid black"></canvas>
    <h4>{{ titleTool }}</h4>
  </div>
  <div class="containt-video"></div>
</div>
  
</template>

<script>


export default {
  name : 'ObjectDesc',
  props : {
    title : {
      type : String,
      default : 'LES OBJETS DE COMMUNICATION'
    },
    titleTool : {
      type : String,
      default : 'Nom de l/outil'
    }
  },
  mounted(){
    var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    brushRadius = (bridge.width / 100) * 5,
    img = new Image();

    if (brushRadius < 50) { brushRadius = 50 }

    img.onload = function(){  
      bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
    }
    img.loc = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/';
    img.filename = 'calgary-bridge-2013.jpg';
    if (window.devicePixelRatio >= 2) {
      var nameParts = img.filename.split('.');
      img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
    } else {
      img.src = img.loc + img.filename;
    }

    function detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }

    function getBrushPos(xRef, yRef) {
      var bridgeRect = bridge.getBoundingClientRect();
      let x = Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*bridge.width)
      let y = Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*bridge.height)
      return {
        x,y
      }
        
    }
          
    function drawDot(mouseX,mouseY){
      bridgeCanvas.beginPath();
        bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        bridgeCanvas.fillStyle = '#000';
        bridgeCanvas.globalCompositeOperation = "destination-out";
        bridgeCanvas.fill();
    }

    bridge.addEventListener("mousemove", function(e) {
      var brushPos = getBrushPos(e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);

    bridge.addEventListener("touchmove", function(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY);
            drawDot(brushPos.x, brushPos.y);
        }
    }, false);
  }

}
</script>

<style lang="scss">
.containt {
  width:100%;
  height: 100vh;
  border:1px solid green;
  display: flex;

  .containt-name{
    width: 40%;
    height: 100%;
    border:1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;

    button{
      width: 227px;
      height: 57px;
      background: #EBEFF0;
      border-radius: 10px;
      border: none;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #7E92AE;
      img{
        width:15px;
      }
    }
    h2{
      font-size: 38px;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-weight: 500;
      color: #6D6D6D;
      text-align:start;
    }

    #bridge{
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/calgary-bridge-1943.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }

    h4{
      font-weight: 500;
      font-size: 30px;
      color: #6D6D6D;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
    }
  }

  .containt-video{
    width: 60%;
    height: 100%;
    border:1px solid green;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    
  }
}
</style>


