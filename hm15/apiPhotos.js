class ApiPhotos {
    static async get(photoId) {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/'+photoId);
      return await response.json();
    }
  
    static async add(photoData) {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        body: JSON.stringify(photoData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    }
  
    static async update(photoId, updatedData) {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/'+photoId, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    }
  
    static async delete(photoId) {
      await fetch('https://jsonplaceholder.typicode.com/photos/'+photoId, {
        method: 'DELETE',
      });
    }
  }
  
  export default ApiPhotos;