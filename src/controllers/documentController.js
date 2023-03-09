const Vehicle = require('../models/Vehicle')
const Document = require('../models/Document')
const photoService = require('../services/photoService')



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
    const document = new Document({
        userId: req.user._id,
        vehicleId: req.body.vehicleId,
        docType: 'Vehicle-Papers',
        data: {
            doc_name: req.body.doc_name,
            dob: req.body.dob,
            address: req.body.address,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            reg_type: req.body.reg_type,
            plate_type: req.body.plate_type,
            location: req.body.location
        },
        status: 'processing'
    })
    photoService.savePhoto(document, req.body.photo)

    const data = await document.save()
    
    req.flash('msg', 'Document Uploaded sucessfully')
    res.status(200).redirect(`/document/vehicle-papers/${data._id}`)
}

const show_vehicle_papers = async (req, res) => {
    const { id } = req.params

    const document = await Document.findOne({ _id: id }).populate('vehicleId').lean()
                                
    document.photoPath = `data:${document.photoType};charset=utf-8;base64,${document.photo.toString('base64')}`
    
    res.status(200).render('document/show_new_papers', {
        msg: req.flash('msg'),
        document: document,
        user: req.user
    })
}


module.exports = {
    create_vehicle_papers,
    store_vehicle_papers,
    show_vehicle_papers
}