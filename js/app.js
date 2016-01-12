$(document).ready(function()
{
	hideAll = function() {
		$("#hg_more").hide();
		$("#hackidemia_more").hide();
		$("#nanopops_more").hide();
		$("#agilart_more").hide();
		$("#greenworld_more").hide();
		$("#iot_more").hide();

		$("#hg_more_lastone").hide();
		$("#hackidemia_more_lastone").hide();
		$("#nanopops_more_lastone").hide();
		$("#agilart_more_lastone").hide();
		$("#greenworld_more_lastone").hide();
		$("#iot_more_lastone").hide();
	};

	$(".hutgrip_btn").click(function(){
		hideAll();
		$("#row_1").hide();
		$("#hg_more").fadeIn();
		$("#hg_more_lastone").show();
	});
	$("#hg_less").click(function(){

		$("#hg_more").fadeOut(function(){
			$("#hg_more_lastone").hide();
			$("#row_1").show();
		});		
	});

	$(".hackidemia_btn").click(function(){
		hideAll();
		$("#row_1").hide();
		$("#hackidemia_more").fadeIn();
		$("#hackidemia_more_lastone").show();
	});
	$("#hackidemia_less").click(function(){

		$("#hackidemia_more").fadeOut(function(){
			$("#hackidemia_more_lastone").hide();
			$("#row_1").show();
		});		
	});

	$(".nanopops_btn").click(function(){
		hideAll();
		$("#row_1").hide();
		$("#nanopops_more").fadeIn();
		$("#nanopops_more_lastone").show();
	});
	$("#nanopops_less").click(function(){

		$("#nanopops_more").fadeOut(function(){
			$("#nanopops_more_lastone").hide();
			$("#row_1").show();
		});		
	});

	$(".agilart_btn").click(function(){
		hideAll();
		$("#row_2").hide();
		$("#agilart_more").fadeIn();
		$("#agilart_more_lastone").show();
	});
	$("#agilart_less").click(function(){

		$("#agilart_more").fadeOut(function(){
			$("#agilart_more_lastone").hide();
			$("#row_2").show();
		});		
	});

	$(".greenworld_btn").click(function(){
		hideAll();
		$("#row_2").hide();
		$("#greenworld_more").fadeIn();
		$("#greenworld_more_lastone").show();
	});
	$("#greenworld_less").click(function(){

		$("#greenworld_more").fadeOut(function(){
			$("#greenworld_more_lastone").hide();
			$("#row_2").show();
		});		
	});

	$(".iot_btn").click(function(){
		hideAll();
		$("#row_2").hide();
		$("#iot_more").fadeIn();
		$("#iot_more_lastone").show();
	});
	$("#iot_less").click(function(){

		$("#iot_more").fadeOut(function(){
			$("#iot_more_lastone").hide();
			$("#row_2").show();
		});		
	});
});
