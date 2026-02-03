import React from "react";

const StyleHarmonySection = () => {
  const duos = [
    {
      id: "01",
      title: "The Nordic Pulse",
      description:
        "A convergence of sharp silhouettes and soft natural textures.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399qRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
      ],
    },
    {
      id: "02",
      title: "Organic Tech",
      description: "Smart functionality meeting artisanal clay and oak.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM23QPvyI3rj-yJ2RF3f-s8QkGCXrkU3wqKIECQMFhhJvH4km9569XbCLNRTWOhBXs1Uh1Q1xw-QuJboN-QTxHT_qctpATYZZcPODXBh-I5KCf-9a6LXIkkYpK0Z4Mbsx5cLlEqxl9mVsWDMDfjXtn5brReGybZKiGUY4sUEolabKK9a8J1Vyv7fb-iiZ_w5458uaAM4RXI1QHUsuVWmgzfhe4S3bkJZTTJ6KDc9nO7LQweTCkTEKm9txRMBrvnKXaNFebNRpLjEk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      ],
    },
        {
      id: "03",
      title: "Organic Tech",
      description: "Smart functionality meeting artisanal clay and oak.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM23QPvyI3rj-yJ2RF3f-s8QkGCXrkU3wqKIECQMFhhJvH4km9569XbCLNRTWOhBXs1Uh1Q1xw-QuJboN-QTxHT_qctpATYZZcPODXBh-I5KCf-9a6LXIkkYpK0Z4Mbsx5cLlEqxl9mVsWDMDfjXtn5brReGybZKiGUY4sUEolabKK9a8J1Vyv7fb-iiZ_w5458uaAM4RXI1QHUsuVWmgzfhe4S3bkJZTTJ6KDc9nO7LQweTCkTEKm9txRMBrvnKXaNFebNRpLjEk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      ],
    },
        {
      id: "04",
      title: "Organic Tech",
      description: "Smart functionality meeting artisanal clay and oak.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM23QPvyI3rj-yJ2RF3f-s8QkGCXrkU3wqKIECQMFhhJvH4km9569XbCLNRTWOhBXs1Uh1Q1xw-QuJboN-QTxHT_qctpATYZZcPODXBh-I5KCf-9a6LXIkkYpK0Z4Mbsx5cLlEqxl9mVsWDMDfjXtn5brReGybZKiGUY4sUEolabKK9a8J1Vyv7fb-iiZ_w5458uaAM4RXI1QHUsuVWmgzfhe4S3bkJZTTJ6KDc9nO7LQweTCkTEKm9txRMBrvnKXaNFebNRpLjEk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      ],
    },
        {
      id: "05",
      title: "Organic Tech",
      description: "Smart functionality meeting artisanal clay and oak.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM23QPvyI3rj-yJ2RF3f-s8QkGCXrkU3wqKIECQMFhhJvH4km9569XbCLNRTWOhBXs1Uh1Q1xw-QuJboN-QTxHT_qctpATYZZcPODXBh-I5KCf-9a6LXIkkYpK0Z4Mbsx5cLlEqxl9mVsWDMDfjXtn5brReGybZKiGUY4sUEolabKK9a8J1Vyv7fb-iiZ_w5458uaAM4RXI1QHUsuVWmgzfhe4S3bkJZTTJ6KDc9nO7LQweTCkTEKm9txRMBrvnKXaNFebNRpLjEk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      ],
    },
        {
      id: "06",
      title: "Organic Tech",
      description: "Smart functionality meeting artisanal clay and oak.",
      mainImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
      smallImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM23QPvyI3rj-yJ2RF3f-s8QkGCXrkU3wqKIECQMFhhJvH4km9569XbCLNRTWOhBXs1Uh1Q1xw-QuJboN-QTxHT_qctpATYZZcPODXBh-I5KCf-9a6LXIkkYpK0Z4Mbsx5cLlEqxl9mVsWDMDfjXtn5brReGybZKiGUY4sUEolabKK9a8J1Vyv7fb-iiZ_w5458uaAM4RXI1QHUsuVWmgzfhe4S3bkJZTTJ6KDc9nO7LQweTCkTEKm9txRMBrvnKXaNFebNRpLjEk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo9q-bljtsZb0NxaM30rNK_F6w0jZWF5N4lHGXW0CT3xMOh0KXNmWkZwWXaQ421NkZRixq2_Nv1LffMY48JGwam-Pi2k5iq4q_AB32exEsRP6fPpLiphiUOwwTLUJ9rAv7gpFUiiEmyt8CTZcD1yQzdrRrbQuvA_p6A42UzQtMbT9dwsBgCEsXnBXFpGdBnH8yv2hLVT9b-S8m5E6hP7CGO-mTlBvL2ZXiRNSiLgZUmlxUMZy-ZTGCryDTmpOcKH2Kmv8_HZj_y8",
      ],
    },
    // Add more items here if needed
  ];

  const handleImageClick = (title) => {
    alert(`You clicked on "${title}"! 🎯`);
  };

  return (
    <section className="mb-40">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold mt-10 mb-4">Style Harmony</h2>
        <p className="opacity-60 max-w-xl">
          AI-generated pairings designed to breathe life into your wardrobe and home.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-8 overflow-x-auto scroll-smooth px-12 py-8 no-scrollbar">
        {duos.map((duo) => (
          <div
            key={duo.id}
            className="flex-none w-[600px] group breathe-hover transition-all duration-700"
          >
            <div className="glass-card rounded-[2.5rem] p-8 flex gap-8 items-center h-[380px]">
              <div
                onClick={() => handleImageClick(duo.title)}
                className="w-1/2 h-full rounded-2xl bg-cover bg-center shadow-lg cursor-pointer"
                style={{ backgroundImage: `url('${duo.mainImage}')` }}
              ></div>

              <div className="w-1/2 space-y-4">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                  Duo {duo.id}
                </span>
                <h3 className="text-2xl font-bold">{duo.title}</h3>
                <p className="text-sm opacity-60 italic">{duo.description}</p>
                <div className="pt-4 flex gap-2">
                  {duo.smallImages.map((img, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-lg bg-cover bg-center border border-white/40"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  ))}
                </div>
                <button className="mt-4 text-primary font-bold text-sm flex items-center gap-2">
                  Explore Pairing{" "}
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StyleHarmonySection;
