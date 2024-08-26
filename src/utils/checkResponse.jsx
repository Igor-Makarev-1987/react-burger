export function checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    
    return response.json();
  }