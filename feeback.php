<?php
	if(isset($_POST['name'])){
    $Name= $_POST['name'];
    $Email= $_POST['email'];
    $feedback= ($_POST['feedback']);


    $conn = new mysqli('localhost','root','','portfolio');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = "insert into feedback(name,emailid,feedback) values('$Name', '$Email','$feedback')";
		$result = mysqli_query($conn,$stmt);
		echo  "Uploaded successfully";
		header('Location: index.html');
    }    
}
?>
