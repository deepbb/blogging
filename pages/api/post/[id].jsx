import dbConnect from "../../../utils";
import Post from "../../../models/Post"

export default async function handler(req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const post = await Post.findById(id)
            res.status(200).json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        try{
            const post = await Post.create(req.body)
            res.status(200).json(post)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "PUT") {
        try{
            const post = await Post.findByIdAndUpdate(id,req.body,{
                new:true,
            })
            res.status(200).json(post)
        } catch(err) {
            res.status(500).json(err)
        }
    }


    if(method === "DELETE") {
        try{
            const post =  await Post.findByIdAndDelete({_id:id})
            res.status(200).json(post)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}