import UserData from "../model/user.js";

export const getUsers = async (req, res) => {
    try {
        const Users = await UserData.find();
        res.status(200).json(Users);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
export const getUser = async (req, res) => {
    try {
        const userID = req.params.id;
        const User = await UserData.findById(userID)
        if(User){
            res.status(200).json(User);
        }
        else res.status(404).json({ message: "Not Found" });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
