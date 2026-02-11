
export const generateEventId = () => {
  return 'evt_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};

export const trackLeadFront = (eventId: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      eventID: eventId
    });
    console.log(`[Pixel] Evento Lead disparado: ${eventId}`);
  }
};

export const sendToCAPI = async (data: {
  email?: string;
  city?: string;
  zip?: string;
  eventId: string;
}) => {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error('[CAPI] Erro ao enviar para o servidor:', error);
    return false;
  }
};
