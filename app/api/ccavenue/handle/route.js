import { headers } from 'next/headers';
import pb from '@/lib/zep-pocketbase';
import CCAvenue from '@/utils/CCAvenue';

const CONFERENCE_ID = 'qkx4mqss1mif7xk';

export async function POST(req) {
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const requestUrl = new URL(req.url);
  const params = requestUrl.searchParams;

  try {
    const formData = await req.formData();
    const encResp = formData.get('encResp');

    if (!encResp) {
      return Response.redirect(`${protocol}://${host}/payment/failed`);
    }

    const decryptedData = CCAvenue.redirectResponseToJson(encResp);
    const isSuccessfulPayment = decryptedData.order_status === 'Success';

    if (isSuccessfulPayment) {
      const body = {
        fullname: params.get('fullname') || '',
        email: params.get('email') || '',
        organization: '',
        designation: '',
        adress: params.get('adress') || '',
        city: params.get('city') || '',
        state: params.get('state') || '',
        zip_code: params.get('zip_code') || '',
        country: params.get('country') || '',
        phone_no: params.get('phone_no') || '',
        conf_date: new Date().toISOString(),
        ticket_type: params.get('ticket_type') || '',
        ticket_category: params.get('ticket_category') || '',
        ticket_name: params.get('ticket_name') || '',
        conference: CONFERENCE_ID,
      };

      if (params.get('user')) {
        body.user = params.get('user');
      }

      await pb.collection('conf_registration').create(body);
    }

    const redirectPath = isSuccessfulPayment ? '/payment/success' : '/payment/failed';
    return Response.redirect(`${protocol}://${host}${redirectPath}`);
  } catch (error) {
    console.error('Payment handling failed:', error);
    return Response.redirect(`${protocol}://${host}/payment/failed`);
  }
}
