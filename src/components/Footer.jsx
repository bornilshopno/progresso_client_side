import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center  p-4 bg-gray-200 text-gray-950 dark:bg-gray-900 dark:text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Ashraf Hossain</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;