/*
  # Create IKPMD Questionnaire Form Submissions Table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `nama_lengkap` (text, not null) - Full name
      - `nama_panggilan` (text) - Nickname
      - `tanggal_lahir` (date, not null) - Date of birth
      - `jenis_kelamin` (text, not null) - Gender (L/P)
      - `alamat_jogja_kabkota` (text) - Yogyakarta kabupaten/kota
      - `alamat_jogja_kecamatan` (text) - Yogyakarta kecamatan
      - `alamat_jogja_kelurahan` (text) - Yogyakarta kelurahan/desa
      - `alamat_dompu_kabkota` (text, not null) - Dompu kabupaten/kota
      - `alamat_dompu_kecamatan` (text, not null) - Dompu kecamatan
      - `alamat_dompu_kelurahan` (text, not null) - Dompu kelurahan/desa
      - `nomor_hp` (text, not null) - Phone/WhatsApp number
      - `status_saat_ini` (text, not null) - Current status (kuliah/bekerja)
      - `perguruan_tinggi` (text) - University (if kuliah)
      - `fakultas_jurusan` (text) - Faculty/major (if kuliah)
      - `tahun_masuk` (text) - Year of entry (if kuliah)
      - `program_studi` (text) - Study program (if kuliah)
      - `nama_perusahaan` (text) - Company name (if bekerja)
      - `posisi_jabatan` (text) - Position (if bekerja)
      - `bidang_industri` (text) - Industry (if bekerja)
      - `tertarik_ikpmd` (text, not null) - Interest in IKPMD (ya/tidak)
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for anyone (anon) to insert new submissions
    - Add policy for authenticated users to read submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama_lengkap text NOT NULL,
  nama_panggilan text DEFAULT '',
  tanggal_lahir date NOT NULL,
  jenis_kelamin text NOT NULL CHECK (jenis_kelamin IN ('Laki-laki', 'Perempuan')),
  alamat_jogja_kabkota text DEFAULT '',
  alamat_jogja_kecamatan text DEFAULT '',
  alamat_jogja_kelurahan text DEFAULT '',
  alamat_dompu_kabkota text NOT NULL,
  alamat_dompu_kecamatan text NOT NULL,
  alamat_dompu_kelurahan text NOT NULL,
  nomor_hp text NOT NULL,
  status_saat_ini text NOT NULL CHECK (status_saat_ini IN ('Kuliah', 'Bekerja')),
  perguruan_tinggi text,
  fakultas_jurusan text,
  tahun_masuk text,
  program_studi text,
  nama_perusahaan text,
  posisi_jabatan text,
  bidang_industri text,
  tertarik_ikpmd text NOT NULL CHECK (tertarik_ikpmd IN ('Ya', 'Tidak')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit form"
  ON form_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON form_submissions FOR SELECT
  TO authenticated
  USING (true);
