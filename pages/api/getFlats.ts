// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { flatMocks } from '../../lib/mock/mock';
import { FlatType } from '../../lib/types/entities';
type Data = {
  data: FlatType[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: flatMocks });
}
