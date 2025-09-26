import {getPosts} from '@/lib/posts';
import { Insights } from "@/components/insights";

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <Insights posts={posts}></Insights>
  );
}
