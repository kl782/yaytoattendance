import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { className } = req.body;

    try {
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/17695527/2orzful/';
        const result = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: `${className}`,
            }),
        });

        if (!result.ok) throw new Error('Webhook sending failed');

        res.status(200).json({ message: 'Webhook sent successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}