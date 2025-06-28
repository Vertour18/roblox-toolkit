import React from 'react';
import { Heart, User, MessageCircle, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Mystic Rose Studios</h3>
            <p className="text-gray-400 text-sm mb-4">
              Creamos herramientas útiles para la comunidad de Roblox con pasión y dedicación.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para la comunidad</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.roblox.com/users/YOUR_USER_ID/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Perfil de Roblox</span>
              </a>
              <a
                href="https://discord.gg/YOUR_DISCORD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discord Server</span>
              </a>
              <a
                href="https://twitter.com/YOUR_TWITTER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a
                href="https://youtube.com/YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>&copy; 2025 Mystic Rose Studios</p>
              <p>Todos los derechos reservados</p>
              <p className="text-xs">
                Esta herramienta no está afiliada con Roblox Corporation.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Roblox Toolkit v1.0 - Tu compañero definitivo para Roblox
          </p>
        </div>
      </div>
    </footer>
  );
}