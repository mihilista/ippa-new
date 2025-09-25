import sendgrid from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(req: NextRequest) {
    const { name, phone, email, message, subject = 'Nová zpráva' } = await req.json();

    try {
        await sendgrid.send({
            to: 'info@ippa.cz',
            bcc: 'info@aristoclick.cz',
            from: 'info@aristoclick.cz',
            replyTo: email,
            subject: `IPPA - ${subject}`,
            html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${message ? `<p><strong>Zpráva:</strong> ${message}</p>` : ''}
      `,
        });

        return NextResponse.json({ error: '' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}
