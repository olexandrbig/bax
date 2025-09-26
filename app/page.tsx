import {getPosts} from "@/lib/posts";
import { Landing } from "@/components/landing";

export default async function MainPage() {
  const posts = await getPosts();

  return (
    <Landing posts={posts}></Landing>
  );
}
