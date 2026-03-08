// GA4 Event Tracking Helper — Devtimize
// Usage: trackEvent('cta_click', { button: 'Get a Quote', page: 'homepage' })

declare global {
  interface Window { gtag: (...args: any[]) => void; }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Pre-built tracking calls — import and use these directly in components

export const trackCTAClick = (buttonLabel: string, page: string) =>
  trackEvent('cta_click', { button_label: buttonLabel, page_location: page });

export const trackWhatsAppClick = (page: string) =>
  trackEvent('whatsapp_click', { page_location: page });

export const trackChatbotOpen = () =>
  trackEvent('chatbot_open', { engagement_type: 'devbot' });

export const trackChatbotLead = () =>
  trackEvent('chatbot_lead', { conversion: true });

export const trackFormSubmit = (formName: string) =>
  trackEvent('generate_lead', { form_name: formName, method: 'contact_form' });

export const trackProjectView = (projectName: string) =>
  trackEvent('project_view', { project_name: projectName });

export const trackBlogEngagement = (postTitle: string) =>
  trackEvent('blog_engagement', { post_title: postTitle, engaged: true });

export const trackServiceView = (serviceName: string) =>
  trackEvent('service_view', { service_name: serviceName });
