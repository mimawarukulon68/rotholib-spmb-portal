import React from "react";
import { RippleButton } from "@/components/ui/ripple-button";
import BottomNavbar from "@/components/BottomNavbar";
import schoolLogo from "@/assets/school-logo.png";
import schoolBuilding from "@/assets/school-building.png";

const Index = () => {
  return (
    // PAGE_CONTAINER - Kontainer utama halaman
    <div className="relative min-h-screen font-poppins text-foreground bg-white">
      {/* MAIN_CONTENT_WRAPPER - Pembungkus konten utama */}
      <div className="flex flex-col h-[calc(100dvh-58px)]">
        {/* HERO_SECTION - Bagian hero dengan background dan konten utama */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-3 py-4 relative"
          style={{
            background: `var(--hero-bg), url(${schoolBuilding})`,
            backgroundSize: "auto, cover",
            backgroundPosition: "0% 0%, 50% 50%",
            backgroundRepeat: "repeat, no-repeat",
            borderBottomRightRadius: "100px",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* HERO_CONTENT_CONTAINER - Kontainer konten dalam hero */}
          <div className="flex flex-col items-center gap-4 max-w-[448px] w-full">
            {/* SCHOOL_LOGO_SECTION - Bagian logo sekolah */}
            <div className="mb-3">
              <img
                src={schoolLogo}
                alt="Logo MI Ma'arif Roudlotut Tholibin"
                className="h-24 w-24 object-cover rounded-full border-4 border-white/20 shadow-lg"
              />
            </div>

            {/* WELCOME_TEXT_SECTION - Bagian teks sambutan dan judul */}
            <div className="flex flex-col items-center gap-2 text-center px-2">
              {/* TITLE_HEADINGS_GROUP - Grup judul-judul utama */}
              <div className="flex flex-col items-center">
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
              {/* DIVIDER_LINE - Garis pemisah */}
              <div className="bg-white h-px w-20"></div>
              {/* SCHOOL_MOTTO - Moto sekolah */}
              <span className="block text-white font-poppins text-sm italic font-medium leading-[22.75px]">
                Membentuk Generasi Ahlusunnah wal Jama'ah yang Berakhlakul
                Karimah, Berprestasi, dan Cinta NKRI
              </span>
            </div>

            {/* CTA_BUTTONS_SECTION - Bagian tombol call-to-action */}
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

        {/* INFO_CARD_SECTION - Bagian kartu informasi */}
        <div className="px-3 py-4">
          {/* INFO_CARD_CONTAINER - Kontainer kartu informasi */}
          <div className="bg-white rounded-xl shadow-card max-w-[448px] w-full mx-auto p-3 border border-primary/40">
            {/* INFO_CARD_CONTENT - Konten dalam kartu informasi */}
            <div className="flex flex-col items-center text-center gap-1.5">
              <p className="text-muted-foreground text-sm italic font-medium">
                Panduan & Informasi selengkapnya seputar
                <br />
                SPMB MI Roudlotut Tholibin Warukulon
                <br />
                TP 2025/2026
              </p>
              <RippleButton variant="info" size="info">
                Baca Selengkapnya
              </RippleButton>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM_NAVIGATION - Navigasi bawah */}
      <BottomNavbar />
    </div>
  );
};

export default Index;
