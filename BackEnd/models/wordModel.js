import mongoose from "mongoose";

const Word = new mongoose.Schema({
    WordName: {type: String, required: true},
    Trans: {type: String},
    Translation: {type: String, required: true},
    isLearned: {type: Boolean, required: true, default: false},
    Dictionary: {type: mongoose.Types.ObjectId}
})

export default mongoose.model("Word", Word, "Words")
