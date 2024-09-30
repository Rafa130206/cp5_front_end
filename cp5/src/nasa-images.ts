// pages/api/images.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const images = [
    { id: 1, title: 'Imagem 1', src: '/NASA.jpg' },
    { id: 2, title: 'Imagem 2', src: '/NASA2.jpg' },
    { id: 3, title: 'Imagem 3', src: '/images/imagem3.jpg' },
    // Adicione mais imagens conforme necessário
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(images);
}
