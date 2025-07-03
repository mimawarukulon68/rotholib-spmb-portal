import React from 'react';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Panduan = () => {
  const panduanSteps = [
    {
      title: "Persiapan Dokumen",
      items: [
        "Fotokopi Ijazah/SKHUN yang telah dilegalisir",
        "Fotokopi Kartu Keluarga",
        "Fotokopi Akte Kelahiran",
        "Pas foto terbaru ukuran 3x4 sebanyak 3 lembar",
        "Surat keterangan sehat dari dokter"
      ]
    },
    {
      title: "Pendaftaran Online",
      items: [
        "Klik tombol 'Daftar Sekarang' di halaman utama",
        "Isi formulir pendaftaran dengan lengkap dan benar",
        "Upload dokumen yang diperlukan dalam format PDF/JPG",
        "Pastikan semua data telah terisi dengan benar",
        "Submit formulir pendaftaran"
      ]
    },
    {
      title: "Tes Seleksi",
      items: [
        "Tes akademik (Matematika, Bahasa Indonesia, IPA)",
        "Tes baca Al-Qur'an",
        "Wawancara dengan tim seleksi",
        "Tes kesehatan dasar"
      ]
    },
    {
      title: "Pengumuman Hasil",
      items: [
        "Hasil seleksi akan diumumkan melalui website",
        "Calon siswa dapat mengecek hasil di menu 'Hasil SPMB'",
        "Pengumuman juga akan dikirim via SMS/WhatsApp",
        "Bagi yang diterima, silakan lakukan daftar ulang"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-bold text-center">Panduan SPMB</h1>
        <p className="text-center mt-2 text-primary-foreground/80">
          MI Ma'arif Roudlotut Tholibin Warukulon
        </p>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Informasi Umum</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold">Periode Pendaftaran:</h4>
              <p className="text-muted-foreground">1 Januari - 31 Maret 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">Tes Seleksi:</h4>
              <p className="text-muted-foreground">15 - 20 April 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">Pengumuman:</h4>
              <p className="text-muted-foreground">25 April 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">Biaya Pendaftaran:</h4>
              <p className="text-muted-foreground">Rp 150.000,-</p>
            </div>
          </CardContent>
        </Card>

        {panduanSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-secondary/10">
          <CardContent className="p-4">
            <h4 className="font-semibold text-primary mb-2">Catatan Penting:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Pastikan semua dokumen asli dibawa saat tes seleksi</li>
              <li>• Calon siswa wajib hadir tepat waktu</li>
              <li>• Bagi yang tidak lulus seleksi, dokumen dapat diambil kembali</li>
              <li>• Untuk informasi lebih lanjut, hubungi kontak yang tersedia</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Panduan;