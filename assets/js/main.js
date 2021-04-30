
	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
	let chek = /\d{16}|\d{4} \d{4} \d{4} \d{4}|\d{4}-\d{4}-\d{4}-\d{4}/gi;
	console.log(data.match(chek));
	let cards = Array(); //array for correct cards
	let result = data.replace(chek, function (item) {

        console.log(item);
		//make cards one standard
		if (item.length != 16) {
			item = item.split('-').join('').split(' ').join('');
			console.log('change', item);
		}
		let sum = 0;
		let card = item;
		//Algorithm Lunna
		card = card.split('').reverse();

		for (let i = 0; i < card.length; i++) {
			if (i % 2 == 0) {
				sum += +card[i];
			}else{
				let digit = +card[i]*2;
				if (digit > 9) {
					digit -=9;
				}
				sum += digit;
			}	
		}

		//card is devided on block

		//card = item.slice(0,4) + ' ' + item.slice(4,8) + ' ' + item.slice(8,12) + ' ' + item.slice(12,16);

		card = [item.slice(0,4),item.slice(4,8),item.slice(8,12),item.slice(12,16)].join(' ');

		console.log(card);
		//chek on correct card and push to array cards
		if (sum % 10 == 0) {
			cards.push(card);
		}
    })

	console.log(cards);