import React from "react";

const Contact = () => {
    return (
        <section className="px-4 mx-auto max-w-screen-md">
            <h2 className="heading text-center">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text__para">
                Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="form__label">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="form__input mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="form__label">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="form__input mt-1"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn__primary">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
