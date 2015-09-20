$(document).ready(function() {

	var ipas = [["Aashrey Tiku", "bio", "pics/aashreytiku.png"], 
				["Alex Lee", "bio", "pics/alexlee.png"], 
				["Arjun Jaykrishna", "bio", "pics/banana.png"], 
				["Arleen Li", "bio", "pics/arleenli.png"], 
				["Aruj Chaudhry", "bio", "pics/arujchaudhry.png"], 
				["Dajana Jakovina", "bio", "pics/dajanajakovina.png"], 
				["Dan Wu", "bio", "pics/danwu.png"], 
				["Darren Malyssa", "bio", "pics/banana.png"], 
				["Emmanuel Darko", "bio", "pics/manny.png"], 
				["Esteban Mercado", "bio", "pics/estebanmercado.png"], 
				["Gabriela Leal", "bio", "pics/gabrielaleal.png"], 
				["Gordon Schlicht", "bio", "pics/gordonschlicht.png"], 
				["Jack Evans", "bio", "pics/jackevans.png"], 
				["Jason Yuan", "bio", "pics/jasonyuan.png"], 
				["Jeffrey Kim", "bio", "pics/jeffreykim.png"], 
				["Liz Kang", "bio", "pics/lizkang.png"], 
				["Michael Sheridan", "bio", "pics/michaelsheridan.png"], 
				["Natalie Ser", "bio", "pics/natalieser.png"], 
				["Nicolay Dahl", "bio", "pics/nicolaydahl.png"], 
				["Parth Goel", "bio", "pics/parthgoel.png"], 
				["Peter Beer", "bio", "pics/peterbeer.png"], 
				["Sarah Faruqui", "bio", "pics/sarahfaruqui.png"], 
				["Shikhar Soni", "bio", "pics/shikharsoni.png"], 
				["Sofia Lopez Franco", "bio", "pics/banana.png"], 
				["Will Wright", "bio", "pics/willwright.png"], 
				["Yadanar Hnin", "bio", "pics/yadanarhnin.png"], 
				["Yannick Mamudo", "bio", "pics/yannickmamudo.png"], 
				["Yoni Pinto", "bio", "pics/yonipinto.png"], 
				["Warsame Elmi", "bio", "pics/sam.png"], 
				["Zain Syedain", "bio", "pics/zainsyedain.png"]];
	
	var exec = [["Bee Nirundonpruk", "bio", "pics/bee.png"], 
				["Dino Mujkic", "bio", "pics/dinomujkic.png"],
				["Radhika Kalra", "bio", "pics/radhikakalra.png"], 
				["Rovik Robert", "bio", "pics/rovikrobert.png"]];

	for (var i = 0; i < exec.length; i++) {
		$("#exec").append(
			"<div class=\"exec-pic-div\"> <img class=\"exec-pic-img\" src=\"" + exec[i][2] + "\"><p class=\"pic-name team-content-color\">" + exec[i][0] + "</p></div>");
	}

	for (var i = 0; i < ipas.length; i++) {
		$("#our-ipas").append("<div class=\"ipa-pic-div\"><img class=\"ipa-pic-img\" src=\"" + ipas[i][2] + "\"><p class=\"pic-name team-content-color\">" + ipas[i][0] + "</p></div>");
	}

	function imageExists(image_url){

		// console.log(image_url);

		// if (image_url != "pics/bananafunny.png") {

		//     var http = new XMLHttpRequest();

		//     http.open('HEAD', image_url, false);
		//     http.send();

		//     return http.status != 404;

		// }

		// else return false;

		if (image_url == "pics/bananafunny.png" || image_url == "pics/dajanajakovinafunny.png" || image_url == "pics/yadanarhninfunny.png" || image_url == "pics/yonipintofunny.png" || image_url == "pics/jasonyuanfunny.png") {
			return false;
		}

		return true;
	}

	$(".ipa-pic-img").hover(
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = imgSrc.substring(0, imgSrc.indexOf(".")) + "funny.png";

			if (imageExists(newSrc)) {
				$(this).attr("src", newSrc);	
			}
		},
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = "";

			if (imgSrc.search("funny") != -1) {
				newSrc = imgSrc.substring(0, imgSrc.search("funny")) + ".png";
			} else {
				newSrc = imgSrc;
			}

			if (imageExists(newSrc)) {
				$(this).attr("src", newSrc);
			} else {
				$(this).attr("src", imgSrc);
			}
		}
	);	

	$(".exec-pic-img").hover(
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = imgSrc.substring(0, imgSrc.indexOf(".")) + "funny.png";

			if (imageExists(newSrc)) {
				$(this).attr("src", newSrc);	
			}
		},
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = "";

			if (imgSrc.search("funny") != -1) {
				newSrc = imgSrc.substring(0, imgSrc.search("funny")) + ".png";
			} else {
				newSrc = imgSrc;
			}

			if (imageExists(newSrc)) {
				$(this).attr("src", newSrc);
			} else {
				$(this).attr("src", imgSrc);
			}
		}
	);	

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing');
	});

});