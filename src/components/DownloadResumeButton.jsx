import React from 'react';
import Button from './Button';
import { Eye } from 'lucide-react';
import { trackDownload } from './Analytics';

const DownloadResumeButton = ({ variant = 'primary', className = '' }) => {
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
                    variant: 'primary',
                    size: 'lg',
                    className: className
                };
        }
    };

    const handleClick = () => {
        trackDownload('Kaushal_Dontula_Resume.pdf');
    };

    return (
        <Button
            href="/Kaushal_Dontula_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon={Eye}
            aria-label="View Resume"
            onClick={handleClick}
            {...getButtonProps()}
        >
            {variant === 'nav' ? 'Resume' : 'View Resume'}
        </Button>
    );
};

export default DownloadResumeButton;
