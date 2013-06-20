<?php
    require_once('Db/Base.php');

    class Users extends Base{
        private $name=null;
        protected $table = "users";

        public function getName()
        {
            return $this->name;

        }
        public function setName($name)
        {
            $this->name=$name;

        }
        public function getEmail()
        {
            return $this->email;
        }
        public function setEmail($email)
        {
            $this->email = $email;
        }
        public function _insert()
        {
            $db = $this->getDb();
            $stm = $db->prepare('Insert into '.$this->getTable() .' (name,email) Values (:name, :email)');
            $stm->bindValue(':name', $this->getName());
            $stm->bindValue(':email', $this->getEmail());
            $stm->execute();

            $result = $stm->fetch(\PDO::FETCH_ASSOC);

            return $db->lastInsertId();
        }
        public function _update()
        {
             $db = $this->getDb();
             $stm = $db->prepare('Update '.$this->getTable() .' set name=:name and email=:email where id=:id');
             $stm->bindValue(':id', $this->getId());
             $stm->bindValue(':name', $this->getName());
             $stm->bindValue(':email', $this->getEmail());

             $stm->execute();
        }
    }
    new Users();
?>