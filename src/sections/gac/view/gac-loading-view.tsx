import { LoaderCircle } from "lucide-react";

export function GacLoadingView() {
  return (
    <main className="grid min-h-screen place-items-center bg-black text-white">
      <LoaderCircle className="size-12 animate-spin" strokeWidth={2.2} aria-label="Loading" />
    </main>
  );
}
