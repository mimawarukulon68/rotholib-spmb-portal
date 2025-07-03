import React from 'react';
import { Home, BookOpen, FileText, ClipboardList, Phone } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  {
    name: 'Beranda',
    path: '/',
    icon: Home
  },
  {
    name: 'Panduan',
    path: '/panduan',
    icon: BookOpen
  },
  {
    name: 'Formulir',
    path: '/formulir',
    icon: FileText
  },
  {
    name: 'Hasil SPMB',
    path: '/hasil',
    icon: ClipboardList
  },
  {
    name: 'Kontak',
    path: '/kontak',
    icon: Phone
  }
];

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-button z-50">
      <div className="flex items-center justify-between h-[58px] px-4 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center min-w-[60px] px-2 py-1 rounded-lg transition-all duration-200 gap-0.5",
                isActive 
                  ? "bg-transparent border-transparent" 
                  : "bg-transparent border-transparent"
              )}
            >
              <div className={cn(
                "transition-colors duration-200",
                isActive ? "text-islamic-green" : "text-muted-foreground"
              )}>
                <Icon size={isActive ? 24 : 20} />
              </div>
              <span className={cn(
                "block text-[10px] font-semibold leading-[12.5px] transition-all duration-200",
                isActive 
                  ? "text-transparent bg-gradient-to-r from-islamic-green to-primary-light bg-clip-text" 
                  : "text-muted-foreground"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;