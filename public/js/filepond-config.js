document.addEventListener('DOMContentLoaded', () => {
    Filepond.registerPlugin(
        FilepondPluginImagePreview,
        FilepondPluginImageResize,
        FilepondPluginFileEncode
    )

    Filepond.setOptions({
        stylePanelAspectRatio: 150 /100,
        imageResizeTargetWidth: 100,
        imageResizeTargetHeight: 150
    })

    Filepond.parse(document.body)
})
