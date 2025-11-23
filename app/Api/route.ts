import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { sendSignUpemail } from "@/lib/inngest/funtions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpemail],
});
