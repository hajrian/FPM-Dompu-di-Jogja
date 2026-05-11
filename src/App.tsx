import { useState, useMemo, useCallback } from 'react';
import { supabase } from './lib/supabase';
import {
  DAERAH_ISTIMEWA_YOGYAKARTA,
  KABUPATEN_DOMPU,
} from './lib/indonesia-regions';
import {
  User,
  GraduationCap,
  Briefcase,
  Heart,
  Send,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Calendar,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

type FormData = {
  nama_lengkap: string;
  nama_panggilan: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  alamat_jogja_kabkota: string;
  alamat_jogja_kecamatan: string;
  alamat_jogja_kelurahan: string;
  alamat_dompu_kabkota: string;
  alamat_dompu_kecamatan: string;
  alamat_dompu_kelurahan: string;
  nomor_hp: string;
  status_saat_ini: string;
  perguruan_tinggi: string;
  fakultas_jurusan: string;
  tahun_masuk: string;
  program_studi: string;
  nama_perusahaan: string;
  posisi_jabatan: string;
  bidang_industri: string;
  tertarik_ikpmd: string;
};

const initialFormData: FormData = {
  nama_lengkap: '',
  nama_panggilan: '',
  tanggal_lahir: '',
  jenis_kelamin: '',
  alamat_jogja_kabkota: '',
  alamat_jogja_kecamatan: '',
  alamat_jogja_kelurahan: '',
  alamat_dompu_kabkota: 'Kabupaten Dompu',
  alamat_dompu_kecamatan: '',
  alamat_dompu_kelurahan: '',
  nomor_hp: '',
  status_saat_ini: '',
  perguruan_tinggi: '',
  fakultas_jurusan: '',
  tahun_masuk: '',
  program_studi: '',
  nama_perusahaan: '',
  posisi_jabatan: '',
  bidang_industri: '',
  tertarik_ikpmd: '',
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // Nama lengkap
  if (!data.nama_lengkap.trim()) {
    errors.nama_lengkap = 'Nama lengkap wajib diisi';
  } else if (data.nama_lengkap.trim().length < 2) {
    errors.nama_lengkap = 'Nama lengkap minimal 2 karakter';
  } else if (data.nama_lengkap.trim().length > 100) {
    errors.nama_lengkap = 'Nama lengkap maksimal 100 karakter';
  }

  // Tanggal lahir
  if (!data.tanggal_lahir) {
    errors.tanggal_lahir = 'Tanggal lahir wajib diisi';
  } else {
    const dob = new Date(data.tanggal_lahir);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (dob > today) {
      errors.tanggal_lahir = 'Tanggal lahir tidak boleh di masa depan';
    } else if (age < 10) {
      errors.tanggal_lahir = 'Umur minimal 10 tahun';
    } else if (age > 100) {
      errors.tanggal_lahir = 'Tanggal lahir tidak valid';
    }
  }

  // Jenis kelamin
  if (!data.jenis_kelamin) {
    errors.jenis_kelamin = 'Jenis kelamin wajib dipilih';
  }

  // Alamat Dompu (wajib)
  if (!data.alamat_dompu_kecamatan) {
    errors.alamat_dompu_kecamatan = 'Kecamatan asal wajib dipilih';
  }
  if (!data.alamat_dompu_kelurahan) {
    errors.alamat_dompu_kelurahan = 'Kelurahan/desa asal wajib dipilih';
  }

  // Nomor HP
  if (!data.nomor_hp.trim()) {
    errors.nomor_hp = 'Nomor HP wajib diisi';
  } else {
    const hp = data.nomor_hp.replace(/\s|-/g, '');
    if (!/^(\+62|62|0)[0-9]{8,13}$/.test(hp)) {
      errors.nomor_hp = 'Format nomor HP tidak valid (contoh: 081234567890)';
    }
  }

  // Status saat ini
  if (!data.status_saat_ini) {
    errors.status_saat_ini = 'Status saat ini wajib dipilih';
  }

  // Data kuliah
  if (data.status_saat_ini === 'Kuliah') {
    if (!data.perguruan_tinggi.trim()) {
      errors.perguruan_tinggi = 'Nama perguruan tinggi wajib diisi';
    }
    if (!data.fakultas_jurusan.trim()) {
      errors.fakultas_jurusan = 'Fakultas/jurusan wajib diisi';
    }
    if (data.tahun_masuk) {
      const tahun = parseInt(data.tahun_masuk);
      const currentYear = new Date().getFullYear();
      if (isNaN(tahun) || tahun < 1990 || tahun > currentYear) {
        errors.tahun_masuk = `Tahun masuk harus antara 1990–${currentYear}`;
      }
    }
  }

  // Data pekerjaan
  if (data.status_saat_ini === 'Bekerja') {
    if (!data.nama_perusahaan.trim()) {
      errors.nama_perusahaan = 'Nama perusahaan/instansi wajib diisi';
    }
    if (!data.posisi_jabatan.trim()) {
      errors.posisi_jabatan = 'Posisi/jabatan wajib diisi';
    }
  }

  // Minat IKPMD
  if (!data.tertarik_ikpmd) {
    errors.tertarik_ikpmd = 'Pilihan minat IKPMD wajib dipilih';
  }

  return errors;
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="group">
      <label className="block text-sm font-semibold text-slate-600 mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-white border-2 rounded-xl px-4 py-3 pr-10 text-slate-800 font-medium focus:outline-none focus:ring-4 transition-all duration-200 cursor-pointer ${
            error
              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/10'
              : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/10'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}

function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  error,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-600 mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border-2 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:ring-4 transition-all duration-200 placeholder:text-slate-400 placeholder:font-normal bg-white ${
          error
            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/10'
            : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/10'
        }`}
      />
      {error && <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}

function RadioGroup({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-600 mb-3">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
              value === opt.value
                ? 'border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                : error
                ? 'border-rose-300 bg-white text-slate-600 hover:border-rose-400 hover:bg-rose-50'
                : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50'
            }`}
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
              value === opt.value ? 'border-white' : 'border-slate-300'
            }`}>
              {value === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            {opt.label}
          </button>
        ))}
      </div>
      {error && <p className="mt-2 text-xs font-medium text-rose-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}

function SectionCard({
  icon: Icon,
  number,
  title,
  color,
  children,
}: {
  icon: React.ElementType;
  number: number;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className={`px-6 py-4 ${color} flex items-center gap-3`}>
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-white/70 uppercase tracking-widest">Bagian {number}</p>
          <h2 className="text-base font-bold text-white leading-tight">{title}</h2>
        </div>
      </div>
      <div className="p-6 sm:p-8 space-y-5">{children}</div>
    </div>
  );
}

function AddressBlock({
  title,
  required,
  children,
}: {
  title: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        <span className="text-sm font-bold text-slate-700">
          {title} {required && <span className="text-rose-500">*</span>}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{children}</div>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const update = useCallback(
    (field: keyof FormData) => (value: string) => {
      setFormData((prev) => {
        const next = { ...prev, [field]: value };
        // clear error on change
        setErrors((e) => {
          if (e[field]) {
            const updated = { ...e };
            delete updated[field];
            return updated;
          }
          return e;
        });
        return next;
      });
    },
    []
  );

  const jogjaKabKotaList = useMemo(
    () => DAERAH_ISTIMEWA_YOGYAKARTA.kabupatenKota.map((k) => k.name),
    []
  );

  const jogjaKecamatanList = useMemo(() => {
    if (!formData.alamat_jogja_kabkota) return [];
    const kk = DAERAH_ISTIMEWA_YOGYAKARTA.kabupatenKota.find(
      (k) => k.name === formData.alamat_jogja_kabkota
    );
    return kk ? kk.kecamatan.map((k) => k.name) : [];
  }, [formData.alamat_jogja_kabkota]);

  const jogjaKelurahanList = useMemo(() => {
    if (!formData.alamat_jogja_kabkota || !formData.alamat_jogja_kecamatan) return [];
    const kk = DAERAH_ISTIMEWA_YOGYAKARTA.kabupatenKota.find(
      (k) => k.name === formData.alamat_jogja_kabkota
    );
    if (!kk) return [];
    const kec = kk.kecamatan.find((k) => k.name === formData.alamat_jogja_kecamatan);
    return kec ? kec.kelurahanDesa.map((kd) => kd.name) : [];
  }, [formData.alamat_jogja_kabkota, formData.alamat_jogja_kecamatan]);

  const dompuKecamatanList = useMemo(
    () => KABUPATEN_DOMPU.kecamatan.map((k) => k.name),
    []
  );

  const dompuKelurahanList = useMemo(() => {
    if (!formData.alamat_dompu_kecamatan) return [];
    const kec = KABUPATEN_DOMPU.kecamatan.find(
      (k) => k.name === formData.alamat_dompu_kecamatan
    );
    return kec ? kec.kelurahanDesa.map((kd) => kd.name) : [];
  }, [formData.alamat_dompu_kecamatan]);

  const handleJogjaKabKotaChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      alamat_jogja_kabkota: value,
      alamat_jogja_kecamatan: '',
      alamat_jogja_kelurahan: '',
    }));
  }, []);

  const handleJogjaKecamatanChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      alamat_jogja_kecamatan: value,
      alamat_jogja_kelurahan: '',
    }));
  }, []);

  const handleDompuKecamatanChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      alamat_dompu_kecamatan: value,
      alamat_dompu_kelurahan: '',
    }));
    setErrors((e) => { const u = { ...e }; delete u.alamat_dompu_kecamatan; delete u.alamat_dompu_kelurahan; return u; });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      setTimeout(() => {
        const el = document.querySelector('[data-error="true"]');
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }

    setSubmitting(true);
    try {
      const { error: insertError } = await supabase
        .from('form_submissions')
        .insert({
          nama_lengkap: formData.nama_lengkap,
          nama_panggilan: formData.nama_panggilan || null,
          tanggal_lahir: formData.tanggal_lahir,
          jenis_kelamin: formData.jenis_kelamin,
          alamat_jogja_kabkota: formData.alamat_jogja_kabkota || null,
          alamat_jogja_kecamatan: formData.alamat_jogja_kecamatan || null,
          alamat_jogja_kelurahan: formData.alamat_jogja_kelurahan || null,
          alamat_dompu_kabkota: formData.alamat_dompu_kabkota,
          alamat_dompu_kecamatan: formData.alamat_dompu_kecamatan,
          alamat_dompu_kelurahan: formData.alamat_dompu_kelurahan,
          nomor_hp: formData.nomor_hp,
          status_saat_ini: formData.status_saat_ini,
          perguruan_tinggi: formData.status_saat_ini === 'Kuliah' ? formData.perguruan_tinggi : null,
          fakultas_jurusan: formData.status_saat_ini === 'Kuliah' ? formData.fakultas_jurusan : null,
          tahun_masuk: formData.status_saat_ini === 'Kuliah' ? formData.tahun_masuk : null,
          program_studi: formData.status_saat_ini === 'Kuliah' ? formData.program_studi : null,
          nama_perusahaan: formData.status_saat_ini === 'Bekerja' ? formData.nama_perusahaan : null,
          posisi_jabatan: formData.status_saat_ini === 'Bekerja' ? formData.posisi_jabatan : null,
          bidang_industri: formData.status_saat_ini === 'Bekerja' ? formData.bidang_industri : null,
          tertarik_ikpmd: formData.tertarik_ikpmd,
        });
      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Data Berhasil Disimpan
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Terima Kasih!</h2>
            <p className="text-slate-500 leading-relaxed text-sm">
              Data kamu sudah kami terima. Semoga informasi ini bermanfaat untuk memperkuat tali silaturahmi teman-teman Dompu di Jogja.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
              IKPMD Jogja — Ikatan Keluarga Putra-Putri Dompu di Yogyakarta
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute top-8 right-1/3 w-32 h-32 bg-white/5 rounded-full" />

        <div className="relative max-w-2xl mx-auto px-4 pt-12 pb-16 sm:pt-16 sm:pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-emerald-200" />
            <span className="text-sm font-bold text-white tracking-wide">IKPMD Jogja</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Halo Teman-Teman<br />
            <span className="text-emerald-200">Dompu di Jogja!</span>
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
            Form pendataan ini dibuat agar kita bisa saling terhubung, memetakan teman-teman Dompu, dan mendukung kegiatan IKPMD.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <Phone className="w-4 h-4 text-emerald-200" />
              <span className="text-xs font-medium text-white/90">Data bersifat rahasia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <ArrowRight className="w-4 h-4 text-emerald-200" />
              <span className="text-xs font-medium text-white/90">Hanya 4 langkah mudah</span>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 20C1200 0 960 40 720 20C480 0 240 40 0 20L0 40Z" fill="#f8fafc"/>
          </svg>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-4 py-8 sm:py-10">
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Section 1: Data Pribadi */}
          <SectionCard icon={User} number={1} title="Data Pribadi" color="bg-gradient-to-r from-emerald-600 to-emerald-500">
            <InputField
              label="Nama Lengkap"
              value={formData.nama_lengkap}
              onChange={update('nama_lengkap')}
              placeholder="Masukkan nama lengkap"
              required
              error={errors.nama_lengkap}
            />
            <InputField
              label="Nama Panggilan / Alias"
              value={formData.nama_panggilan}
              onChange={update('nama_panggilan')}
              placeholder="Masukkan nama panggilan"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Tanggal Lahir"
                type="date"
                value={formData.tanggal_lahir}
                onChange={update('tanggal_lahir')}
                required
                error={errors.tanggal_lahir}
              />
              <RadioGroup
                label="Jenis Kelamin"
                value={formData.jenis_kelamin}
                onChange={update('jenis_kelamin')}
                options={[
                  { label: 'Laki-laki', value: 'Laki-laki' },
                  { label: 'Perempuan', value: 'Perempuan' },
                ]}
                required
                error={errors.jenis_kelamin}
              />
            </div>

            <AddressBlock title="Domisili Sekarang (Yogyakarta)">
              <SelectField
                label="Kabupaten/Kota"
                value={formData.alamat_jogja_kabkota}
                onChange={handleJogjaKabKotaChange}
                options={jogjaKabKotaList}
                placeholder="Pilih kab/kota"
              />
              <SelectField
                label="Kecamatan"
                value={formData.alamat_jogja_kecamatan}
                onChange={handleJogjaKecamatanChange}
                options={jogjaKecamatanList}
                placeholder="Pilih kecamatan"
              />
              <SelectField
                label="Kelurahan/Desa"
                value={formData.alamat_jogja_kelurahan}
                onChange={update('alamat_jogja_kelurahan')}
                options={jogjaKelurahanList}
                placeholder="Pilih kelurahan"
              />
            </AddressBlock>

            <AddressBlock title="Alamat Asal / Dompu" required>
              <SelectField
                label="Kabupaten/Kota"
                value={formData.alamat_dompu_kabkota}
                onChange={update('alamat_dompu_kabkota')}
                options={['Kabupaten Dompu']}
                placeholder="Kabupaten Dompu"
                required
              />
              <SelectField
                label="Kecamatan"
                value={formData.alamat_dompu_kecamatan}
                onChange={handleDompuKecamatanChange}
                options={dompuKecamatanList}
                placeholder="Pilih kecamatan"
                required
                error={errors.alamat_dompu_kecamatan}
              />
              <SelectField
                label="Kelurahan/Desa"
                value={formData.alamat_dompu_kelurahan}
                onChange={update('alamat_dompu_kelurahan')}
                options={dompuKelurahanList}
                placeholder="Pilih kelurahan/desa"
                required
                error={errors.alamat_dompu_kelurahan}
              />
            </AddressBlock>

            <InputField
              label="Nomor HP / WhatsApp"
              type="tel"
              value={formData.nomor_hp}
              onChange={update('nomor_hp')}
              placeholder="Contoh: 081234567890"
              required
              error={errors.nomor_hp}
            />
          </SectionCard>

          {/* Section 2: Status */}
          <SectionCard icon={Calendar} number={2} title="Status Saat Ini" color="bg-gradient-to-r from-teal-600 to-teal-500">
            <div data-error={!!errors.status_saat_ini}>
              <RadioGroup
                label="Apa status kamu saat ini?"
                value={formData.status_saat_ini}
                onChange={update('status_saat_ini')}
                options={[
                  { label: '🎓 Kuliah', value: 'Kuliah' },
                  { label: '💼 Bekerja', value: 'Bekerja' },
                ]}
                required
                error={errors.status_saat_ini}
              />
            </div>
          </SectionCard>

          {/* Section 3A: Pendidikan */}
          {formData.status_saat_ini === 'Kuliah' && (
            <SectionCard icon={GraduationCap} number={3} title="Data Pendidikan" color="bg-gradient-to-r from-blue-600 to-blue-500">
              <InputField
                label="Perguruan Tinggi / Universitas"
                value={formData.perguruan_tinggi}
                onChange={update('perguruan_tinggi')}
                placeholder="Contoh: Universitas Gadjah Mada"
                required
                error={errors.perguruan_tinggi}
              />
              <InputField
                label="Fakultas / Jurusan"
                value={formData.fakultas_jurusan}
                onChange={update('fakultas_jurusan')}
                placeholder="Contoh: Fakultas Teknik"
                required
                error={errors.fakultas_jurusan}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Tahun Masuk"
                  value={formData.tahun_masuk}
                  onChange={update('tahun_masuk')}
                  placeholder="Contoh: 2023"
                  error={errors.tahun_masuk}
                />
                <InputField
                  label="Program Studi"
                  value={formData.program_studi}
                  onChange={update('program_studi')}
                  placeholder="Contoh: Teknik Informatika"
                />
              </div>
            </SectionCard>
          )}

          {/* Section 3B: Pekerjaan */}
          {formData.status_saat_ini === 'Bekerja' && (
            <SectionCard icon={Briefcase} number={3} title="Data Pekerjaan" color="bg-gradient-to-r from-violet-600 to-violet-500">
              <InputField
                label="Nama Perusahaan / Instansi"
                value={formData.nama_perusahaan}
                onChange={update('nama_perusahaan')}
                placeholder="Contoh: PT. Maju Jaya"
                required
                error={errors.nama_perusahaan}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Posisi / Jabatan"
                  value={formData.posisi_jabatan}
                  onChange={update('posisi_jabatan')}
                  placeholder="Contoh: Software Engineer"
                  required
                  error={errors.posisi_jabatan}
                />
                <InputField
                  label="Bidang / Industri"
                  value={formData.bidang_industri}
                  onChange={update('bidang_industri')}
                  placeholder="Contoh: Teknologi Informasi"
                />
              </div>
            </SectionCard>
          )}

          {/* Section 4: Minat IKPMD */}
          <SectionCard icon={Heart} number={4} title="Minat Kegiatan IKPMD" color="bg-gradient-to-r from-rose-500 to-pink-500">
            <RadioGroup
              label="Apakah kamu tertarik untuk terlibat di IKPMD?"
              value={formData.tertarik_ikpmd}
              onChange={update('tertarik_ikpmd')}
              options={[
                { label: '✅ Ya, tertarik!', value: 'Ya' },
                { label: 'Belum / Tidak', value: 'Tidak' },
              ]}
              error={errors.tertarik_ikpmd}
            />
          </SectionCard>

          {/* Summary error banner */}
          {Object.keys(errors).length > 0 && (
            <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
              <p className="text-rose-700 text-sm font-bold mb-1">⚠ Ada {Object.keys(errors).length} field yang belum lengkap</p>
              <p className="text-rose-600 text-xs">Silakan periksa kembali isian di atas sebelum mengirim.</p>
            </div>
          )}

          {/* Submit error */}
          {submitError && (
            <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4 text-rose-700 text-sm font-medium">
              ⚠️ {submitError}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2 pb-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 active:scale-[0.98] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-base"
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Menyimpan data...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Kirim Data
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-3">
              Data kamu aman dan hanya digunakan untuk keperluan internal IKPMD
            </p>
          </div>
        </form>
      </main>

      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200 bg-white">
        © 2026 IKPMD Jogja — Ikatan Keluarga Putra-Putri Dompu di Yogyakarta
      </footer>
    </div>
  );
}
