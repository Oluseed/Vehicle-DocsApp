document.addEventListener('DOMContentLoaded', () => {
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode
    )

    FilePond.setOptions({
        stylePanelAspectRatio: 150/100,
        imageResizeTargetWidth: 100,
        imageResizeTargetHeight: 150,
        imagePreviewHeight: 300
    })

    FilePond.parse(document.body)
})
