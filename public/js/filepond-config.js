document.addEventListener('DOMContentLoaded', () => {
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode
    )

    FilePond.setOptions({
        stylePanelAspectRatio: 300/200,
        imageResizeTargetWidth: 300,
        imageResizeTargetHeight: 200,
        imagePreviewHeight: 300
    })

    FilePond.parse(document.body)
})
