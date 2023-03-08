const savePhoto = (document, photoEncoded) => {
    let imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

    if (photoEncoded === null) return
    const photo = JSON.parse(photoEncoded)
    if (imageMimeTypes.includes(photo.type)) {
        document.photo = new Buffer.from(photo.data, 'base64')
        document.photoType = photo.type
    }
}

module.exports = {
    savePhoto
}