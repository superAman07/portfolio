'use client';
import React, { useState } from "react";
import Button from "../button/button";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:amanvishwa2806@gmail.com?subject=Contact%20Form%20Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            //   viewport={{ once: true }} // This ensures the animation happens only once when the element first comes into view
            className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 p-6"
        >
            <div className="container mx-auto justify-center flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Contact Form */}
                <motion.div
                    className="md:w-1/2 p-8"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }} // Animation triggers once when entering the viewport
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-2 text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <Button name="Send" />
                    </form>
                </motion.div>

                {/* Right Side - Contact Information */}
                <motion.div
                    className="md:w-1/2 bg-[#252525] text-white p-8 flex flex-col justify-center items-center"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }} // Animation triggers once when entering the viewport
                >
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <a
                            href="https://github.com/superAman07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/github.png"
                                alt="GitHub"
                                className="h-8 w-8"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aman-vishwakarma07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/linkedin.png"
                                alt="LinkedIn"
                                className="h-8 w-8"
                            />
                        </a>
                        <a
                            href="https://x.com/superAman_7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/twitter.png"
                                alt="Twitter"
                                className="h-8 w-8"
                            />
                        </a>
                        <a
                            href="mailto:amanvishwa2806@gmail.com"
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/new-post.png"
                                alt="Email"
                                className="h-8 w-8"
                            />
                        </a>
                        <a
                            href="tel:+918922810977" // Replace with your phone number
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/phone.png"
                                alt="Phone"
                                className="h-8 w-8"
                            />
                        </a>

                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/+918922810977" // Replace with your WhatsApp number (including country code, without + sign)
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6C733D] transition-colors duration-300"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/ffffff/whatsapp.png"
                                alt="WhatsApp"
                                className="h-8 w-8"
                            />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <Button name="Resume" href="/Resume.pdf" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
