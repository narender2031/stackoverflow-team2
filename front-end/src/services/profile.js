/**
 * This file will contain all the API calls to the server
 * relating to the user.
 */
import http from './http';

const baseURL = `${process.env.REACT_APP_API}/profile/`;

export const getAllProfile = async (body) => {
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

export const getExactProfile = async (body) => {
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



