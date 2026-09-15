const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_API
})

const uploadFile = async (buffer) => {

    const result = await imagekit.file.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg'
    })

    return result
    
}

module.exports = uploadFile