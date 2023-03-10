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
        status: 'submitted'
    })
    photoService.savePhoto(document, req.body.photo)

    const data = await document.save()
    
    req.flash('msg', 'Document Uploaded successfully')
    res.status(200).redirect(`/document/vehicle-papers/${data._id}`)
}

const show_vehicle_papers = async (req, res) => {
    const { id } = req.params

    const document = await Document.findOne({ _id: id }).populate('vehicleId').lean()
                                
    document.photoPath = `data:${document.photoType};charset=utf-8;base64,${document.photo.toString('base64')}`
    
    res.status(200).render('document/show_new_papers', {
        msg: req.flash('msg'),
        document: document,
        user: req.user,
        deleteCheck: document.status === 'submitted'
    })
}

const destroy_vehicle_papers = async (req, res) => {
    try {
        const { id } = req.params
        await Document.findByIdAndDelete(id)
        
        req.flash('msg', 'Form Deleted Successfully!')
        res.redirect('/document/vehicle-papers')
    } catch (err) {
        res.status(404).json({ err })
    }
}


// Driver license
const create_driver_license = async (req, res) => {
    const { _id } = req.user
    
    res.status(200).render('document/create_driver_license', {
        layout: 'uploads_layout',
        msg: req.flash('msg'),
        user: req.user
    })
}

const store_driver_license = async (req, res) => {
    const document = new Document({
        userId: req.user._id,
        docType: 'Driver-Licence',
        data: {
            licence_no: req.body.license_no,
            licence_name: req.body.license_name,
            licence_type: req.body.license_type,
            location: req.body.location
        },
        status: 'submitted'
    })
    photoService.savePhoto(document, req.body.photo)

    const data = await document.save()
    
    req.flash('msg', 'Document Uploaded successfully')
    res.status(200).redirect(`/document/driver-license/${data._id}`)
}

const show_driver_license = async (req, res) => {
    const { id } = req.params

    const document = await Document.findOne({ _id: id }).lean()
                                
    document.photoPath = `data:${document.photoType};charset=utf-8;base64,${document.photo.toString('base64')}`
    
    res.status(200).render('document/show_driver_license', {
        msg: req.flash('msg'),
        document: document,
        user: req.user,
        deleteCheck: document.status === 'submitted'
    })
}

const destroy_driver_license = async (req, res) => {
    try {
        const { id } = req.params
        await Document.findByIdAndDelete(id)
        
        req.flash('msg', 'Form Deleted Successfully!')
        res.redirect('/document/driver-license')
    } catch (err) {
        res.status(404).json({ err })
    }
}

// Change Of Ownership
const create_ownership_change = async (req, res) => {
    const { _id } = req.user
    
    const vehicles = await Vehicle.find({ userId: _id }).lean()
    
    res.status(200).render('document/create_ownership_change', {
        layout: 'uploads_layout',
        msg: req.flash('msg'),
        vehicles: vehicles,
        user: req.user
    })
}

const store_ownership_change = async (req, res) => {
    const document = new Document({
        userId: req.user._id,
        vehicleId: req.body.vehicleId,
        docType: 'Ownership-Change',
        data: {
            doc_name: req.body.doc_name,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            occupation: req.body.occupation,
            dob: req.body.dob,
            address: req.body.address,
            reg_type: req.body.reg_type,
            plate_type: req.body.plate_type,
            location: req.body.location
        },
        status: 'submitted'
    })
    photoService.savePhoto(document, req.body.photo)

    const data = await document.save()
    
    req.flash('msg', 'Document Uploaded successfully')
    res.status(200).redirect(`/document/change-of-ownership/${data._id}`)
}

const show_ownership_change = async (req, res) => {
    const { id } = req.params

    const document = await Document.findOne({ _id: id }).populate('vehicleId').lean()
                                
    document.photoPath = `data:${document.photoType};charset=utf-8;base64,${document.photo.toString('base64')}`
    
    res.status(200).render('document/show_ownership_change', {
        msg: req.flash('msg'),
        document: document,
        user: req.user,
        deleteCheck: document.status === 'submitted'
    })
}

const destroy_ownership_change = async (req, res) => {
    try {
        const { id } = req.params
        await Document.findByIdAndDelete(id)
        
        req.flash('msg', 'Form Deleted Successfully!')
        res.redirect('/document/change-of-ownership')
    } catch (err) {
        res.status(404).json({ err })
    }
}



module.exports = {
    create_vehicle_papers,
    store_vehicle_papers,
    show_vehicle_papers,
    destroy_vehicle_papers,
    create_driver_license,
    store_driver_license,
    show_driver_license,
    destroy_driver_license,
    create_ownership_change,
    store_ownership_change,
    show_ownership_change,
    destroy_ownership_change
}