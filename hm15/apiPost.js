class ApiPost {
    static async get(postId) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId);
      return await response.json();
    }
  
    static async add(postData) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    }
  
    static async update(postId, updatedData) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    }
  
    static async delete(postId) {
      await fetch('https://jsonplaceholder.typicode.com/posts/'+postId, {
        method: 'DELETE',
      });
    }
  }
  
  export default ApiPost;