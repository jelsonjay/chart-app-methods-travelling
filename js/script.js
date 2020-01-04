$(document).ready(function(){
		let projetos = {
			type: "pie",
			data : {
				datasets :[{
					data : [5, 10, 40, 12, 23, 12,],
					backgroundColor: [  "#00ff80","#F7464A","#46BFBD","#FDB45C","#cc0099","#4D5360",],
				}],
				labels : ["Walking", "Cycle", "Car", "Bus", "Train", "Taxi",]
			},
			options : {responsive : true, title:{display:true, text: 'Methods of Travelling to Work', fontSize:25}
		},
		legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
		};

		let chartsCanvas = document.getElementById('chart').getContext('2d');

		// Globol options
		Chart.defaults.global.defaultFontFamily = 'Lato';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		window.pie = new Chart(chartsCanvas, projetos);

		setInterval(function(){
			projetos.data.datasets.splice(0);
			var newData = {
				backgroundColor : ["#00ff80", "#F7464A", "#46BFBD", "#FDB45C", "#cc0099", "#4D5360",],
				data : [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
			};

			projetos.data.datasets.push(newData);
			window.pie.update();

		}, 5000);

		function getRandom(){
			return Math.round(Math.random() * 100);
		}

	});
