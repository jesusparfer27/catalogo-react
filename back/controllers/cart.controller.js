import { connectDB } from '../data/mongodb.js'


connectDB();


export const getAllAlbums = async (req, res, next) => {
    try {
        console.log("albums")
        const albums = await Album.find().populate('');
        res.json(albums);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}