import axios from 'axios';

export const postData = async (url:any, body:any, accessToken:any) => {
  try {
    const response = await axios.post(url,body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`

      },  
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



