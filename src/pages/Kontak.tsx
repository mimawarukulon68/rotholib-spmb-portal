import React from 'react';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Kontak = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "(0274) 123-4567",
      action: "tel:02741234567"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "0812-3456-7890",
      action: "https://wa.me/6281234567890"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@miroudlotuttholibin.sch.id",
      action: "mailto:info@miroudlotuttholibin.sch.id"
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Jl. Pendidikan No. 123, Warukulon, Kec. Warukulon, Kab. Tangerang, Banten 15810",
      action: "https://maps.google.com/?q=Warukulon+Tangerang"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-bold text-center">Kontak Kami</h1>
        <p className="text-center mt-2 text-primary-foreground/80">
          Hubungi Kami untuk Informasi Lebih Lanjut
        </p>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Jam Operasional */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Jam Operasional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Senin - Jumat:</span>
              <span className="font-medium">07:00 - 16:00 WIB</span>
            </div>
            <div className="flex justify-between">
              <span>Sabtu:</span>
              <span className="font-medium">07:00 - 12:00 WIB</span>
            </div>
            <div className="flex justify-between">
              <span>Minggu:</span>
              <span className="font-medium text-red-500">Libur</span>
            </div>
          </CardContent>
        </Card>

        {/* Contact Cards */}
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">{contact.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{contact.value}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(contact.action, '_blank')}
                      className="text-primary border-primary hover:bg-primary hover:text-white"
                    >
                      {contact.title === 'Alamat' ? 'Buka di Maps' : 
                       contact.title === 'Email' ? 'Kirim Email' : 
                       'Hubungi Sekarang'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* School Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Profil Madrasah</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">Nama Lengkap:</h4>
              <p className="text-sm text-muted-foreground">
                Madrasah Ibtidaiyah Ma'arif Roudlotut Tholibin Warukulon
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">NPSN:</h4>
              <p className="text-sm text-muted-foreground">20123456</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Status:</h4>
              <p className="text-sm text-muted-foreground">Swasta - Terakreditasi A</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Yayasan:</h4>
              <p className="text-sm text-muted-foreground">Yayasan Ma'arif NU Warukulon</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-secondary/10">
          <CardHeader>
            <CardTitle className="text-primary">Layanan Cepat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20SPMB%202025', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat WhatsApp - Tanya SPMB
            </Button>
            <Button 
              variant="outline" 
              className="w-full text-primary border-primary hover:bg-primary hover:text-white"
              onClick={() => window.open('tel:02741234567', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Telepon Langsung
            </Button>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Pertanyaan Umum</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Kapan pendaftaran dibuka?</h4>
              <p className="text-sm text-muted-foreground">
                Pendaftaran SPMB 2025/2026 dibuka mulai 1 Januari hingga 31 Maret 2025.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Berapa biaya pendaftaran?</h4>
              <p className="text-sm text-muted-foreground">
                Biaya pendaftaran sebesar Rp 150.000,- dapat dibayar melalui transfer bank atau datang langsung ke madrasah.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Apa saja persyaratan pendaftaran?</h4>
              <p className="text-sm text-muted-foreground">
                Silakan lihat detail lengkap persyaratan di halaman Panduan atau hubungi kami langsung.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Kontak;