<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            text-align: center;
        }
        a{
            color: white;
            background-color: rgb(0, 119, 255);
            padding: 15px 23px;
            font-size:1rem;
            text-decoration: none;
            border-radius: 5px;
        }
        a:hover{
            background-color: rgb(0, 81, 255);
        }
    </style>
    
</head>
<body>
   <div class="container">
        <p>Here is your pincode</p>
        <h1>{{$token}}<h1>
        <a href="http://localhost:3000/reset-password/{{$email}}/{{$token}}">Click Here</a>
   </div>

</html>