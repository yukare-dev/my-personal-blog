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
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const newPost = {
        title: title,
        summary: formData.get('summary') as string,
        content: formData.get('content') as string,
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric'}),
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