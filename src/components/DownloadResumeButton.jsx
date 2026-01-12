import React from 'react';
import Button from './Button';
import { Eye } from 'lucide-react';

const DownloadResumeButton = ({ variant = 'primary', className = '' }) => {
    // Map old variants to new Button variants
    const getButtonProps = () => {
        switch (variant) {
            case 'nav':
                return {
                    variant: 'ghost',
                    size: 'sm',
                    className: `border border-blue-500/30 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-full ${className}`
                };
            case 'glass':
                return {
                    variant: 'glass',
                    size: 'lg',
                    className: className
                };
            default:
                return {
                    variant: 'primary', // Changed from secondary to primary as default for consistency
                    size: 'lg',
                    className: className
                };
        }
    };

    return (
        <Button
            href="/Kaushal_Dontula_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon={Eye}
            aria-label="View Resume"
            {...getButtonProps()}
        >
            {variant === 'nav' ? 'Resume' : 'View Resume'}
        </Button>
    );
};

export default DownloadResumeButton;
