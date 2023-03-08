Filepond.registerPlugin(
    FilepondPluginImagePreview,
    FilepondPluginImageResize,
    FilepondPluginFileEncode,
)

Filepond.setOptions({
    stylePanelAspectRatio: 150 /100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})

// const pond = Filepond.create({
//     multiple: false,
//     name: 'filepond'
// })

// document.body.appendChild(pond.element)
Filepond.parse(document.body)