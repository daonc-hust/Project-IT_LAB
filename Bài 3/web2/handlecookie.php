<?php
function filterRequest() {
	$cookie_name = "JWT-TOKEN";
	if(!isset($_COOKIE[$cookie_name])) {
		header("Location: http://localhost:8080/login?redirect=http://localhost:8000".$_SERVER['REQUEST_URI']);
		exit();
	} else {
		echo "<h2 style='color: coral'>Hello, $_COOKIE[$cookie_name]!</h2>";
	}	
}

function getUserName() {
	$cookie_name = "JWT-TOKEN";
	return $_COOKIE[$cookie_name];
}
?>