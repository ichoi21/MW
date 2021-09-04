const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        unique : true,
    },
    timestamps: true,
    tag: {
        type: String,
        required : true,
    },
    videoLink: {
        type: String,
        required : true,
    }
})

const Video = mongoose.model('video', videoSchema)

model.exports = Video;