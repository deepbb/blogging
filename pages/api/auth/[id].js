import dbConnect from "../../../utils";
import User from "../../../models/User"

export default async function handler(req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const post = await User.findById(id)
            res.status(200).json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}