<?php
require_once "./server.php";
/* Example How To Use It */

$server = new Server();

$update = $server->deleteTable("customers");

print_r($update);

// Create Table
$table = $server->showTables();
// $table = $server->getData();
  print_r($table);

// create
// $brandId = $server->create("users", ["user_name" => "Siya Rai"]);
// print_r($brandId);

// read
// $users = $server->read("users");
// print_r($users);

// update
// $server->update("users", 1, ["user_name" => "Ghs Julian (updated)"]);

// delete
// $server->delete("products", 1);
?>
