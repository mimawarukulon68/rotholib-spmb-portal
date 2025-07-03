import React from 'react';
import { RippleButton } from '@/components/ui/ripple-button';
import BottomNavbar from '@/components/BottomNavbar';
import schoolLogo from '@/assets/school-logo.png';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  return (
    <div className="relative min-h-screen font-poppins text-foreground bg-white">
      {/* Hero Section */}
      <div className="flex flex-col h-[calc(100dvh-58px)]">
        <div 
          className="flex-1 flex flex-col items-center justify-center px-3 py-4 relative"
          style={{
            background: `var(--hero-bg), url(${heroBackground})`,
            backgroundSize: 'auto, cover',
            backgroundPosition: '0% 0%, 50% 50%',
            backgroundRepeat: 'repeat, no-repeat',
            borderBottomRightRadius: '100px',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div className="flex flex-col items-center gap-4 max-w-[448px] w-full">
            {/* Logo */}
            <div className="mb-3">
              <img 
                src={schoolLogo} 
                alt="Logo MI Ma'arif Roudlotut Tholibin"
                className="h-24 w-24 object-cover rounded-full border-4 border-white/20 shadow-lg"
              />
            </div>
            
            {/* Header Text */}
            <div className="flex flex-col items-center gap-2 text-center px-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-white font-poppins text-5 font-medium leading-7">
                  Selamat Datang di
                </h1>
                <h2 className="text-white text-[36px] font-bold leading-[45px]">
                  Portal SPMB
                </h2>
                <h3 className="text-gray-100 font-poppins text-5 font-medium leading-7">
                  MI Ma'arif Roudlotut Tholibin
                </h3>
                <h4 className="text-white font-poppins text-5 font-medium leading-7">
                  Warukulon
                </h4>
              </div>
              <div className="bg-white h-px w-20"></div>
              <span className="block text-white font-poppins text-sm italic font-medium leading-[22.75px]">
                Membentuk Generasi Ahlusunnah wal Jama'ah yang Berakhlakul Karimah, Berprestasi, dan Cinta NKRI
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-8 mt-2">
              <RippleButton variant="login" size="default">
                Login SPMB
              </RippleButton>
              <RippleButton variant="register" size="register">
                Daftar Sekarang
              </RippleButton>
            </div>
          </div>
        </div>
        
        {/* Information Section */}
        <div className="px-3 py-4">
          <div className="bg-white rounded-md shadow-card max-w-[448px] w-full mx-auto p-3">
            <div className="flex flex-col items-center text-center gap-1.5">
              <h3 className="text-black font-bold">
                Panduan & Informasi
              </h3>
              <div className="bg-black h-px w-16"></div>
              <p className="text-muted-foreground text-sm italic font-medium leading-[22.75px]">
                <span>Panduan & Informasi selengkapnya terkait SPMB MI Roudlotut Tholibin Warukulon </span>
                <br />
                <span>TP 2025/2026</span>
              </p>
              <RippleButton variant="info" size="info">
                Baca Selengkapnya
              </RippleButton>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Index;