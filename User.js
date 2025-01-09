import axios from "axios";

class Users{
  static all(){
    return axios.get('/user')
  }
}

export default Users;
