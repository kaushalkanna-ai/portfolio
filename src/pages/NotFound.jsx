import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Compass } from 'lucide-react';
import ReactGA from "react-ga4";
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.event({
            category: 'Error',
            action: '404',
            label: window.location.pathname
        });
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
            <SEO
                title="404 | Page Not Found"
                description="The page you are looking for does not exist."
                url="/404"
            />

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <Compass className="w-24 h-24 text-blue-500 dark:text-blue-400 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold mb-6 text-gray-800 dark:text-slate-200"
                >
                    Lost in Space?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-slate-400 mb-10 text-lg leading-relaxed"
                >
                    The coordinates you entered don't seem to match any known sector of this portfolio.
                    Let's get you back to solid ground.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button
                        href="/"
                        variant="primary"
                        size="lg"
                        icon={Home}
                    >
                        Return to Mission Control
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
