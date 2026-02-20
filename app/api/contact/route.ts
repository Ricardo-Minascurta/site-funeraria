import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { Nome, Email, Telefone, Assunto, Mensagem } = body

    if (!Nome || !Email || !Assunto || !Mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios em falta.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Memória Eternus <contacto@memoriaeternus.com>',
      to: ['geralmemoriaeternus@gmail.com'],
      replyTo: Email,
      subject: `[Website] ${Assunto} - ${Nome}`,
      html: `
        <h2>Novo contacto via website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Nome</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${Nome}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${Email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Telefone</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${Telefone || 'Não indicado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Assunto</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${Assunto}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;">Mensagem</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${Mensagem}</td>
          </tr>
        </table>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email.', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API contact error:', err)
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    )
  }
}
