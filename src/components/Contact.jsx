import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://formspree.io/f/xqallrev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setIsSubmitting(false);

    if (result.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-24 bg-gray-900 text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl mx-auto bg-gray-800 rounded-[3rem] flex flex-col md:flex-row shadow-xl overflow-hidden">

        {/* Left Text Content */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Reach Me</h2>
          <p className="text-md text-gray-300 mb-4">
            Hello! Thank you so much for your time!
          </p>
          <p className="text-gray-400 text-sm">
            Feel free to drop me an email through this form if you want to contact me on any occasion.
          </p>
        </div>

        {/* Right Form Content */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#0e1e35] to-[#1c3b67] p-10 rounded-t-[3rem] md:rounded-tr-none md:rounded-l-[3rem]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-6 py-2 bg-white rounded-md text-blue-600 font-semibold border border-blue-400 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send →"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="text-center mt-10 text-sm text-gray-400">
        © 2025 Thathsarani Hasareka
      </div> */}
    </section>
  );
}

export default Contact;
