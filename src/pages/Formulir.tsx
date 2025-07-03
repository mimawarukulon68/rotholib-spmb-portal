import React from 'react';
import BottomNavbar from '@/components/BottomNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Formulir = () => {
  return (
    <div className="min-h-screen bg-background font-poppins pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-bold text-center">Formulir Pendaftaran</h1>
        <p className="text-center mt-2 text-primary-foreground/80">
          SPMB 2025/2026
        </p>
      </div>

      {/* Form */}
      <div className="p-4 space-y-4">
        {/* Data Pribadi */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Data Pribadi Calon Siswa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="nama">Nama Lengkap *</Label>
                <Input id="nama" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <Label htmlFor="nik">NIK *</Label>
                <Input id="nik" placeholder="Nomor Induk Kependudukan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tempat-lahir">Tempat Lahir *</Label>
                  <Input id="tempat-lahir" placeholder="Kota kelahiran" />
                </div>
                <div>
                  <Label htmlFor="tanggal-lahir">Tanggal Lahir *</Label>
                  <Input id="tanggal-lahir" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="jenis-kelamin">Jenis Kelamin *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="L">Laki-laki</SelectItem>
                    <SelectItem value="P">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="agama">Agama *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih agama" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="islam">Islam</SelectItem>
                    <SelectItem value="kristen">Kristen</SelectItem>
                    <SelectItem value="katolik">Katolik</SelectItem>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="buddha">Buddha</SelectItem>
                    <SelectItem value="konghucu">Konghucu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Alamat */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Data Alamat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="alamat">Alamat Lengkap *</Label>
              <Textarea id="alamat" placeholder="Jalan, No. Rumah, RT/RW" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="desa">Desa/Kelurahan *</Label>
                <Input id="desa" placeholder="Nama desa/kelurahan" />
              </div>
              <div>
                <Label htmlFor="kecamatan">Kecamatan *</Label>
                <Input id="kecamatan" placeholder="Nama kecamatan" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="kabupaten">Kabupaten/Kota *</Label>
                <Input id="kabupaten" placeholder="Nama kabupaten/kota" />
              </div>
              <div>
                <Label htmlFor="provinsi">Provinsi *</Label>
                <Input id="provinsi" placeholder="Nama provinsi" />
              </div>
            </div>
            <div>
              <Label htmlFor="kode-pos">Kode Pos</Label>
              <Input id="kode-pos" placeholder="Kode pos" />
            </div>
          </CardContent>
        </Card>

        {/* Data Orang Tua */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Data Orang Tua/Wali</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="nama-ayah">Nama Ayah *</Label>
                <Input id="nama-ayah" placeholder="Nama lengkap ayah" />
              </div>
              <div>
                <Label htmlFor="nama-ibu">Nama Ibu *</Label>
                <Input id="nama-ibu" placeholder="Nama lengkap ibu" />
              </div>
              <div>
                <Label htmlFor="pekerjaan-ayah">Pekerjaan Ayah</Label>
                <Input id="pekerjaan-ayah" placeholder="Pekerjaan ayah" />
              </div>
              <div>
                <Label htmlFor="pekerjaan-ibu">Pekerjaan Ibu</Label>
                <Input id="pekerjaan-ibu" placeholder="Pekerjaan ibu" />
              </div>
              <div>
                <Label htmlFor="no-hp">No. HP/WhatsApp *</Label>
                <Input id="no-hp" placeholder="08xxxxxxxxxx" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sekolah Asal */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Data Sekolah Asal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="asal-sekolah">Nama Sekolah Asal *</Label>
              <Input id="asal-sekolah" placeholder="Nama sekolah/madrasah asal" />
            </div>
            <div>
              <Label htmlFor="alamat-sekolah">Alamat Sekolah</Label>
              <Input id="alamat-sekolah" placeholder="Alamat sekolah asal" />
            </div>
            <div>
              <Label htmlFor="tahun-lulus">Tahun Lulus *</Label>
              <Input id="tahun-lulus" placeholder="2024" />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="pt-4">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Kirim Formulir Pendaftaran
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            * Wajib diisi. Pastikan semua data yang dimasukkan benar dan sesuai dengan dokumen resmi.
          </p>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Formulir;