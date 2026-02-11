
export const generateEventId = () => {
  return 'vexury_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
};

export const trackLeadFront = (eventId: string, contentName: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: contentName,
      eventID: eventId
    });
    console.debug(`[Meta Pixel] Lead Tracked: ${contentName} (ID: ${eventId})`);
  }
};

export const sendToCAPI = async (data: {
  email?: string;
  city?: string;
  zip?: string;
  eventId: string;
  contentName: string;
}) => {
  try {
    // Note: Em produção, substitua pela URL real do seu servidor CAPI
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source_url: window.location.href,
        timestamp: Math.floor(Date.now() / 1000)
      }),
    });
    
    if (!response.ok) throw new Error('CAPI request failed');
    
    console.debug(`[Meta CAPI] Event Sent: ${data.contentName}`);
    return true;
  } catch (error) {
    console.error('[Meta CAPI] Error:', error);
    return false;
  }
};
