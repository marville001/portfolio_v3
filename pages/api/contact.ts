// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    const { name, email, subject, message } = JSON.parse(req.body);

    const date = new Date().toISOString();

    try {
      
      res.status(200).json({ message: "Message sent successfully", success: true });

    } catch (error: any) {
      res.status(500).json({ message: "Couldn't send message, please try agai later", error: error.message, success: false });
    }

  } else {
    res.status(404).send({ message: "Route Not Found" })
  }

}
