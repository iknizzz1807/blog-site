import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getDoc, doc } from "firebase/firestore";
import { db } from "$lib/firebase";
import type { DocumentData } from "firebase/firestore";

interface BlogData extends DocumentData {
  id: String;
  title: string;
  authorImage: string;
  thumbnailImage: string;
  authorName: string;
  datePublished: string;
  readTime: string;
}

export const load: PageServerLoad = async ({ params }) => {
  try {
    const docRef = doc(db, "blogs", params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as BlogData;
      return {
        blog: {
          id: docSnap.id,
          title: data.title,
          authorImage: data.authorImage,
          thumbnailImage: data.thumbnailImage,
          authorName: data.authorName,
          datePublished: data.datePublished,
          readTime: data.readTime,
        },
      };
    } else {
      throw error(404, "Blog post not found");
    }
  } catch (e) {
    console.error("Error fetching blog post:", e);
    throw error(500, "Error fetching blog post");
  }
};
