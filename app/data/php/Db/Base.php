<?php
    require_once('Connection.php');

    abstract class Base{
    protected $id = null;
    protected $database = null;
    protected $table = null;

    public function __construct(array $options=null, \PDO $database = null){
        if(count($options))
            $this->setOptions($options);

        $this->config['adapter']="mysql";
        $this->config['hostname']="localhost";
        $this->config['dbname']="finalapp";
        $this->config['user']="root";
        $this->config['password']="";

        $connection = new Connection();

        $this->database = $connection->getConnection($this->config);
        if(method_exists($this,$_GET['action'])){
        call_user_func(array($this, $_GET['action']));
        }
    }
        public function setOptions(array $options){
            $methods = get_class_methods($this);
            foreach($options as $key=>$value){
                $method = 'set'.ucfirst($key);
                if(in_array($method, $methods))
                    $this->$method($value);
            }
            return $this;
        }

        public function getId()
        {
            return $this->id;
        }
        public function setId($id)
        {
            if(!is_null($this->$id))
                throw new \Exception('Some exception has occurred');
            $this->id = (int)$id;
        }
        public function getTable()
        {
            return $this->table;
        }
        public function getDb()
        {
            return $this->database;
        }
        public function save()
        {
            if($this->id)
                return $this->update();
            else
                return $this->insert();
        }
        public function find($id)
        {
            $db = $this->getDb();
            $stm = $db->prepare("select * from ".$this->getTable().' where id=:id');
            $stm->bindValue(':id',$id);
            $stm->execute();
            return $stm->fetch(\PDO::FETCH_ASSOC);
        }
        public function fetchAll(){
            $db = $this->getDb();
            $stm = $db->prepare("select * from ".$this->getTable());
            $stm->execute();

            echo json_encode(array(
                "data" => $stm->fetchAll(\PDO::FETCH_ASSOC),
                "success" => true
               ));
        }
        public function delete($id){
            $db = $this->getDb();
            $stm = $db->prepare("delete from ".$this->table."where id=:id");
            $stm->bindValue(":id",$id);
            $stm->execute();
        }
        abstract function _insert();
        abstract function _update();


    }

?>