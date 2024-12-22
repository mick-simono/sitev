import { MessageCircle, MessageSquare, Network } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,15,0.95)] text-white">
      <div className="container-padding py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a 
              href="https://t.me/yourproject" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <MessageCircle size={24} />
            </a>
            <a 
              href="https://discord.gg/yourserver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <MessageSquare size={24} />
            </a>
            <a 
              href="https://bsky.app/profile/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Bluesky"
            >
              <Network size={24} />
            </a>
          </div>
          <p className="text-neutral-400 text-center">
            © {new Date().getFullYear()} Your Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;