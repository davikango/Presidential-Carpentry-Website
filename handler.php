<!doctype html>
<html lang="en-US">
	<head>
	<link rel="stylesheet" href="css/style1.css">
	</head>
	
	<body>
				<?php
				
						//When the submit button is pressed: send email.
						if(isset($_POST['Submit'])){	
							$name = $_POST['name'];
							$to = "info@presidentialcarpentry.com";
							$subject = $_POST['subject'];
							$message = $_POST['message'];
							$from = "From: <" . $_POST['email'] . ">";
																
							$response = mail($to,$subject,$message,$from);
							if($response){
								?>
								<p class="handlerResponse">Thank you <?php echo " $name!"?></p>
							
								<p class="handlerResponse">Your message was successfully sent!</p>
							<?php
							}																
						}
				?>
				<a id="linkToHomePage" href="index">Presidential Carpentry's home page</a>
	</body>
	
</html>



