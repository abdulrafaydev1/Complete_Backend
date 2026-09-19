const ImageKit = require("@imagekit/nodejs");

const imageKitKey = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

const uploadFile = async (file) => {
    const result = await imageKitKey.files.upload({
        file,
        fileName: "music_" + Date.now() + ".mp3",
        folder: "/complete_backend_21/music"
    });

    return result;
};

module.exports = uploadFile;