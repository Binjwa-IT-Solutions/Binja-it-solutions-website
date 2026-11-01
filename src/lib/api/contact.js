import { notifyError } from './request';

const LIVE_CRM_ENDPOINT = 'https://dh8ut0pnb37w5.cloudfront.net/api/contact';

export const submitContactForm = async (formData) => {
    try {
        // First try the Next.js local serverless route /api/contact (which forwards to live CRM)
        let response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // If local route returns 404 or fails, call the live CRM endpoint directly
        if (!response.ok) {
            console.warn("/api/contact not ok, falling back to direct CRM endpoint");
            response = await fetch(LIVE_CRM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        }

        if (response.ok) {
            const data = await response.json();
            return {
                success: true,
                message: data.message || "Message sent successfully!",
                leadId: data.data?.leadCode || data.leadId || data.data?._id,
                data: data.data || null,
            };
        } else {
            const errorResult = await response.json().catch(() => ({ message: "An unexpected error occurred. Please try again." }));
            throw new Error(errorResult.message);
        }
    } catch (error) {
        console.error("Error submitting contact form:", error.message);
        notifyError(error.message || "Failed to submit contact form.");
        throw error;
    }
};
