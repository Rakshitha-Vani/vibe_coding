import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const ContactCard = ({ icon: Icon, label, value, href }) => (
  <a
    href={href || '#'}
    target={href && href.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-2 hover:border-blue-500/40 transition-all cursor-pointer group"
  >
    <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-transparent group-hover:text-white transition-all">
      <Icon size={22} />
    </div>
    <h4 className="font-semibold text-slate-200">{label}</h4>
    <p className="text-slate-400 text-sm break-all">{value}</p>
  </a>
);

const Footer = () => {
  const contacts = [
    { icon: Phone, label: 'Phone', value: '8296821869', href: 'tel:8296821869' },
    { icon: Mail, label: 'Email', value: 'rakshithavani976@gmail.com', href: 'mailto:rakshithavani976@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/rakshithavani', href: 'https://www.linkedin.com/in/rakshithavani' },
  ];

  return (
    <footer id="footer" className="border-t border-slate-800/50 mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 xl:px-0 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Touch</span>
        </h2>
        <p className="text-center text-slate-400 mb-12">
          I'm currently looking for new opportunities in IT & Cyber Security. My inbox is always open!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contacts.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </div>

        <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
          <p>© 2026 <span className="text-slate-300 font-medium">Rakshitha Vani D T</span>. Crafted with passion and code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
