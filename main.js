var canvas = document.getElementById("FontNumberCanvas");
var ctx = canvas.getContext("2d");

var studentID = "202034012";
var sdid = [];
var NumX = 50;
var NumY = 50;
var sdid = studentID;

drawNum(sdid);

function drawNum()
{
    for(var i = 0; i < sdid.length; i++)
    {
        if(sdid[i]==0)
        {
            ctx.moveTo(NumX,NumY);
            ctx.rect(NumX,NumY,10,20);
            ctx.stroke();           
        }
        if(sdid[i]==1)
        {
            ctx.moveTo(NumX+10,NumY);
            ctx.lineTo(NumX+10,NumY+20);
            ctx.stroke();
        }
        if(sdid[i]==2)
        {
            ctx.moveTo(NumX,NumY);
            ctx.lineTo(NumX+10,NumY);
            ctx.lineTo(NumX+10,NumY+10);
            ctx.lineTo(NumX,NumY+10);
            ctx.lineTo(NumX,NumY+20);
            ctx.lineTo(NumX+10,NumY+20);
            ctx.stroke();
        }
        if(sdid[i]==3)
        {
            ctx.moveTo(NumX,NumY);
            ctx.lineTo(NumX+10,NumY);
            ctx.lineTo(NumX+10,NumY+10);
            ctx.lineTo(NumX,NumY+10);
            ctx.lineTo(NumX+10,NumY+10);
            ctx.lineTo(NumX+10,NumY+20);
            ctx.lineTo(NumX,NumY+20);
            ctx.stroke();
        }
        if(sdid[i]==4)
        {
            ctx.moveTo(NumX,NumY);
            ctx.lineTo(NumX,NumY+10);
            ctx.lineTo(NumX+10,NumY+10);
            ctx.lineTo(NumX+10,NumY+20);
            ctx.lineTo(NumX+10,NumY);
            ctx.stroke();
        }
        NumX+=30;
        
    }
}




