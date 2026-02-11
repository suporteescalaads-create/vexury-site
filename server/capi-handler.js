
const crypto = require('crypto');
const axios = require('axios');

/**
 * Utilitário para hashing SHA-256 conforme exigido pela Meta
 */
function hashData(data) {
  if (!data) return null;
  return crypto
    .createHash('sha256')
    .update(data.trim().toLowerCase())
    .digest('hex');
}

/**
 * Configurações da Meta
 */
const PIXEL_ID = '809755415414227';
const ACCESS_TOKEN = 'EAAM11ei3atYBQsj8ZB6ANqF7W5OoQQr9ZBGiKOE72f36ZBXa717FSyFhaHZANQYH37s0afURIW67sv3uUDzx7WsDBslt9DprDjMlZASw3qZA7VjXl2QLJZB09413IgplDBnzN1yuPNv02i4z2QAQjioP1ZCqVtS6SobDgEdoTl7K6gLsjRXZAeyTP04vaeSZA2uQZDZD';

/**
 * Handler da Rota de Leads
 * Este código deve ser integrado ao seu servidor Express ou similar.
 */
async function handleFacebookConversion(req, res) {
  const { email, city, zip, eventId } = req.body;
  
  // Obter dados do cliente para melhor correspondência
  const clientIp = req.ip || req.headers['x-forwarded-for'] || '';
  const userAgent = req.headers['user-agent'] || '';

  try {
    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId, // CRITICAL: Deve ser igual ao enviado pelo navegador
          action_source: 'website',
          event_source_url: 'https://vexury.com/',
          user_data: {
            em: email ? [hashData(email)] : [],
            ct: city ? [hashData(city)] : [],
            zp: zip ? [hashData(zip)] : [],
            client_ip_address: clientIp,
            client_user_agent: userAgent,
          },
        },
      ],
    };

    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const response = await axios.post(url, payload);
    
    console.log('[CAPI Success]', response.data);
    res.status(200).json({ success: true, fb_response: response.data });
  } catch (error) {
    console.error('[CAPI Error]', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: error.response?.data?.error?.message || 'Internal Server Error' 
    });
  }
}

module.exports = { handleFacebookConversion };
