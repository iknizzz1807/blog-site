import type { PageServerLoad } from "./$types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "$lib/firebase";
import type { DocumentData } from "firebase/firestore";

interface BlogData extends DocumentData {
  id: String;
  title: string;
  previewText: string;
  authorImage: string;
  thumbnailImage: string;
  authorName: string;
  datePublished: string;
  readTime: string;
}

export const load: PageServerLoad = async () => {
  const blogsCollection = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCollection);

  const blogs = blogSnapshot.docs.map((doc) => {
    const data = doc.data() as BlogData;
    return {
      id: doc.id,
      title: data.title,
      previewText: data.previewText,
      authorImage: data.authorImage,
      thumbnailImage: data.thumbnailImage,
      authorName: data.authorName,
      datePublished: data.datePublished,
      readTime: data.readTime,
    };
  });

  return {
    blogs,
  };
};
