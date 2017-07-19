var list = ["ESL_SC2", "OgamingSC2", "cretetion", "comster404", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]; // List of twitch channels


//all

function all(){
for (var i = 0; i < list.length; i++) {                                               // Going through the list
			var twitchURL = 'https://api.twitch.tv/kraken/streams/'+list[i];          //Stream Online Call

$.ajax({
	type: 'GET',
	url: twitchURL,
	async:false,
	headers: {
		'Client-ID': '7bghw6y7snqw6m7xkr946ud5odbsju'
	},

	success: function(data){
		if (data.stream  !== null ) {
			var link = "https://www.twitch.tv/"+data.stream.channel.display_name+"/";
			var logo = data.stream.channel.logo;
			var channel = data.stream.channel.name;
			var status = data.stream.channel.status ;
			$("#insert").append("<div class='added online row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><a href='"+link+"'><h3>"+channel+"</h3></a></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");			
		}
		else{

			 var twitchURL2 = 'https://api.twitch.tv/kraken/channels/'+list[i];         // Offline channel call

	 		$.ajax({
				type: 'GET',
				url: twitchURL2,
				async:false,
				headers: {
					'Client-ID': '7bghw6y7snqw6m7xkr946ud5odbsju'
				},
				success: function(data2){
				var link = "https://www.twitch.tv/"+data2.display_name+"/";
				
				if (data2.logo === null) {                                           //no logo set logo
					var logo ="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
				}
			 	else{	
					var logo = data2.logo;
				}
				var channel = data2.name;
				var status = "Offline" ;
			$("#insert").append("<div class='added offline row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><a href='"+link+"'><h3>"+channel+"</h3></a></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");
			},// success offline

				error: function(data){                                                 //Non existent channel
					var logo ="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
					var channel = list[i];
					var status = data.responseJSON.message;
			$("#insert").append("<div class='added offline error row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><h3>"+channel+"</h3></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");
	}

});//ajax call
		}//else
	}//success online
});//ajax call
};//for loop
}


//online

function online(){
for (var i = 0; i < list.length; i++) {                                               // Going through the list
			var twitchURL = 'https://api.twitch.tv/kraken/streams/'+list[i];          //Stream Online Call

$.ajax({
	type: 'GET',
	url: twitchURL,
	async:false,
	headers: {
		'Client-ID': '7bghw6y7snqw6m7xkr946ud5odbsju'
	},

	success: function(data){
		if (data.stream  !== null ) {
			var link = "https://www.twitch.tv/"+data.stream.channel.display_name+"/";
			var logo = data.stream.channel.logo;
			var channel = data.stream.channel.name;
			var status = data.stream.channel.status ;
			$("#insert").append("<div class='added online row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><a href='"+link+"'><h3>"+channel+"</h3></a></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");			
		}
	}//success online
});//ajax call
};//for loop
}


//offline 

function offline(){
for (var i = 0; i < list.length; i++) {                                               // Going through the list
			var twitchURL = 'https://api.twitch.tv/kraken/streams/'+list[i];          //Stream Online Call
$.ajax({
	type: 'GET',
	url: twitchURL,
	async:false,
	headers: {
		'Client-ID': '7bghw6y7snqw6m7xkr946ud5odbsju'
	},
	success: function(data){
		if (data.stream  === null ) {
			 var twitchURL2 = 'https://api.twitch.tv/kraken/channels/'+list[i];  
			        // Offline channel call
	 		$.ajax({
				type: 'GET',
				url: twitchURL2,
				async:false,
				headers: {
					'Client-ID': '7bghw6y7snqw6m7xkr946ud5odbsju'
				},
				success: function(data2){
				var link = "https://www.twitch.tv/"+data2.display_name+"/";
				
				if (data2.logo === null) {                                           //no logo set logo
					var logo ="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
				}
			 	else{	
					var logo = data2.logo;
				}
				var channel = data2.name;
				var status = "Offline" ;
			$("#insert").append("<div class='added offline row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><a href='"+link+"'><h3>"+channel+"</h3></a></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");
			},// success offline

				error: function(data){                                                 //Non existent channel
					var logo ="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
					var channel = list[i];
					var status = data.responseJSON.message;
			$("#insert").append("<div class='added offline error row well'><div class='col-xs-3'><img src='"+logo+"' height='100' width='100'/></div><div class='col-xs-3'><h3>"+channel+"</h3></div><div class='col-xs-6'><h3>"+status+"</h3></div></div>");
	}

});//ajax call
		}//else
	}//success online
});//ajax call
};//for loop
}

function removeIt(){
	$('.added').remove();
}






$(document).ready(function(){
	all();

	$(".allSelector").click(function(){
		removeIt();
		all();
	});
	$(".onlineSelector").click(function(){
		removeIt();
		online();
	});
	$(".offlineSelector").click(function(){
		removeIt();
		offline();
	});


});//document.ready