function RandomNumber()
{
	var n = Math.random();
	n = n * 6
	n = Math.floor(n)+1;
	return n
}

var p1 = RandomNumber();
var p2 = RandomNumber();
var t1 = document.getElementsByClassName("img1")[0];
var t2 = document.getElementsByClassName("img2")[0];
t1.setAttribute("src", `./images/dice${p1}.png`);
t2.setAttribute("src", `./images/dice${p2}.png`);
var tag1 = document.querySelector("h1");
if(p1==p2)
{
	tag1.textContent="Draw Match!";
}
else{
	if(p1>p2)
	{
		tag1.textContent="Player 1 has won!";
	}
	else
	{
		tag1.textContent="Player 2 has won!";	
	}
}