
import path from "path";
import matter from "gray-matter";
import fs from "fs";

function getMDFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDFiles(filepath: string) {
    let rawContent = fs.readFileSync(filepath, "utf-8");
    return matter(rawContent);
}

function getMDData(dir: string) {
    let mdFiles = getMDFiles(dir);
    return mdFiles.map((file)=> {
        let {data: metadata, content } = readMDFiles(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getBlogPosts() {
    return getMDData(path.join(process.cwd(), "posts"));
}
