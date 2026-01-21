import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-LZ9C4FBHG8';

// Event tracking functions
export const trackEvent = (category, action, label = null, value = null) => {
    if (window.GA_INITIALIZED) {
        ReactGA.event({
            category,
            action,
            label,
            value
        });
    }
};

export const trackButtonClick = (buttonName, location = null) => {
    trackEvent('Button', 'click', buttonName, location);
};

export const trackFormSubmission = (formName, success = true) => {
    trackEvent('Form', success ? 'submit_success' : 'submit_error', formName);
};

export const trackProjectView = (projectSlug) => {
    trackEvent('Project', 'view', projectSlug);
};

export const trackDownload = (fileName) => {
    trackEvent('Download', 'click', fileName);
};

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
            window.GA_INITIALIZED = true;
        }
    }, []);

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }, [location]);

    return null;
};

export default Analytics;
