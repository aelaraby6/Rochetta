import { Loader2 } from "lucide-react";

export default function GlobalLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <Loader2 className="w-12 h-12 animate-spin text-green-600" />
    </div>
  );
}
