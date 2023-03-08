const { Schema, model } = require('mongoose')

const documentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    vehicleId: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    docType: {
        type: String,
        required: true
    },
    photo: {
        type: Buffer,
        required: true
    },
    photoType: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['processing', 'completed']
    }
}, {
    timestamps: true
})

documentSchema.virtual('photoPath').get(() => {
    if (this.photo != null && this.photoType != null) {
        return `data:${this.photoType};charset=utf-8;base64,${this.photo.toString('base64')}`
    }
})

module.exports = model('Document', documentSchema)