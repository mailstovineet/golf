var canvas=new fabric.Canvas('myCanvas');
ball_x=10;
ball_y=450;
hole_x=950
hole_y=30;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole=Img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);
		hole.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ball=Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball);
		})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y=hole_y)){
		canvas.remove(ball);
		win_image();
		document.getElementById("hd3").innerHTML="Hole in... however many clicks it took you to get it!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else if((((ball_x==0)||(ball_x==1100)||(ball_y==0)||(ball_y==500)))){
		document.getElementById("hd3").innerHTML="You Lost!"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y=ball_y-block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=500){
			ball_y=ball_y+block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
	}

	function left(){
	

			if(ball_x>=0){
				ball_x=ball_x-block_image_height;
				console.log(ball_x+","+ball_y);
				canvas.remove(ball);
				new_image();
			}
		
	}

	function right()
	{
		if(ball_x <=1100)
		{
			ball_x=ball_x+block_image_height;
			console.log(ball_x+","+ball_y);
			canvas.remove(ball);
			new_image();
		}
	}
	
}

function win_image()
{
	fabric.Image.fromURL("flag.jpg",function(Img){
		flag=Img;
		flag.scaleToWidth(50);
		flag.scaleToHeight(50);
		flag.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(flag);
		})
}

