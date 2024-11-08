const Instance = require("../models/Instance");

const addInstance = async(req,res)=>{
    try {
        const data = req.body;
        const instance = new Instance(data);
        await instance.save();
        res.status(201).json("Added Instance");
    } catch (error) {
        res.status(500).json("Error creating instance");
    }
}

const getInstances = async(req,res)=>{
    try {
        const data = await Instance.find();
        let instances = JSON.parse(JSON.stringify(data));
        if(!instances) return res.status(404).json("Not Found");
        for (let instance of instances){
            instance.pending = instance.alloted - instance.checkin;
        }
        res.status(200).json(instances);
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

const getInstancesById = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await Instance.findById(id);
        if(!data) return res.status(404).json("Not Found");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

const updateInstance = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedData = await Instance.findByIdAndUpdate(id,data,{new:true});
        if(!updatedData) return res.status(404).json("Not Found");
        res.status(200).json("Instance updated");
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

const deleteInstance = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await Instance.findByIdAndDelete(id);
        if(!data) return res.status(404).json("Not Found");
        res.status(200).json("Instance deleted");
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

module.exports = {
    addInstance,
    getInstances,
    getInstancesById,
    updateInstance,
    deleteInstance
}

