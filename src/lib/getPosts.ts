import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getPostsFiles(dir : string) {
    return fs.readdirSync(dir).filter((file)=>path.extname(file) === ".md");
}

function readPostData(filepath : fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filepath, "utf-8");
    return matter(rawContent);
}

function getPostData(dir: string) {
    let postFiles = getPostsFiles(dir);

    return postFiles.map((file)=>{
        let {data:metadata, content} = readPostData(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));
        return {
            metadata,
            slug,
            content,
        };
    })
}

export function getBlogPosts() {
    return getPostData(path.join(process.cwd(), "posts", "contents"));
}