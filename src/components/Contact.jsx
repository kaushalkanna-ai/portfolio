import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Contact = () => {


    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 min-w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl w-full text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-gray-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-16"
                >
                    <ContactForm />
                </motion.div>

                {/* Direct Email Fallback */}

            </div>
        </section>
    );
};

export default Contact;
