import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  {
    name: 'Beranda',
    path: '/',
    icon: 'fas fa-home'
  },
  {
    name: 'Panduan',
    path: '/panduan',
    icon: 'fas fa-book'
  },
  {
    name: 'Formulir',
    path: '/formulir',
    icon: 'fas fa-file-alt'
  },
  {
    name: 'Hasil SPMB',
    path: '/hasil',
    icon: 'fas fa-clipboard-list'
  },
  {
    name: 'Kontak',
    path: '/kontak',
    icon: 'fas fa-phone'
  }
];

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-button z-50">
      <div className="flex items-center justify-between h-[58px] px-4 py-1.5">
        {navItems.map((item) => {
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
                <i className={cn(
                  item.icon,
                  isActive ? "text-xl" : "text-lg"
                )} />
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