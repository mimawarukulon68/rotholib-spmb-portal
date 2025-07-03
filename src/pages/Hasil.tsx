import React, { useState } from 'react';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, CheckCircle, XCircle, Clock } from 'lucide-react';

const Hasil = () => {
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResult({
        nama: "Ahmad Fahrur Rozi",
        noRegistrasi: "SPMB2025001",
        status: "diterima", // diterima, ditolak, proses
        nilai: {
          matematika: 85,
          bahasaIndonesia: 88,
          ipa: 82,
          bacaQuran: 90
        },
        tanggalPengumuman: "25 April 2025"
      });
      setIsLoading(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'diterima':
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'ditolak':
        return <XCircle className="w-8 h-8 text-red-500" />;
      default:
        return <Clock className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'diterima':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'ditolak':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'diterima':
        return 'DITERIMA';
      case 'ditolak':
        return 'TIDAK DITERIMA';
      default:
        return 'DALAM PROSES';
    }
  };

  return (
    <div className="min-h-screen bg-background font-poppins pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-bold text-center">Hasil SPMB</h1>
        <p className="text-center mt-2 text-primary-foreground/80">
          Cek Status Penerimaan Anda
        </p>
      </div>

      {/* Search Form */}
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cari Hasil Seleksi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="no-registrasi">Nomor Registrasi</Label>
              <Input 
                id="no-registrasi" 
                placeholder="Masukkan nomor registrasi Anda"
                defaultValue="SPMB2025001"
              />
            </div>
            <div>
              <Label htmlFor="tanggal-lahir">Tanggal Lahir</Label>
              <Input 
                id="tanggal-lahir" 
                type="date"
                defaultValue="2010-05-15"
              />
            </div>
            <Button 
              onClick={handleSearch}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isLoading ? 'Mencari...' : 'Cari Hasil'}
            </Button>
          </CardContent>
        </Card>

        {/* Search Result */}
        {searchResult && (
          <div className="space-y-4">
            {/* Status Card */}
            <Card className={`border-2 ${getStatusColor(searchResult.status)}`}>
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center gap-4">
                  {getStatusIcon(searchResult.status)}
                  <div>
                    <h3 className="text-xl font-bold">{getStatusText(searchResult.status)}</h3>
                    <p className="text-sm opacity-80">Status Penerimaan SPMB 2025/2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detail Peserta */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Detail Peserta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Nama:</span>
                  <span>{searchResult.nama}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">No. Registrasi:</span>
                  <span>{searchResult.noRegistrasi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tanggal Pengumuman:</span>
                  <span>{searchResult.tanggalPengumuman}</span>
                </div>
              </CardContent>
            </Card>

            {/* Nilai Tes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Hasil Tes Seleksi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-primary">{searchResult.nilai.matematika}</div>
                    <div className="text-sm text-muted-foreground">Matematika</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-primary">{searchResult.nilai.bahasaIndonesia}</div>
                    <div className="text-sm text-muted-foreground">Bahasa Indonesia</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-primary">{searchResult.nilai.ipa}</div>
                    <div className="text-sm text-muted-foreground">IPA</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-primary">{searchResult.nilai.bacaQuran}</div>
                    <div className="text-sm text-muted-foreground">Baca Al-Qur'an</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            {searchResult.status === 'diterima' && (
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Langkah Selanjutnya</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>• Lakukan daftar ulang paling lambat 5 Mei 2025</p>
                    <p>• Siapkan dokumen asli untuk verifikasi</p>
                    <p>• Bayar biaya SPP semester pertama</p>
                    <p>• Menghadiri orientasi siswa baru</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Info */}
        <Card className="bg-secondary/10">
          <CardContent className="p-4">
            <h4 className="font-semibold text-primary mb-2">Informasi Penting:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Pengumuman hasil seleksi diumumkan pada tanggal 25 April 2025</li>
              <li>• Bagi yang diterima, wajib melakukan daftar ulang</li>
              <li>• Jika ada pertanyaan, silakan hubungi kontak yang tersedia</li>
              <li>• Hasil seleksi bersifat final dan tidak dapat diganggu gugat</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Hasil;