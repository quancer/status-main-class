// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { students } from "@/utils/data";

export default function handler(req, res) {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ students: students });
}
