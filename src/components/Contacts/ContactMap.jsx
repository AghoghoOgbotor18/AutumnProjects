import React from 'react'

const ContactMap = () => {
    return (
        <section className="h-[400px] w-full bg-[#0B0C0E]">
            <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Port+Harcourt,+Rivers+State,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </section>
    )
}

export default ContactMap