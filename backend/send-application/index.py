import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    """Отправка заявки от предпринимателя на email фонда"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    email = body.get('email', '—')
    program = body.get('program', '—')
    comment = body.get('comment', '—')

    program_labels = {
        'start': 'Микрозаём «Старт» — до 500 тыс. ₽',
        'razvitie': 'Микрозаём «Развитие» — до 3 млн ₽',
        'maximum': 'Микрозаём «Максимум» — до 5 млн ₽',
        'guarantee': 'Гарантийная поддержка',
        'consult': 'Консультация',
    }
    program_label = program_labels.get(program, program)

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1a56db; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">🏢 Новая заявка с сайта ФПП Таганрог</h2>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; color: #64748b; width: 160px; vertical-align: top;">Имя:</td>
                    <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">{name}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Телефон:</td>
                    <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">{phone}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Email:</td>
                    <td style="padding: 10px 0; color: #0f172a;">{email}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Программа:</td>
                    <td style="padding: 10px 0; color: #1a56db; font-weight: bold;">{program_label}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Комментарий:</td>
                    <td style="padding: 10px 0; color: #0f172a;">{comment}</td>
                </tr>
            </table>
            <div style="margin-top: 20px; padding: 12px 16px; background: #dbeafe; border-radius: 6px; font-size: 13px; color: #1e40af;">
                Заявка поступила с сайта ФПП Таганрога. Свяжитесь с заявителем в течение 1 рабочего дня.
            </div>
        </div>
    </body>
    </html>
    """

    from_email = os.environ['SMTP_FROM_EMAIL']
    to_email = '391-891@mail.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {name} — ФПП Таганрог'
    msg['From'] = f'ФПП Таганрог <{from_email}>'
    msg['To'] = to_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
