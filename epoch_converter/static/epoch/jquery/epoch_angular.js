var app = angular.module('epoch_angular_app', ['angular-timezone-selector']);

app.controller('AppCtrl', function($scope) {
        $scope.timezone = '';
        $scope.process_epoch1 = function (){
                var epoch_value = document.getElementById("enter_epoch").value;
                var d = new Date(epoch_value*1000);
                setTimeout(function() {
                        var epoch_input_tz = document.getElementById("epoch_angular_epoch_tz").value;
			var dataString = '&time_to_convert='+ 'date_input'+ '&epoch_to_convert='+ epoch_value+ '&tz_to_convert='+ epoch_input_tz;
				$.ajax({
		                 	type:"POST",
                		 	url:"/",
		                 	data: dataString,
                		 	success: function(response){
						var data = response;
						var myTable = document.getElementById('myTable');
        	                		document.getElementById('output_epoch_1').innerHTML = response.vara0;
						for (var i=1; i<337; i++) {
							var dyn_set = 'vara'+i;
							myTable.rows[i].cells[1].innerHTML = data[dyn_set];
						}
						}
					});
					return false;
                        }, 50); 
                }
});

app.controller('AppCtrll', function($scope) {
	$scope.timezone = '';
        $scope.process_epoch2 = function (){
			var date_input = document.getElementById('datetimepicker1').value;
			setTimeout(function() {
				var date_input_tz = document.getElementById("epoch_angular_date_tz").value;
				var dataString = '&time_to_convert='+ date_input+ '&epoch_to_convert='+ 'datetoepoch'+ '&tz_to_convert='+ date_input_tz;
				$.ajax({
		                 	type:"POST",
                		 	url:"/",
		                 	data: dataString,
                		 	success: function(response){
						var data = response;
						var myTable = document.getElementById('myTable');
						document.getElementById('output_date_1').innerHTML = response.vara0;
						for (var i=1; i<337; i++) {
							var dyn_set = 'vara'+i;
							myTable.rows[i].cells[1].innerHTML = data[dyn_set];
						}
						}
					});
					return false;
				}, 50);
			}
});


