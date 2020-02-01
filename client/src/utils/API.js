import axios from "axios";

export default{
    getAll: function(title){
        //const apiKey = process.env.GOOGLE_BOOK_APIKEY;
        const apiKey = "AIzaSyAFwzb5MyFZbIsF7kS0bfPF0Be2ZYGxnGY";
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle&key=${apiKey}`;
        return axios.get(url);
    },
    getSaved: function(){
        return axios.get("/api/books");
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    }
}
