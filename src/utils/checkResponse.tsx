export function checkResponse<T>(response:Response): Promise<T> {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    
    return response.json();
  }