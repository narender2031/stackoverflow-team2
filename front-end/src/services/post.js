/**
 * This file will contain all the API calls to the server
 * relating to the user.
 */
import http from './http';

const baseURL = `${process.env.REACT_APP_API}/posts/`;

export const getAllPosts = async (body) => {
  return new Promise(async (resolve, reject) => {
    console.log(body);
    
    try {
      const res = await http.get(`${baseURL}`, body);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const getExactPost = async (body) => {
  console.log(body);
  
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}`, body);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
export const getExactUserPost = async (body) => {
    console.log(body);
    
    return new Promise(async (resolve, reject) => {
      try {
        const res = await http.get(`${baseURL}`, body);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };

export const savePost = async (body) => {
    
    return new Promise(async (resolve, reject) => {
      try {
        const res = await http.post(baseURL+'add_post', body);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };



