<?php
	include 'handlecookie.php';
?>
<html>
<head>
	<title>Protected Resource Service</title>
</head>
<body>
	<h1 style="color:cornflowerblue;">Website 2</h1>
	<?php
		filterRequest();
	?>
	<a href="/web2/resource1.php">Access resource 1</a>
    <br/>
    <a href="/web2/resource2.php">Access resource 2</a>
    <br/>
    <a href="http://localhost:8080/login?redirect=http://localhost/web2/protected-resource.php">Logout</a>
</body>
</html>