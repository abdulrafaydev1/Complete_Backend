const ImageKit = require('@imagekit/nodejs')

const imagKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile = async (buffer) => {
    const result = await imagKit.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg'
    })
    return result
}

module.exports = uploadFile