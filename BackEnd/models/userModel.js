import mongoose from "mongoose";

const User = new mongoose.Schema({
    UserName: {type: String, required: true},
    Dictionaries: [{type: mongoose.Types.ObjectId, ref: "Dictionary"}]
})

export default mongoose.model("User", User, "Users")
