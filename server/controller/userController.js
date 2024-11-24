import User from "../model/userModel.js";



// create operation
export const create = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email})
        if(userExist) {
            return res.status(400).json({message: "User already exists."})
        }
        const savedData = await newUser.save();
        // res.status(200).json(savedData);
        res.status(200).json({ message: "User created successfully."});
    }
    catch(error){
        res.status(500).json({errorMessage: error.message});
    }
};


// reading operation
export const getAllUsers = async(req,res) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({message: "user data not found."});       
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
};

export const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "user not found."});       
        }
        else{
            res.status(200).json(userExist);
        }
    } catch (error) {
        res.status(500).json({errorMessage: error.message});

    }
};

// update operation
export const update = async (req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "user not found."});       
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true});
        // res.status(200).json(updatedData);
        
        
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
};

// delete operation

export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "user not found."});       
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully."})
        
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
        
    }
}