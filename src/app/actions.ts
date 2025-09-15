'use server';

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import fs from 'fs';
import path from 'path';

interface Post {
    title: string;
    summary: string;
    content: string;
    date: string;
    slug: string;
}

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const summary = formData.get('summary') as string;
    const imageFile = formData.get('image') as File;
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    if (imageFile.size === 0) {
        throw new Error("No image file was uploaded")
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = Date.now() + "-" + imageFile.name.replaceAll("", "_");
    const savePath = path.join(process.cwd(), 'public/images', fileName);

    try {
        await fs.promises.writeFile(savePath, buffer);
    } catch (error) {
        console.error("Error saving image:", error);
        throw new Error("Failed to save image");
    }

    const imageUrl = `/images/${fileName}`;

    const newPost = {
        title: title,
        summary: formData.get('summary') as string,
        content: formData.get('content') as string,
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric'}),
        image: imageUrl,
        slug: slug,
    };

    const filePath = path.join(process.cwd(), 'posts.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const posts: Post[] = JSON.parse(fileContent);

    posts.unshift(newPost);

    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

    revalidatePath('/');
    redirect('/');
}