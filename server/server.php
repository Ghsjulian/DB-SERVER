<?php
class Server
{
  protected $file;
  private $secret_key = "__ghs_julian__";
  public function __construct($file = "databases/data.bson")
  {
    $this->file = $file;
    if (!file_exists($this->file)) {
      touch($this->file);
      // Set the correct permissions
      chmod($this->file, 0644);
      file_put_contents($this->file, "{}");
    }
  }

  public function getData()
  {
    if (file_exists($this->file)) {
      $bson = file_get_contents($this->file);
      return $this->decrypt($bson) ?? [];
    }
    return [];
  }

  public function setData($data)
  {
    $json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    $filtered_json = str_replace(["\t", "\n", "\r"], "", $json);
    $binary = $this->encrypt($filtered_json);
    file_put_contents($this->file, $binary);
    return true;
  }

  public function create($table, $array)
  {
    $data = $this->getData();
    if (array_key_exists($table, $data)) {
      $id = count($data[$table]) + 1;
      $array["_id"] = $id;
      $newData = [...$data[$table], $array];
      $data[$table] = $newData;
      $this->setData($data);
      return [
        "insert" => $id,
        "row" => count($data[$table]),
        "message" => "New Record Inserted",
      ];
    } else {
      $id = 1;
      $array["_id"] = $id;
      $newData = [$array];
      $data[$table] = $newData;
      $this->setData($data);
      return [
        "insert" => $id,
        "row" => count($data[$table]),
        "message" => "New Record Inserted",
      ];
    }
  }

  public function read($table, $id = null)
  {
    $data = $this->getData();
    if ($id) {
      return isset($data[$table][$id - 1]) ? $data[$table][$id - 1] : null;
    }
    return $data[$table];
  }
  public function getAll($table)
  {
    if ($table) {
      $data = $this->getData();
      return $data[$table];
    }
  }
  public function update($table, $id, $array)
  {
    $data = $this->getData();
    if (isset($data[$table][$id - 1])) {
      $data[$table][$id - 1] = [
        "_id" => $id,
        ...$data[$table][$id - 1],
        ...$array,
      ];
      $this->setData($data);
      return true;
    }
    return false;
  }

  public function delete($table, $id)
  {
    $data = $this->getData();
    if (isset($data[$table][$id - 1])) {
      unset($data[$table][$id - 1]);
      $this->setData($data);
      return true;
    }
    return false;
  }
  public function createTable($table_name = null)
  {
    if ($table_name !== null) {
      $data = $this->getData();
      if (!array_key_exists($table_name, $data)) {
        if (is_array($data)) {
          $data[$table_name] = [];
          $this->setData($data);
          return [
            "error" => false,
            "status" => "success",
            "table" => $table_name,
            "message" => "Table Created Successfully",
          ];
        } else {
          return [
            "error" => true,
            "status" => "faild",
            "message" => "Data Is Not An Array",
          ];
        }
      } else {
        return [
          "error" => true,
          "status" => "faild",
          "message" => "Table Already Exist",
        ];
      }
    } else {
      return [
        "error" => true,
        "status" => "faild",
        "message" => "Table Name Is Required",
      ];
    }
  }
  public function showTables()
  {
    $data = $this->getData();
    $tables = [];
    if (is_array($data)) {
      foreach ($data as $table => $value) {
        array_push($tables, $table);
      }
    } else {
      array_push($tables, null);
    }
    return $tables;
  }
  public function encrypt($string)
  {
    $encryptedString = openssl_encrypt(
      $string,
      "AES-256-CBC",
      $this->secret_key,
      0,
      "1234567890123456"
    );
    $binaryString = "";
    foreach (str_split($encryptedString, 1) as $char) {
      $binaryString .= sprintf("%08b", ord($char));
    }
    return $binaryString;
  }

  public function decrypt($binaryString)
  {
    $encryptedString = "";
    foreach (str_split($binaryString, 8) as $byte) {
      $encryptedString .= chr(bindec($byte));
    }
    $decryptedString = openssl_decrypt(
      $encryptedString,
      "AES-256-CBC",
      $this->secret_key,
      0,
      "1234567890123456"
    );
    return json_decode($decryptedString, true);
  }
  public function updateByKey($table, $key, $value, $array)
  {
    $data = $this->getData();
    $updated = false;
    $current = null;
    foreach ($data[$table] as &$row) {
      if ($row[$key] == $value) {
        $row = array_merge($row, $array);
        $current = $row;
        $updated = true;
        break;
      }
    }
    if ($updated) {
      $this->setData($data);
      return true;
    } else {
      return [
        "error" => true,
        "status" => "failed",
        "message" => "No Key Or Value Found",
      ];
    }
  }

  public function deleteByKey($table, $key, $value)
  {
    $data = $this->getData();
    foreach ($data[$table] as $id => $row) {
      if ($row[$key] == $value) {
        unset($data[$table][$id]);
        break;
      }
    }
    $this->setData($data);
    return true;
  }
  public function getByKey($table, $key, $value)
  {
    $data = $this->getData();
    foreach ($data[$table] as $id => $row) {
      if ($row[$key] == $value) {
        return $data[$table][$id];
        break;
      }
    }
  }
  public function deleteTable($table_name)
  {
    $data = $this->getData();
    $is_delete = false;
    if (is_array($data)) {
      foreach ($data as $table => $value) {
        if ($table == $table_name) {
          unset($data[$table_name]);
          $is_delete = true;
          break;
        }
      }
    }
   if($is_delete){
    $this->setData($data);
    return true;
   } else {
    return [
       "error" => true,
       "status" => "failed",
       "table" => $table_name,
       "message" => "Table Doesn't Exist",
      ];
    }
  }
}

// How Can You Use This Class ---->
/* 
$server = new Server();

// Create Table
// $table = $server->createTable("customers");
// print_r($table);

// create
// $brandId = $server->create("products", ["name" => "Brand D"]);
// print_r($brandId);

// read
// $users = $server->read("users");
// print_r($users);

// update
// $server->update("products", 1, ["name" => "Ghs Julian (updated)"]);

// delete
// $server->delete("products", 1);
*/

?>
