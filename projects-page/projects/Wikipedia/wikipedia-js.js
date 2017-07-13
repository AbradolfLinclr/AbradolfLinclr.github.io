$(function(){


	$("#submit").on("click", function(){

		var t = document.getElementById("search").value.trim();
		console.log(t);


		var wikipediaURL = "https://en.wikipedia.org//w/api.php?action=opensearch&search="+ t +"&format=json&callback=?";

		$.ajax({
			url: wikipediaURL,
			type:'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
			dataType: "json",
			success: function(data){
				var results = document.getElementById("searchResults");
				results.innerHTML = "";

				console.log(data);

				for (var i = 0; i < data[1].length; i++) {
					 if(data[1] !== ''){
						            results.innerHTML += "<div class ='result'><a href='" + data[3][i] + "'><li><h2>" + data[1][i] +"</h2><p>"+ data[2][i] +"</p></li></a></div>";

						        };


        };

			},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("fail");
		})
		.always(function() {
			console.log("complete");
		});

	        document.getElementById("search").value = " ";
			return false;


	});
});

