import { redirect } from "next/navigation";
import type { Route } from "next";

export default async function AppIndex(
  props: PageProps<'/app'>
) {
  redirect(`/app/overview` as Route);
}
