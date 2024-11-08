import axios from 'axios';


const instance = axios.create({
    baseURL:"http://localhost:8000/api/instances",
});

export const addInstance = async(data)=>{
    try {
        console.log(data);
        const response = await instance.post('/',data);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getInstances = async()=>{
    try {
        const response = await instance.get('/');
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const getInstanceById = async(id)=>{
    try {
        const response = await instance.get(`/${id}`);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const updateInstance = async(id,data)=>{
    try {
        const response = await instance.put(`/${id}`,data);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const deleteInstance = async(id)=>{
    try {
        const response = await instance.delete(`/${id}`);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

