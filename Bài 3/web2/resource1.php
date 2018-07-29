<?php
include 'handlecookie.php';
?>

<html>
<head>
	<title>Resource 1</title>
</head>
<body>
	<h1 style="color: cornflowerblue">Resource 1</h1>
	<h2 style="color: coral">Hello, <?php echo getUserName()?></h2>
	<a href="/web2/protected-resource.php">Back to main page</a>
</body>
</html>