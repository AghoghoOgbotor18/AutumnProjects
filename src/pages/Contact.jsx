import React from 'react'
import ContactHero from '../components/Contacts/ContactHero'
import ContactInfoPanel from '../components/Contacts/ContactInfoPanel'
import ContactForm from '../components/Contacts/ContactForm'
import ContactMap from '../components/Contacts/ContactMap'

const Contact = () => {
    return (
        <div>
            <ContactHero />

            <section className="bg-[#f1f1f1] py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
                    <ContactForm />
                    <ContactInfoPanel />
                </div>
            </section>

            <ContactMap />
        </div>
    )
}

export default Contact