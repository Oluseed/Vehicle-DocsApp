const Vehicle = require('../models/Vehicle')
const Document = require('../models/Document')



const create_vehicle_papers = async (req, res) => {
    const { _id } = req.user

    const vehicles = await Vehicle.find({ userId: _id }).lean()
    
    res.status(200).render('document/create_new_papers', {
        layout: 'uploads_layout',
        msg: req.flash('msg'),
        vehicles: vehicles,
        user: req.user
    })
}

const store_vehicle_papers = async (req, res) => {
    console.log(req.body)

    const document = new Document({
        userId: _id,
        vehicleId: req.body.vehicleId,
        docType: 'Vehicle-Papers',
        data: {
            name: req.body.doc_name,
            dob: req.body.dob,
            address: req.body.address,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            plateType: req.body.plateType,
            location: req.body.location
        },
        status: 'processing'
    })
    savePhoto(document, req.body.photo)

    const data = await document.save()
    
    req.flash('msg', 'Document Uploaded sucessfully')
    res.status(200).redirect(`/document/vehicle-papers/${data._id}`)
}

const show_vehicle_papers = async (req, res) => {
    const { id } = req.params

    const document = await Document.findOne({ _id: id }).lean()
    
    res.send(document)
}

const savePhoto = (document, photoEncoded) => {
    let imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

    if (photoEncoded === null) return
    const photo = JSON.parse(photoEncoded)
    if (imageMimeTypes.includes(cover.type)) {
        document.photo = new Buffer.from(photo.data, 'base64')
        book.photoType = photo.type
    }
}

module.exports = {
    create_vehicle_papers,
    store_vehicle_papers,
    show_vehicle_papers
}