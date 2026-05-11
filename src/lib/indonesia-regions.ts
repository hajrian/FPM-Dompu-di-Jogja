// Administrative divisions of Daerah Istimewa Yogyakarta (DIY) province
// and Kabupaten Dompu in Nusa Tenggara Barat
//
// Sources: Indonesian Wikipedia (Kemendagri data)
// In DIY, the terms "kapanewon" and "kemantren" are used instead of "kecamatan",
// and "kalurahan" instead of "kelurahan/desa" in kabupaten areas.
// In Kota Yogyakarta, the term "kemantren" = kecamatan and "kelurahan" = kelurahan/desa.

// ============================================================
// TYPE DEFINITIONS
// ============================================================

export interface KelurahanDesa {
  name: string;
  type: "kelurahan" | "desa" | "kalurahan";
}

export interface Kecamatan {
  name: string;
  code: string; // Kemendagri code
  kelurahanDesa: KelurahanDesa[];
}

export interface KabupatenKota {
  name: string;
  code: string; // Kemendagri code
  type: "kabupaten" | "kota";
  kecamatan: Kecamatan[];
}

export interface Provinsi {
  name: string;
  code: string; // Kemendagri code
  kabupatenKota: KabupatenKota[];
}

// ============================================================
// DAERAH ISTIMEWA YOGYAKARTA (DIY)
// ============================================================

