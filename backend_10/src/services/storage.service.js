const ImageKit = require('@imagekit/nodejs')

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile = async (buffer) => {
    const post =  imageKit.file.upload({
        file: buffer.toString('base64'),
        fileName: "image.jpg"
    })
}

module.exports = uploadFile