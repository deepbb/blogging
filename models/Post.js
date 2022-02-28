import mongoose from "mongoose";

const PostSchema = new mongoose.Schema ({
        title:{
            type:String,
            unique:true
        },
        desc:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:false
        },
        photo:{
            type:String,
            required:false
        },
        categories:{
            type:Array,
            required:false
        }
    },
    { timestamps:true}
);


export default mongoose.models.Post || mongoose.model("Post", PostSchema);