export const DAERAH_ISTIMEWA_YOGYAKARTA: Provinsi = {
  name: "Daerah Istimewa Yogyakarta",
  code: "34",
  kabupatenKota: [
    // ----------------------------------------------------------
    // 1. KOTA YOGYAKARTA
    // 14 kemantren, 45 kelurahan
    // ----------------------------------------------------------
    {
      name: "Kota Yogyakarta",
      code: "34.71",
      type: "kota",
      kecamatan: [
        {
          name: "Danurejan",
          code: "34.71.04",
          kelurahanDesa: [
            { name: "Bausasran", type: "kelurahan" },
            { name: "Tegalpanggung", type: "kelurahan" },
            { name: "Suryatmajan", type: "kelurahan" },
          ],
        },
        {
          name: "Gedongtengen",
          code: "34.71.05",
          kelurahanDesa: [
            { name: "Pringgokusuman", type: "kelurahan" },
            { name: "Sosromenduran", type: "kelurahan" },
          ],
        },
        {
          name: "Gondokusuman",
          code: "34.71.03",
          kelurahanDesa: [
            { name: "Baciro", type: "kelurahan" },
            { name: "Demangan", type: "kelurahan" },
            { name: "Klitren", type: "kelurahan" },
            { name: "Kotabaru", type: "kelurahan" },
            { name: "Terban", type: "kelurahan" },
          ],
        },
        {
          name: "Gondomanan",
          code: "34.71.10",
          kelurahanDesa: [
            { name: "Ngupasan", type: "kelurahan" },
            { name: "Prawirodirjan", type: "kelurahan" },
          ],
        },
        {
          name: "Jetis",
          code: "34.71.02",
          kelurahanDesa: [
            { name: "Bumijo", type: "kelurahan" },
            { name: "Cokrodiningratan", type: "kelurahan" },
            { name: "Gowongan", type: "kelurahan" },
          ],
        },
        {
          name: "Kotagede",
          code: "34.71.14",
          kelurahanDesa: [
            { name: "Prenggan", type: "kelurahan" },
            { name: "Purbayan", type: "kelurahan" },
            { name: "Rejowinangun", type: "kelurahan" },
          ],
        },
        {
          name: "Kraton",
          code: "34.71.09",
          kelurahanDesa: [
            { name: "Panembahan", type: "kelurahan" },
            { name: "Kadipaten", type: "kelurahan" },
            { name: "Patehan", type: "kelurahan" },
          ],
        },
        {
          name: "Mantrijeron",
          code: "34.71.08",
          kelurahanDesa: [
            { name: "Gedongkiwo", type: "kelurahan" },
            { name: "Suryodiningratan", type: "kelurahan" },
            { name: "Mantrijeron", type: "kelurahan" },
          ],
        },
        {
          name: "Mergangsan",
          code: "34.71.12",
          kelurahanDesa: [
            { name: "Brontokusuman", type: "kelurahan" },
            { name: "Keparakan", type: "kelurahan" },
            { name: "Wirogunan", type: "kelurahan" },
          ],
        },
        {
          name: "Ngampilan",
          code: "34.71.06",
          kelurahanDesa: [
            { name: "Ngampilan", type: "kelurahan" },
            { name: "Notoprajan", type: "kelurahan" },
          ],
        },
        {
          name: "Pakualaman",
          code: "34.71.11",
          kelurahanDesa: [
            { name: "Gunungketur", type: "kelurahan" },
            { name: "Purwokinanti", type: "kelurahan" },
          ],
        },
        {
          name: "Tegalrejo",
          code: "34.71.01",
          kelurahanDesa: [
            { name: "Bener", type: "kelurahan" },
            { name: "Karangwaru", type: "kelurahan" },
            { name: "Kricak", type: "kelurahan" },
            { name: "Tegalrejo", type: "kelurahan" },
          ],
        },
        {
          name: "Umbulharjo",
          code: "34.71.13",
          kelurahanDesa: [
            { name: "Pandeyan", type: "kelurahan" },
            { name: "Sorosutan", type: "kelurahan" },
            { name: "Giwangan", type: "kelurahan" },
            { name: "Warungboto", type: "kelurahan" },
            { name: "Mujamuju", type: "kelurahan" },
            { name: "Semaki", type: "kelurahan" },
            { name: "Tahunan", type: "kelurahan" },
          ],
        },
        {
          name: "Wirobrajan",
          code: "34.71.07",
          kelurahanDesa: [
            { name: "Pakuncen", type: "kelurahan" },
            { name: "Patangpuluhan", type: "kelurahan" },
            { name: "Wirobrajan", type: "kelurahan" },
          ],
        },
      ],
    },

    // ----------------------------------------------------------
    // 2. KABUPATEN SLEMAN
    // 17 kapanewon, 86 kalurahan
    // ----------------------------------------------------------
    {
      name: "Kabupaten Sleman",
      code: "34.04",
      type: "kabupaten",
      kecamatan: [
        {
          name: "Berbah",
          code: "34.04.08",
          kelurahanDesa: [
            { name: "Jogotirto", type: "kalurahan" },
            { name: "Kalitirto", type: "kalurahan" },
            { name: "Sendangtirto", type: "kalurahan" },
            { name: "Tegaltirto", type: "kalurahan" },
          ],
        },
        {
          name: "Cangkringan",
          code: "34.04.17",
          kelurahanDesa: [
            { name: "Argomulyo", type: "kalurahan" },
            { name: "Glagaharjo", type: "kalurahan" },
            { name: "Kepuharjo", type: "kalurahan" },
            { name: "Wukisari", type: "kalurahan" },
            { name: "Umbulharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Depok",
          code: "34.04.07",
          kelurahanDesa: [
            { name: "Caturtunggal", type: "kalurahan" },
            { name: "Condongcatur", type: "kalurahan" },
            { name: "Maguwoharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Gamping",
          code: "34.04.01",
          kelurahanDesa: [
            { name: "Ambarketawang", type: "kalurahan" },
            { name: "Balecatur", type: "kalurahan" },
            { name: "Banyuraden", type: "kalurahan" },
            { name: "Nogotirto", type: "kalurahan" },
            { name: "Trihanggo", type: "kalurahan" },
          ],
        },
        {
          name: "Godean",
          code: "34.04.02",
          kelurahanDesa: [
            { name: "Sidoagung", type: "kalurahan" },
            { name: "Sidoarum", type: "kalurahan" },
            { name: "Sidokarto", type: "kalurahan" },
            { name: "Sidoluhur", type: "kalurahan" },
            { name: "Sidomoyo", type: "kalurahan" },
            { name: "Sidomulyo", type: "kalurahan" },
            { name: "Sidorejo", type: "kalurahan" },
          ],
        },
        {
          name: "Kalasan",
          code: "34.04.10",
          kelurahanDesa: [
            { name: "Purwomartani", type: "kalurahan" },
            { name: "Selomartani", type: "kalurahan" },
            { name: "Tamanmartani", type: "kalurahan" },
            { name: "Tirtomartani", type: "kalurahan" },
          ],
        },
        {
          name: "Minggir",
          code: "34.04.04",
          kelurahanDesa: [
            { name: "Sendangagung", type: "kalurahan" },
            { name: "Sendangarum", type: "kalurahan" },
            { name: "Sendangmulyo", type: "kalurahan" },
            { name: "Sendangrejo", type: "kalurahan" },
            { name: "Sendangsari", type: "kalurahan" },
          ],
        },
        {
          name: "Mlati",
          code: "34.04.06",
          kelurahanDesa: [
            { name: "Sendangadi", type: "kalurahan" },
            { name: "Sinduadi", type: "kalurahan" },
            { name: "Sumberadi", type: "kalurahan" },
            { name: "Tirtoadi", type: "kalurahan" },
            { name: "Tlogoadi", type: "kalurahan" },
          ],
        },
        {
          name: "Moyudan",
          code: "34.04.03",
          kelurahanDesa: [
            { name: "Sumberagung", type: "kalurahan" },
            { name: "Sumberarum", type: "kalurahan" },
            { name: "Sumberrahayu", type: "kalurahan" },
            { name: "Sumbersari", type: "kalurahan" },
          ],
        },
        {
          name: "Ngaglik",
          code: "34.04.12",
          kelurahanDesa: [
            { name: "Donoharjo", type: "kalurahan" },
            { name: "Minomartani", type: "kalurahan" },
            { name: "Sardonoharjo", type: "kalurahan" },
            { name: "Sariharjo", type: "kalurahan" },
            { name: "Sinduharjo", type: "kalurahan" },
            { name: "Sukoharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Ngemplak",
          code: "34.04.11",
          kelurahanDesa: [
            { name: "Bimomartani", type: "kalurahan" },
            { name: "Sindumartani", type: "kalurahan" },
            { name: "Umbulmartani", type: "kalurahan" },
            { name: "Wedomartani", type: "kalurahan" },
            { name: "Widodomartani", type: "kalurahan" },
          ],
        },
        {
          name: "Pakem",
          code: "34.04.16",
          kelurahanDesa: [
            { name: "Candibinangun", type: "kalurahan" },
            { name: "Hargobinangun", type: "kalurahan" },
            { name: "Harjobinangun", type: "kalurahan" },
            { name: "Pakembinangun", type: "kalurahan" },
            { name: "Purwobinangun", type: "kalurahan" },
          ],
        },
        {
          name: "Prambanan",
          code: "34.04.09",
          kelurahanDesa: [
            { name: "Bokoharjo", type: "kalurahan" },
            { name: "Gayamharjo", type: "kalurahan" },
            { name: "Madurejo", type: "kalurahan" },
            { name: "Sambirejo", type: "kalurahan" },
            { name: "Sumberharjo", type: "kalurahan" },
            { name: "Wukirharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Seyegan",
          code: "34.04.05",
          kelurahanDesa: [
            { name: "Margoagung", type: "kalurahan" },
            { name: "Margodadi", type: "kalurahan" },
            { name: "Margokaton", type: "kalurahan" },
            { name: "Margoluwih", type: "kalurahan" },
            { name: "Margomulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Sleman",
          code: "34.04.13",
          kelurahanDesa: [
            { name: "Caturharjo", type: "kalurahan" },
            { name: "Pandowoharjo", type: "kalurahan" },
            { name: "Tridadi", type: "kalurahan" },
            { name: "Triharjo", type: "kalurahan" },
            { name: "Trimulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Tempel",
          code: "34.04.14",
          kelurahanDesa: [
            { name: "Banyurejo", type: "kalurahan" },
            { name: "Lumbungrejo", type: "kalurahan" },
            { name: "Margorejo", type: "kalurahan" },
            { name: "Merdikorejo", type: "kalurahan" },
            { name: "Mororejo", type: "kalurahan" },
            { name: "Pondokrejo", type: "kalurahan" },
            { name: "Sumberejo", type: "kalurahan" },
            { name: "Tambakrejo", type: "kalurahan" },
          ],
        },
        {
          name: "Turi",
          code: "34.04.15",
          kelurahanDesa: [
            { name: "Bangunkerto", type: "kalurahan" },
            { name: "Donokerto", type: "kalurahan" },
            { name: "Girikerto", type: "kalurahan" },
            { name: "Wonokerto", type: "kalurahan" },
          ],
        },
      ],
    },

    // ----------------------------------------------------------
    // 3. KABUPATEN BANTUL
    // 17 kapanewon, 75 kalurahan
    // ----------------------------------------------------------
    {
      name: "Kabupaten Bantul",
      code: "34.02",
      type: "kabupaten",
      kecamatan: [
        {
          name: "Bambanglipuro",
          code: "34.02.05",
          kelurahanDesa: [
            { name: "Mulyodadi", type: "kalurahan" },
            { name: "Sidomulyo", type: "kalurahan" },
            { name: "Sumbermulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Banguntapan",
          code: "34.02.12",
          kelurahanDesa: [
            { name: "Banguntapan", type: "kalurahan" },
            { name: "Baturetno", type: "kalurahan" },
            { name: "Jagalan", type: "kalurahan" },
            { name: "Jambidan", type: "kalurahan" },
            { name: "Potorono", type: "kalurahan" },
            { name: "Singosaren", type: "kalurahan" },
            { name: "Tamanan", type: "kalurahan" },
            { name: "Wirokerten", type: "kalurahan" },
          ],
        },
        {
          name: "Bantul",
          code: "34.02.08",
          kelurahanDesa: [
            { name: "Bantul", type: "kalurahan" },
            { name: "Palbapang", type: "kalurahan" },
            { name: "Ringinharjo", type: "kalurahan" },
            { name: "Sabdodadi", type: "kalurahan" },
            { name: "Trirenggo", type: "kalurahan" },
          ],
        },
        {
          name: "Dlingo",
          code: "34.02.11",
          kelurahanDesa: [
            { name: "Dlingo", type: "kalurahan" },
            { name: "Jatimulyo", type: "kalurahan" },
            { name: "Mangunan", type: "kalurahan" },
            { name: "Muntuk", type: "kalurahan" },
            { name: "Temuwuh", type: "kalurahan" },
            { name: "Terong", type: "kalurahan" },
          ],
        },
        {
          name: "Imogiri",
          code: "34.02.10",
          kelurahanDesa: [
            { name: "Girirejo", type: "kalurahan" },
            { name: "Imogiri", type: "kalurahan" },
            { name: "Karangtalun", type: "kalurahan" },
            { name: "Karangtengah", type: "kalurahan" },
            { name: "Kebonagung", type: "kalurahan" },
            { name: "Selopamioro", type: "kalurahan" },
            { name: "Sriharjo", type: "kalurahan" },
            { name: "Wukirsari", type: "kalurahan" },
          ],
        },
        {
          name: "Jetis",
          code: "34.02.09",
          kelurahanDesa: [
            { name: "Canden", type: "kalurahan" },
            { name: "Patalan", type: "kalurahan" },
            { name: "Sumberagung", type: "kalurahan" },
            { name: "Trimulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Kasihan",
          code: "34.02.16",
          kelurahanDesa: [
            { name: "Bangunjiwo", type: "kalurahan" },
            { name: "Ngestiharjo", type: "kalurahan" },
            { name: "Tamantirto", type: "kalurahan" },
            { name: "Tirtonirmolo", type: "kalurahan" },
          ],
        },
        {
          name: "Kretek",
          code: "34.02.03",
          kelurahanDesa: [
            { name: "Donotirto", type: "kalurahan" },
            { name: "Parangtritis", type: "kalurahan" },
            { name: "Tirtohargo", type: "kalurahan" },
            { name: "Tirtomulyo", type: "kalurahan" },
            { name: "Tirtosari", type: "kalurahan" },
          ],
        },
        {
          name: "Pajangan",
          code: "34.02.07",
          kelurahanDesa: [
            { name: "Guwosari", type: "kalurahan" },
            { name: "Sendangsari", type: "kalurahan" },
            { name: "Triwidadi", type: "kalurahan" },
          ],
        },
        {
          name: "Pandak",
          code: "34.02.06",
          kelurahanDesa: [
            { name: "Caturharjo", type: "kalurahan" },
            { name: "Gilangharjo", type: "kalurahan" },
            { name: "Triharjo", type: "kalurahan" },
            { name: "Wijirejo", type: "kalurahan" },
          ],
        },
        {
          name: "Piyungan",
          code: "34.02.14",
          kelurahanDesa: [
            { name: "Srimulyo", type: "kalurahan" },
            { name: "Sitimulyo", type: "kalurahan" },
            { name: "Srimartani", type: "kalurahan" },
          ],
        },
        {
          name: "Pleret",
          code: "34.02.13",
          kelurahanDesa: [
            { name: "Bawuran", type: "kalurahan" },
            { name: "Pleret", type: "kalurahan" },
            { name: "Segoroyoso", type: "kalurahan" },
            { name: "Wonokromo", type: "kalurahan" },
            { name: "Wonolelo", type: "kalurahan" },
          ],
        },
        {
          name: "Pundong",
          code: "34.02.04",
          kelurahanDesa: [
            { name: "Panjangrejo", type: "kalurahan" },
            { name: "Seloharjo", type: "kalurahan" },
            { name: "Srihardono", type: "kalurahan" },
          ],
        },
        {
          name: "Sanden",
          code: "34.02.02",
          kelurahanDesa: [
            { name: "Gadingsari", type: "kalurahan" },
            { name: "Gadingharjo", type: "kalurahan" },
            { name: "Murtigading", type: "kalurahan" },
            { name: "Srigading", type: "kalurahan" },
          ],
        },
        {
          name: "Sedayu",
          code: "34.02.17",
          kelurahanDesa: [
            { name: "Argodadi", type: "kalurahan" },
            { name: "Argorejo", type: "kalurahan" },
            { name: "Argosari", type: "kalurahan" },
            { name: "Argomulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Sewon",
          code: "34.02.15",
          kelurahanDesa: [
            { name: "Bangunharjo", type: "kalurahan" },
            { name: "Panggungharjo", type: "kalurahan" },
            { name: "Pendowoharjo", type: "kalurahan" },
            { name: "Timbulharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Srandakan",
          code: "34.02.01",
          kelurahanDesa: [
            { name: "Poncosari", type: "kalurahan" },
            { name: "Trimurti", type: "kalurahan" },
          ],
        },
      ],
    },

    // ----------------------------------------------------------
    // 4. KABUPATEN GUNUNGKIDUL
    // 18 kapanewon, 144 kalurahan
    // ----------------------------------------------------------
    {
      name: "Kabupaten Gunungkidul",
      code: "34.03",
      type: "kabupaten",
      kecamatan: [
        {
          name: "Gedangsari",
          code: "34.03.14",
          kelurahanDesa: [
            { name: "Hargomulyo", type: "kalurahan" },
            { name: "Mertelu", type: "kalurahan" },
            { name: "Ngalang", type: "kalurahan" },
            { name: "Sampang", type: "kalurahan" },
            { name: "Serut", type: "kalurahan" },
            { name: "Tegalrejo", type: "kalurahan" },
            { name: "Watugajah", type: "kalurahan" },
          ],
        },
        {
          name: "Girisubo",
          code: "34.03.16",
          kelurahanDesa: [
            { name: "Balong", type: "kalurahan" },
            { name: "Jepitu", type: "kalurahan" },
            { name: "Karangawen", type: "kalurahan" },
            { name: "Jerukwudel", type: "kalurahan" },
            { name: "Pucung", type: "kalurahan" },
            { name: "Songbanyu", type: "kalurahan" },
            { name: "Nglindur", type: "kalurahan" },
            { name: "Tileng", type: "kalurahan" },
          ],
        },
        {
          name: "Karangmojo",
          code: "34.03.09",
          kelurahanDesa: [
            { name: "Bendungan", type: "kalurahan" },
            { name: "Bejiharjo", type: "kalurahan" },
            { name: "Gedangrejo", type: "kalurahan" },
            { name: "Jatiayu", type: "kalurahan" },
            { name: "Karangmojo", type: "kalurahan" },
            { name: "Kelor", type: "kalurahan" },
            { name: "Ngawis", type: "kalurahan" },
            { name: "Ngipak", type: "kalurahan" },
            { name: "Wiladeg", type: "kalurahan" },
          ],
        },
        {
          name: "Ngawen",
          code: "34.03.13",
          kelurahanDesa: [
            { name: "Beji", type: "kalurahan" },
            { name: "Jurangjero", type: "kalurahan" },
            { name: "Kampung", type: "kalurahan" },
            { name: "Sambirejo", type: "kalurahan" },
            { name: "Tancep", type: "kalurahan" },
            { name: "Watusigar", type: "kalurahan" },
          ],
        },
        {
          name: "Nglipar",
          code: "34.03.02",
          kelurahanDesa: [
            { name: "Katongan", type: "kalurahan" },
            { name: "Kedungkeris", type: "kalurahan" },
            { name: "Kedungpoh", type: "kalurahan" },
            { name: "Natah", type: "kalurahan" },
            { name: "Nglipar", type: "kalurahan" },
            { name: "Pengkol", type: "kalurahan" },
            { name: "Pilangrejo", type: "kalurahan" },
          ],
        },
        {
          name: "Paliyan",
          code: "34.03.05",
          kelurahanDesa: [
            { name: "Giring", type: "kalurahan" },
            { name: "Grogol", type: "kalurahan" },
            { name: "Karangasem", type: "kalurahan" },
            { name: "Karangduwet", type: "kalurahan" },
            { name: "Mulusan", type: "kalurahan" },
            { name: "Pampang", type: "kalurahan" },
            { name: "Sodo", type: "kalurahan" },
          ],
        },
        {
          name: "Panggang",
          code: "34.03.06",
          kelurahanDesa: [
            { name: "Giriharjo", type: "kalurahan" },
            { name: "Girikarto", type: "kalurahan" },
            { name: "Girimulyo", type: "kalurahan" },
            { name: "Girisekar", type: "kalurahan" },
            { name: "Girisuko", type: "kalurahan" },
            { name: "Giriwungu", type: "kalurahan" },
          ],
        },
        {
          name: "Patuk",
          code: "34.03.04",
          kelurahanDesa: [
            { name: "Beji", type: "kalurahan" },
            { name: "Bunder", type: "kalurahan" },
            { name: "Nglanggeran", type: "kalurahan" },
            { name: "Nglegi", type: "kalurahan" },
            { name: "Ngoro-oro", type: "kalurahan" },
            { name: "Patuk", type: "kalurahan" },
            { name: "Pengkok", type: "kalurahan" },
            { name: "Putat", type: "kalurahan" },
            { name: "Salam", type: "kalurahan" },
            { name: "Semoyo", type: "kalurahan" },
            { name: "Terbah", type: "kalurahan" },
          ],
        },
        {
          name: "Playen",
          code: "34.03.03",
          kelurahanDesa: [
            { name: "Banaran", type: "kalurahan" },
            { name: "Bandung", type: "kalurahan" },
            { name: "Banyusoco", type: "kalurahan" },
            { name: "Bleberan", type: "kalurahan" },
            { name: "Dengok", type: "kalurahan" },
            { name: "Gading", type: "kalurahan" },
            { name: "Getas", type: "kalurahan" },
            { name: "Logandeng", type: "kalurahan" },
            { name: "Ngawu", type: "kalurahan" },
            { name: "Ngleri", type: "kalurahan" },
            { name: "Ngunut", type: "kalurahan" },
            { name: "Playen", type: "kalurahan" },
            { name: "Plembutan", type: "kalurahan" },
          ],
        },
        {
          name: "Ponjong",
          code: "34.03.10",
          kelurahanDesa: [
            { name: "Bedoyo", type: "kalurahan" },
            { name: "Genjahan", type: "kalurahan" },
            { name: "Gombang", type: "kalurahan" },
            { name: "Karangasem", type: "kalurahan" },
            { name: "Kenteng", type: "kalurahan" },
            { name: "Ponjong", type: "kalurahan" },
            { name: "Sawahan", type: "kalurahan" },
            { name: "Sidorejo", type: "kalurahan" },
            { name: "Sumbergiri", type: "kalurahan" },
            { name: "Tambakromo", type: "kalurahan" },
            { name: "Umbulrejo", type: "kalurahan" },
          ],
        },
        {
          name: "Purwosari",
          code: "34.03.18",
          kelurahanDesa: [
            { name: "Giriasih", type: "kalurahan" },
            { name: "Giricahyo", type: "kalurahan" },
            { name: "Girijatih", type: "kalurahan" },
            { name: "Giripurwo", type: "kalurahan" },
            { name: "Giritirto", type: "kalurahan" },
          ],
        },
        {
          name: "Rongkop",
          code: "34.03.11",
          kelurahanDesa: [
            { name: "Botodayaan", type: "kalurahan" },
            { name: "Bohol", type: "kalurahan" },
            { name: "Karangwuni", type: "kalurahan" },
            { name: "Melikan", type: "kalurahan" },
            { name: "Petir", type: "kalurahan" },
            { name: "Pringombo", type: "kalurahan" },
            { name: "Pucanganom", type: "kalurahan" },
            { name: "Semugih", type: "kalurahan" },
          ],
        },
        {
          name: "Saptosari",
          code: "34.03.15",
          kelurahanDesa: [
            { name: "Jetis", type: "kalurahan" },
            { name: "Kanigoro", type: "kalurahan" },
            { name: "Kepek", type: "kalurahan" },
            { name: "Krambilsawit", type: "kalurahan" },
            { name: "Monggol", type: "kalurahan" },
            { name: "Ngloro", type: "kalurahan" },
            { name: "Planjan", type: "kalurahan" },
          ],
        },
        {
          name: "Semanu",
          code: "34.03.08",
          kelurahanDesa: [
            { name: "Candirejo", type: "kalurahan" },
            { name: "Dadapayu", type: "kalurahan" },
            { name: "Ngeposari", type: "kalurahan" },
            { name: "Pacarejo", type: "kalurahan" },
            { name: "Semanu", type: "kalurahan" },
          ],
        },
        {
          name: "Semin",
          code: "34.03.12",
          kelurahanDesa: [
            { name: "Bendung", type: "kalurahan" },
            { name: "Bulurejo", type: "kalurahan" },
            { name: "Candirejo", type: "kalurahan" },
            { name: "Kalitekuk", type: "kalurahan" },
            { name: "Karangsari", type: "kalurahan" },
            { name: "Kemejing", type: "kalurahan" },
            { name: "Pundungsari", type: "kalurahan" },
            { name: "Rejosari", type: "kalurahan" },
            { name: "Semin", type: "kalurahan" },
            { name: "Sumberejo", type: "kalurahan" },
          ],
        },
        {
          name: "Tanjungsari",
          code: "34.03.17",
          kelurahanDesa: [
            { name: "Banjarejo", type: "kalurahan" },
            { name: "Hargosari", type: "kalurahan" },
            { name: "Kemadang", type: "kalurahan" },
            { name: "Kemiri", type: "kalurahan" },
            { name: "Ngestirejo", type: "kalurahan" },
          ],
        },
        {
          name: "Tepus",
          code: "34.03.07",
          kelurahanDesa: [
            { name: "Giripanggung", type: "kalurahan" },
            { name: "Purwodadi", type: "kalurahan" },
            { name: "Sidoharjo", type: "kalurahan" },
            { name: "Sumberwungu", type: "kalurahan" },
            { name: "Tepus", type: "kalurahan" },
          ],
        },
        {
          name: "Wonosari",
          code: "34.03.01",
          kelurahanDesa: [
            { name: "Baleharjo", type: "kalurahan" },
            { name: "Duwet", type: "kalurahan" },
            { name: "Gari", type: "kalurahan" },
            { name: "Karangtengah", type: "kalurahan" },
            { name: "Karangrejek", type: "kalurahan" },
            { name: "Kepek", type: "kalurahan" },
            { name: "Mulo", type: "kalurahan" },
            { name: "Piyaman", type: "kalurahan" },
            { name: "Pulutan", type: "kalurahan" },
            { name: "Selang", type: "kalurahan" },
            { name: "Siraman", type: "kalurahan" },
            { name: "Wareng", type: "kalurahan" },
            { name: "Wonosari", type: "kalurahan" },
            { name: "Wunung", type: "kalurahan" },
          ],
        },
      ],
    },

    // ----------------------------------------------------------
    // 5. KABUPATEN KULON PROGO
    // 12 kapanewon, 1 kelurahan, 87 kalurahan
    // ----------------------------------------------------------
    {
      name: "Kabupaten Kulon Progo",
      code: "34.01",
      type: "kabupaten",
      kecamatan: [
        {
          name: "Galur",
          code: "34.01.04",
          kelurahanDesa: [
            { name: "Banaran", type: "kalurahan" },
            { name: "Brosot", type: "kalurahan" },
            { name: "Karangsewu", type: "kalurahan" },
            { name: "Kranggan", type: "kalurahan" },
            { name: "Nomporejo", type: "kalurahan" },
            { name: "Pandowan", type: "kalurahan" },
            { name: "Tirtarahayu", type: "kalurahan" },
          ],
        },
        {
          name: "Girimulyo",
          code: "34.01.09",
          kelurahanDesa: [
            { name: "Giripurwo", type: "kalurahan" },
            { name: "Jatimulyo", type: "kalurahan" },
            { name: "Pendoworejo", type: "kalurahan" },
            { name: "Purwosari", type: "kalurahan" },
          ],
        },
        {
          name: "Kalibawang",
          code: "34.01.12",
          kelurahanDesa: [
            { name: "Banjararum", type: "kalurahan" },
            { name: "Banjarasri", type: "kalurahan" },
            { name: "Banjarharjo", type: "kalurahan" },
            { name: "Banjaroyo", type: "kalurahan" },
          ],
        },
        {
          name: "Kokap",
          code: "34.01.08",
          kelurahanDesa: [
            { name: "Hargomulyo", type: "kalurahan" },
            { name: "Hargorejo", type: "kalurahan" },
            { name: "Hargotirto", type: "kalurahan" },
            { name: "Hargowilis", type: "kalurahan" },
            { name: "Kalirejo", type: "kalurahan" },
          ],
        },
        {
          name: "Lendah",
          code: "34.01.05",
          kelurahanDesa: [
            { name: "Bumirejo", type: "kalurahan" },
            { name: "Gulurejo", type: "kalurahan" },
            { name: "Jatirejo", type: "kalurahan" },
            { name: "Ngentakrejo", type: "kalurahan" },
            { name: "Sidorejo", type: "kalurahan" },
            { name: "Wahyuharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Nanggulan",
          code: "34.01.10",
          kelurahanDesa: [
            { name: "Banyuroto", type: "kalurahan" },
            { name: "Kembang", type: "kalurahan" },
            { name: "Donomulyo", type: "kalurahan" },
            { name: "Jatisarono", type: "kalurahan" },
            { name: "Tanjungharjo", type: "kalurahan" },
            { name: "Wijimulyo", type: "kalurahan" },
          ],
        },
        {
          name: "Panjatan",
          code: "34.01.03",
          kelurahanDesa: [
            { name: "Bojong", type: "kalurahan" },
            { name: "Bugel", type: "kalurahan" },
            { name: "Cerme", type: "kalurahan" },
            { name: "Depok", type: "kalurahan" },
            { name: "Garongan", type: "kalurahan" },
            { name: "Gotakan", type: "kalurahan" },
            { name: "Kanoman", type: "kalurahan" },
            { name: "Krembangan", type: "kalurahan" },
            { name: "Panjatan", type: "kalurahan" },
            { name: "Pleret", type: "kalurahan" },
            { name: "Tayuban", type: "kalurahan" },
          ],
        },
        {
          name: "Pengasih",
          code: "34.01.07",
          kelurahanDesa: [
            { name: "Karangsari", type: "kalurahan" },
            { name: "Kedungsari", type: "kalurahan" },
            { name: "Margosari", type: "kalurahan" },
            { name: "Pengasih", type: "kalurahan" },
            { name: "Sidomulyo", type: "kalurahan" },
            { name: "Sendangsari", type: "kalurahan" },
            { name: "Tawangsari", type: "kalurahan" },
          ],
        },
        {
          name: "Samigaluh",
          code: "34.01.11",
          kelurahanDesa: [
            { name: "Banjarsari", type: "kalurahan" },
            { name: "Gerbosari", type: "kalurahan" },
            { name: "Kebonharjo", type: "kalurahan" },
            { name: "Ngargosari", type: "kalurahan" },
            { name: "Pagerharjo", type: "kalurahan" },
            { name: "Purwoharjo", type: "kalurahan" },
            { name: "Sidoharjo", type: "kalurahan" },
          ],
        },
        {
          name: "Sentolo",
          code: "34.01.06",
          kelurahanDesa: [
            { name: "Banguncipto", type: "kalurahan" },
            { name: "Demangrejo", type: "kalurahan" },
            { name: "Kaliagung", type: "kalurahan" },
            { name: "Salamrejo", type: "kalurahan" },
            { name: "Sentolo", type: "kalurahan" },
            { name: "Srikayangan", type: "kalurahan" },
            { name: "Sukoreno", type: "kalurahan" },
            { name: "Tuksono", type: "kalurahan" },
          ],
        },
        {
          name: "Temon",
          code: "34.01.01",
          kelurahanDesa: [
            { name: "Demen", type: "kalurahan" },
            { name: "Glagah", type: "kalurahan" },
            { name: "Jangkaran", type: "kalurahan" },
            { name: "Janten", type: "kalurahan" },
            { name: "Kalidengen", type: "kalurahan" },
            { name: "Kaligintung", type: "kalurahan" },
            { name: "Karangwuluh", type: "kalurahan" },
            { name: "Kebonrejo", type: "kalurahan" },
            { name: "Kedundang", type: "kalurahan" },
            { name: "Kulur", type: "kalurahan" },
            { name: "Palihan", type: "kalurahan" },
            { name: "Plumbon", type: "kalurahan" },
            { name: "Sindutan", type: "kalurahan" },
            { name: "Temon Kulon", type: "kalurahan" },
            { name: "Temon Wetan", type: "kalurahan" },
          ],
        },
        {
          name: "Wates",
          code: "34.01.02",
          kelurahanDesa: [
            { name: "Wates", type: "kelurahan" },
            { name: "Bendungan", type: "kalurahan" },
            { name: "Giripeni", type: "kalurahan" },
            { name: "Karangwuni", type: "kalurahan" },
            { name: "Kulwaru", type: "kalurahan" },
            { name: "Ngestiharjo", type: "kalurahan" },
            { name: "Sogan", type: "kalurahan" },
            { name: "Triharjo", type: "kalurahan" },
          ],
        },
      ],
    },
  ],
};

// ============================================================
// KABUPATEN DOMPU, NUSA TENGGARA BARAT
// 8 kecamatan, 9 kelurahan, 72 desa
// ============================================================

export const KABUPATEN_DOMPU: KabupatenKota = {
  name: "Kabupaten Dompu",
  code: "52.05",
  type: "kabupaten",
  kecamatan: [
    {
      name: "Dompu",
      code: "52.05.01",
      kelurahanDesa: [
        { name: "Dore Bara", type: "desa" },
        { name: "Katua", type: "desa" },
        { name: "Karamabura", type: "desa" },
        { name: "Kareke", type: "desa" },
        { name: "Mangge Nae", type: "desa" },
        { name: "Manggeasi", type: "desa" },
        { name: "Mbawi", type: "desa" },
        { name: "O'o", type: "desa" },
        { name: "Sori Sakolo", type: "desa" },
        { name: "Bada", type: "kelurahan" },
        { name: "Bali", type: "kelurahan" },
        { name: "Karijawa", type: "kelurahan" },
        { name: "Potu", type: "kelurahan" },
        { name: "Dora Tangga", type: "kelurahan" },
        { name: "Kandai I", type: "kelurahan" },
      ],
    },
    {
      name: "Kempo",
      code: "52.05.02",
      kelurahanDesa: [
        { name: "Doro Kobo", type: "desa" },
        { name: "Kempo", type: "desa" },
        { name: "Konte", type: "desa" },
        { name: "Songgaja", type: "desa" },
        { name: "Soro", type: "desa" },
        { name: "Soro Barat", type: "desa" },
        { name: "Ta'a", type: "desa" },
        { name: "Tolo Kalo", type: "desa" },
      ],
    },
    {
      name: "Hu'u",
      code: "52.05.03",
      kelurahanDesa: [
        { name: "Adu", type: "desa" },
        { name: "Cempi Jaya", type: "desa" },
        { name: "Daha", type: "desa" },
        { name: "Hu'u", type: "desa" },
        { name: "Jala", type: "desa" },
        { name: "Merada", type: "desa" },
        { name: "Rasa Bou", type: "desa" },
        { name: "Sawe", type: "desa" },
      ],
    },
    {
      name: "Kilo",
      code: "52.05.04",
      kelurahanDesa: [
        { name: "Kiwu", type: "desa" },
        { name: "Kramat", type: "desa" },
        { name: "Lasi", type: "desa" },
        { name: "Malaju", type: "desa" },
        { name: "Mbuju", type: "desa" },
        { name: "Taropo", type: "desa" },
      ],
    },
    {
      name: "Woja",
      code: "52.05.05",
      kelurahanDesa: [
        { name: "Baka Jaya", type: "desa" },
        { name: "Bara", type: "desa" },
        { name: "Mada Prama", type: "desa" },
        { name: "Matua", type: "desa" },
        { name: "Nowa", type: "desa" },
        { name: "Mumbu", type: "desa" },
        { name: "Raba Baka", type: "desa" },
        { name: "Riwo", type: "desa" },
        { name: "Saneo", type: "desa" },
        { name: "Sera Kapi", type: "desa" },
        { name: "Wawonduru", type: "desa" },
        { name: "Kandai II", type: "kelurahan" },
        { name: "Monta Baru", type: "kelurahan" },
        { name: "Simpasai", type: "kelurahan" },
      ],
    },
    {
      name: "Pekat",
      code: "52.05.06",
      kelurahanDesa: [
        { name: "Beringin Jaya", type: "desa" },
        { name: "Calabai", type: "desa" },
        { name: "Doro Peti", type: "desa" },
        { name: "Pekat", type: "desa" },
        { name: "Kadindi", type: "desa" },
        { name: "Kadindi Barat", type: "desa" },
        { name: "Karombo", type: "desa" },
        { name: "Nangakara", type: "desa" },
        { name: "Nangamiro", type: "desa" },
        { name: "Sori Nomo", type: "desa" },
        { name: "Sori Tatanga", type: "desa" },
        { name: "Tambora", type: "desa" },
      ],
    },
    {
      name: "Manggelewa",
      code: "52.05.07",
      kelurahanDesa: [
        { name: "Anamina", type: "desa" },
        { name: "Banggo", type: "desa" },
        { name: "Doromelo", type: "desa" },
        { name: "Kampasi Meci", type: "desa" },
        { name: "Kwangko", type: "desa" },
        { name: "Lanci Jaya", type: "desa" },
        { name: "Nangatumpu", type: "desa" },
        { name: "Nusa Jaya", type: "desa" },
        { name: "Soriutu", type: "desa" },
        { name: "Suka Damai", type: "desa" },
        { name: "Tanju", type: "desa" },
        { name: "Teka Sire", type: "desa" },
      ],
    },
    {
      name: "Pajo",
      code: "52.05.08",
      kelurahanDesa: [
        { name: "Jambu", type: "desa" },
        { name: "Lepadi", type: "desa" },
        { name: "Lune", type: "desa" },
        { name: "Ranggo", type: "desa" },
        { name: "Temba Lae", type: "desa" },
        { name: "UPT. Woko", type: "desa" },
      ],
    },
  ],
};

// ============================================================
// CONVENIENCE: Flat lookup arrays
// ============================================================

/** All kabupaten/kota in DIY */
export const DIY_KABUPATEN_KOTA = DAERAH_ISTIMEWA_YOGYAKARTA.kabupatenKota;

/** All kecamatan across all kabupaten/kota in DIY */
export const DIY_ALL_KECAMATAN = DIY_KABUPATEN_KOTA.flatMap((kk) =>
  kk.kecamatan.map((k) => ({
    kabupatenKota: kk.name,
    kecamatan: k.name,
    code: k.code,
  }))
);

/** All kelurahan/desa across all kecamatan in DIY */
export const DIY_ALL_KELURAHAN_DESA = DIY_KABUPATEN_KOTA.flatMap((kk) =>
  kk.kecamatan.flatMap((k) =>
    k.kelurahanDesa.map((kd) => ({
      kabupatenKota: kk.name,
      kecamatan: k.name,
      name: kd.name,
      type: kd.type,
    }))
  )
);

/** All kecamatan in Kabupaten Dompu */
export const DOMPU_ALL_KECAMATAN = KABUPATEN_DOMPU.kecamatan.map((k) => ({
  kecamatan: k.name,
  code: k.code,
}));

/** All kelurahan/desa in Kabupaten Dompu */
export const DOMPU_ALL_KELURAHAN_DESA = KABUPATEN_DOMPU.kecamatan.flatMap((k) =>
  k.kelurahanDesa.map((kd) => ({
    kecamatan: k.name,
    name: kd.name,
    type: kd.type,
  }))
);
