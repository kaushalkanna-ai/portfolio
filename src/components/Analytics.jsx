import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Replace with your actual Measurement ID
const GA_MEASUREMENT_ID = 'G-LZ9C4FBHG8';

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 only once
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
            window.GA_INITIALIZED = true;
        }
    }, []);

    useEffect(() => {
        // Send pageview with valid location.pathname
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }, [location]);

    return null;
};

export default Analytics;
