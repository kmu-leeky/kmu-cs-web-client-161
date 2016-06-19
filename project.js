function bigger(x)
{
	x.style.width="100%";
	x.style.height="100%";
}
function normal(x)
{
	x.style.width="50&";
	x.style.height="50%";
}
cnt=0;
function imgToggle()
{
	var img1=document.getElementById("image1");
	var txt=document.getElementById("strategy");
	cnt++;
	cnt=cnt%4;
	if(cnt%4==0)
	{
		image1.src="position.png";
		txt.innerText="4-2-3-1";
		txt.style.color="#778899";
	}
	else if(cnt%4==1)
	{
		image1.src="position2.png";
		txt.innerText="4-1-3-2";
		txt.style.color="#0000FF";
	}
	else if(cnt%4==2)
	{
		image1.src="position3.png";
		txt.innerText="4-3-3";
		txt.style.color="#483D8B";
	}
	else
	{
		image1.src="position4.png";
	    txt.innerText="4-2-2-2";
		txt.style.color="#4B0082";
	}
}
cnt1=0;
function changeTable()
{
	cnt1++;
	cnt1=cnt1%2;
	if(cnt1%2==1)
	{
		$('#birth0').text('나이');
		$('#birth1').text('만 27세');
		$('#birth2').text('만 25세');
		$('#birth3').text('만 36세');
		$('#birth4').text('만 26세');
		$('#birth5').text('만 23세');
		$('#birth6').text('만 29세');
		$('#birth7').text('만 26세');
		$('#birth8').text('만 24세');
		$('#birth9').text('만 24세');
		$('#birth10').text('만 28세');
		$('#birth11').text('만 26세');
		$('#info0').html("비만 여부<br> 비만도 계산법:<br>몸무게÷키(m)의 제곱>25");
		$('#info1').text('건강!');
		$('#info2').text('건강!');
		$('#info3').text('건강!');
		$('#info4').text('건강!');
		$('#info5').text('건강!');
		$('#info6').text('건강!');
		$('#info7').text('건강!');
		$('#info8').text('건강!');
		$('#info9').text('건강!');
		$('#info10').text('건강!');
		$('#info11').text('건강!');
	}
	else
	{
		$('#birth0').text('생년월일');
		$('#birth1').text('1988년 3월 6일');
		$('#birth2').text('1991년 4월 5일');
		$('#birth3').text('1981년 3월 19일');
		$('#birth4').text('1989년 7월 5일');
		$('#birth5').text('1992년 7월 5일');
		$('#birth6').text('1987년 1월 9일');
		$('#birth7').text('1990년 6월 17일');
		$('#birth8').text('1991년 10월 2일');
		$('#birth9').text('1992년 6월 12일');
		$('#birth10').text('1988년 5월 10일');
		$('#birth11').text('1989년 9월 1일');
		$('#info0').text("신장,체중");		
		$('#info1').text("193cm 87kg");
		$('#info2').text("175cm 67kg");
		$('#info3').text("178cm 74kg");
		$('#info4').text("188cm 84kg");
		$('#info5').text("171cm 65kg");
		$('#info6').text("179cm 73kg");
		$('#info7').text("182cm 67kg");
		$('#info8').text("181cm 76kg");
		$('#info9').text("171cm 68kg");
		$('#info10').text("172cm 73kg");
		$('#info11').text("178cm 76kg");
	}
}
cnt2=0;
function changeTitle()
{
	cnt2++;
	cnt2=cnt2%5;
	switch(cnt2)
	{
		case 0:
		   $('#titletitle').text("Introduce You to Liverpool Football Club!");
		   break;
		case 1:
		   $('#titletitle').text("You'll Never Walk Alone!");
		   break;
		case 2:
		   $('#titletitle').text("Hello!  Liverpool  World!");
		   break;
		case 3:
           $('#titletitle').text("England  King!  Liverpool!");
		   break;
        case 4:
           $('#titletitle').text("Hi  Hi  Hi!");
           break;		   
	}
}
setInterval("changeTitle()",3000);
cnt3=0;
function showContent()
{
	cnt3++;
	cnt3=cnt3%2;
	switch(cnt3)
	{
	case 0:
	   $('.team-content').attr('style','visibility:hidden;');
	   break;
	case 1:
	   $('.team-content').attr('style','visibility:visible;');
	   break;
	}
}
cnt4=0;
function changeLogo()
{
	cnt4++;
	cnt4=cnt4%5;
	switch(cnt4)
	{
    case 0:
	   $('.first-div').css('background-image','url("first-image.png")');
	   break;
	case 1:
	   $('.first-div').css('background-image','url("logo1.png")');
	   break;
	case 2:
	   $('.first-div').css('background-image','url("logo2.png")');
	   break;
	case 3:
	   $('.first-div').css('background-image','url("logo3.png")');
	   break;
	case 4:
       $('.first-div').css('background-image','url("logo4.png")');
       break;
	}
}
function changes()
{
	$('#imgg1').css('visibility','visible');
	$('#imgg2').css('visibility','visible');
	$('#bookmark-4').text('경기일정');
}

function lastmention()
{
	alert('이제 리버풀 팬입니다! ^^');
}

