import axios from "axios";

export default class PostSetvice {
  static async getAll() {
    try{

    }catch(e){
        console.log(e);
    }
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data
  }
}
