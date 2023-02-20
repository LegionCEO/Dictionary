import mongoose from "mongoose";

const Dictionary = new mongoose.Schema({
    DictionaryName: {type: String, required: true},
    Words: [{type: mongoose.Types.ObjectId, ref: "Word"}],
    UserOwner: {type: mongoose.Types.ObjectId}
})

export default mongoose.model("Dictionary", Dictionary, "Dictionaries")
