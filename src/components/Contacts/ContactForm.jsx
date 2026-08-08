import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import services from '../../data/services';

const FloatingInput = ({ label, type = 'text', name, value, onChange, required, textarea }) => {
    const Component = textarea ? 'textarea' : 'input';

        return (
            <div className="relative">
            <Component
                type={!textarea ? type : undefined}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder=" "
                rows={textarea ? 5 : undefined}
                className="peer w-full bg-transparent border border-black/15 rounded-md px-4 pt-6 pb-2 text-[#111315] text-sm focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
            />
            <label
                htmlFor={name}
                className="absolute left-4 top-4 text-black/40 text-sm transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-black/40
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500
                [&:not(:placeholder-shown)]:top-2 [&:not(:placeholder-shown)]:text-xs"
            >
                {label}
            </label>
            </div>
        )
    }

    const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 1200);
    };

    if (status === 'success') {
        return (
            <div className="bg-[#f1f1f1] border border-black/5 rounded-2xl shadow-md p-10 flex flex-col items-center text-center h-full justify-center">
                <FaCheckCircle className="text-red-500 w-14 h-14 mb-5" />
                <h3 className="text-[#111315] text-xl font-bold mb-2">Message Sent</h3>
                <p className="text-[#111315]/60 text-sm max-w-xs mb-6">
                Thanks for reaching out — our team will get back to you within one business day.
                </p>
                <button
                onClick={() => setStatus('idle')}
                className="text-red-500 text-sm font-semibold hover:underline"
                >
                Send another message
                </button>
            </div>
        );
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-[#f1f1f1] border border-black/5 rounded-2xl shadow-md p-8 md:p-10"
        >
            <h3 className="text-[#111315] text-xl font-bold mb-1">Send Us a Message</h3>
            <p className="text-[#111315]/50 text-sm mb-8">
                Fill in the details below and we'll get back to you shortly.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <FloatingInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <FloatingInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <FloatingInput
                label="Phone Number"
                type="tel:+2348168973060"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />

                <div className="relative">
                <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border border-black/15 rounded-md px-4 pt-6 pb-2 text-[#111315] text-sm focus:outline-none focus:border-red-500 transition-colors duration-300 appearance-none"
                >
                    <option value="" disabled></option>
                    {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                        {service.title}
                    </option>
                    ))}
                </select>
                <label
                    htmlFor="service"
                    className="absolute left-4 top-2 text-xs text-black/40 peer-focus:text-red-500 transition-colors duration-300 pointer-events-none"
                >
                    Service of Interest
                </label>
                </div>
            </div>

            <div className="mb-8">
                <FloatingInput
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                textarea
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300"
            >
                {status === 'loading' ? (
                <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                </>
                ) : (
                'Send Message'
                )}
            </button>
        </form>
    )
}

export default ContactForm