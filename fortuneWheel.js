function spinFunction() {
	var FreeNuddels = document.getElementById('freenuddels').getAttribute('id');
	var FreeSushi = document.getElementById('freesushi').getAttribute('id');
	var FreeSpringtolls = document.getElementById('freespringrolls').getAttribute('id');
	var FreeSoup = document.getElementById('freeshoup').getAttribute('id');

	var DiscountCode50 = document.getElementById('discount50').getAttribute('id');
	var DiscountCode25 = document.getElementById('discount50').getAttribute('id');
	var NothingJ1 = document.getElementById('loser1');
	var NothingJ2 = document.getElementById('loser2');

	var hei = document.getElementById('boxvalue1');
	var bye = document.getElementById('boxvalue2');

	var output = document.getElementById('output');
	var x = 1024;
	var y = 9999;

	var deg = Math.floor(Math.random() * (x - y)) + y;

	var selected = Math.ceil(( (deg-22.5) % 360 )/45);
	
	document.getElementById('box').style.transform = 'rotate(' + deg + 'deg)';
	var messeage;
	var element = document.getElementById('mainbox');

	element.classList.remove('animate');
	setTimeout(function () {
		element.classList.add('animate');
		switch (selected) {

			case 1:
				messeage = 'Looser	';
				break;
			case 2:
				messeage = 'Otional free soup for purchase over 350,-';
				break;
			case 3:
				messeage = '25% off on your next purchase! Coupon code: 25offSRK';
				break;
			case 4:
				messeage = 'Optional free nudles for puchase over 350,-';
				break;
			case 5:
				messeage = 'Looser	';
				break;
			case 7:
				messeage = '50% off on your next purchase! Coupon code: 50offSRK';
				break;
			case 8:
				messeage = 'Optional free sushi for purchase over 299,-';
				break;
		}

		output.innerText = messeage;
	}, 5000);
}
