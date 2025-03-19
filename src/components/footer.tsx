import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full max-w-6xl mx-auto pt-8 border-t border-border text-foreground/70">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 mb-4 md:mb-0">
            <span className="font-semibold text-lg text-foreground">CodeVault</span>
          <div className="flex gap-3 mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">
              <FaGithub size={16} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaLinkedin size={16} />
            </a>
          </div>
          </div>
          
          
          <div className="text-sm">
            © {new Date().getFullYear()} CodeVault. All rights reserved.
          </div>
        </div>
      </footer>
    );
}

export default Footer;
