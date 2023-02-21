import mongoose from "mongoose";

const Dictionary = new mongoose.Schema({
    DictionaryName: {type: String, required: true},
    Words: [{
        WordName: {type: String, required: true},
        Trans: {type: String},
        Translation: {type: String, required: true},
        isLearned: {type: Boolean, required: true, default: false},
    }],
    UserOwner: {type: mongoose.Types.ObjectId}
})

export default mongoose.model("Dictionary", Dictionary, "Dictionaries")
