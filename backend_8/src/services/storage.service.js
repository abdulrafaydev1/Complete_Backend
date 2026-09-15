const imagekit = require('@imagekit/nodejs')

const imagekit = new imagekit({
    privateKey: 'private_XCy1SXKp2hCy8Motspw4VTPiU1g='
})

const uploadFile = async (buffer) => {
    const result = await imagekit.Client.upload({
        file: buffer,
        filename: 'image.jpg'
    })

    return result
}

module.exports = uploadFile