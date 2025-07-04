import React from 'react';
import { Button } from '@/components/ui/button';
import BottomNavbar from '@/components/BottomNavbar';
import schoolLogo from '@/assets/school-logo.png';
import schoolBuilding from '@/assets/school-building.png';

const Index = () => {
  return (
    <div className="relative min-h-screen font-poppins text-foreground bg-white">
      {/* Hero Section */}
      <div className="flex flex-col h-[calc(100dvh-58px)]">
        <div 
          className="flex-1 flex flex-col items-center justify-center px-3 py-4 relative"
          style={{
            background: `var(--hero-bg), url(${schoolBuilding})`,
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
                  Selamat Datang di Testing
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
              <Button className="bg-secondary text-secondary-foreground border-white/30 hover:bg-secondary/90 hover:shadow-lg font-semibold text-sm leading-5 h-11 px-6 py-3 border rounded-lg shadow-button min-w-[140px]">
                Login SPMB
              </Button>
              <Button className="bg-primary text-primary-foreground border-white/30 hover:bg-primary/90 hover:shadow-lg font-semibold text-sm leading-5 h-11 px-6 py-3 border rounded-lg shadow-button min-w-[145px]">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
        
        {/* Information Section */}
        <div className="px-3 py-4">
          <div className="bg-white rounded-xl shadow-card max-w-[448px] w-full mx-auto p-3 border border-primary/40">
            <div className="flex flex-col items-center text-center gap-1.5">
              <p className="text-muted-foreground text-sm italic font-medium">
                Panduan & Informasi selengkapnya seputar<br />
                SPMB MI Roudlotut Tholibin Warukulon<br />
                TP 2025/2026
              </p>
              <Button className="bg-primary text-primary-foreground border-white/30 hover:bg-primary/90 hover:shadow-lg px-8 mt-2 font-semibold text-sm leading-5 h-11 py-3 border rounded-lg shadow-button">
                Baca Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Index;