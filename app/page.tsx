import React from 'react';

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#c4b5fd", // Background ungu muda (Lavender)
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Dekorasi Background (Lingkaran Ungu di pojok) */}
      <div style={{
        position: "absolute", top: "-50px", left: "-50px", 
        width: "200px", height: "200px", borderRadius: "50%", 
        background: "#a78bfa", opacity: "0.5"
      }}></div>
      <div style={{
        position: "absolute", bottom: "-50px", right: "-50px", 
        width: "300px", height: "300px", borderRadius: "50%", 
        background: "#8b5cf6", opacity: "0.3"
      }}></div>

      {/* MAIN CARD CONTAINER */}
      <main style={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "1100px",
        borderRadius: "24px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        padding: "40px 50px",
        position: "relative",
        zIndex: 10
      }}>

        {/* HEADER / NAVBAR */}
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px"}}>
          <div style={{
            fontWeight: "900", fontSize: "24px", color: "#7c3aed", 
            background: "#ede9fe", width: "50px", height: "50px", 
            borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            Auliya Nailul Muna
          </div>
          <div style={{color: "#6b7280", fontSize: "14px", display: "flex", gap: "20px"}}>
            <span style={{cursor:"pointer"}}>About</span>
            <span style={{cursor:"pointer"}}>Experience</span>
            <span style={{cursor:"pointer"}}>Skills</span>
          </div>
        </nav>

        {/* HERO SECTION (Split 2 Kolom) */}
        <section style={{display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: "80px"}}>
          
          {/* KOLOM KIRI (TEKS) */}
          <div style={{flex: "1 1 500px", paddingRight: "40px", marginBottom: "40px"}}>
            <p style={{fontSize: "18px", fontWeight: "600", color: "#6b7280", marginBottom: "10px"}}>
              Hi, I'm Auliya Nailul Muna 👋
            </p>
            <h1 style={{
              fontSize: "48px", lineHeight: "1.2", color: "#4c1d95", 
              marginBottom: "20px", fontWeight: "800"
            }}>
              Admin & <br/>
              <span style={{color: "#7c3aed"}}>Social Media Specialist</span>
            </h1>
            <p style={{color: "#6b7280", lineHeight: "1.6", marginBottom: "30px", fontSize: "16px"}}>
              Mahasiswi Manajemen SDM UMS yang berpengalaman mengelola data, 
              media sosial bisnis, dan marketplace. Terbiasa bekerja dengan target, 
              disiplin tinggi, dan detail oriented. <br/>
              📍 Kendal | 📧 nanila571@gmail.com
            </p>
            
            {/* BUTTONS */}
            <div style={{display: "flex", gap: "15px"}}>
              <button style={{
                background: "#7c3aed", color: "white", border: "none",
                padding: "12px 30px", borderRadius: "8px", fontWeight: "bold",
                cursor: "pointer", boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)"
              }}>
                Email Me
              </button>
              <button style={{
                background: "#f3f4f6", color: "#4b5563", border: "none",
                padding: "12px 30px", borderRadius: "8px", fontWeight: "bold",
                cursor: "pointer"
              }}>
                Download CV
              </button>
            </div>

            {/* SOCIAL ICONS (Placeholder) */}
            <div style={{marginTop: "30px", display: "flex", gap: "15px", color: "#9ca3af", fontSize: "20px"}}>
              <span>📷</span> <span>💼</span> <span>📱</span>
            </div>
          </div>

          {/* KOLOM KANAN (FOTO) */}
          <div style={{flex: "1 1 400px", display: "flex", justifyContent: "center", position: "relative"}}>
            {/* Lingkaran Dekorasi Belakang Foto */}
            <div style={{
              position: "absolute", width: "350px", height: "350px", 
              background: "#ede9fe", borderRadius: "50%", zIndex: 0,
              top: "20px", right: "20px"
            }}></div>
            <div style={{
              position: "absolute", width: "100px", height: "100px", 
              background: "linear-gradient(135deg, #7c3aed, #c4b5fd)", borderRadius: "50%", 
              zIndex: 2, bottom: "0", left: "40px", boxShadow: "0 10px 20px rgba(124, 58, 237, 0.3)"
            }}></div>
            
            {/* Foto Profil */}
            <div style={{
              width: "320px", height: "320px", borderRadius: "50%", 
              overflow: "hidden", border: "5px solid white", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)", zIndex: 1,
              backgroundColor: "#ddd", // Placeholder warna jika gambar tidak ada
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {/* Ganti src ini dengan foto asli Auliya */}
              <img 
                src="./public/foto.jpeg" 
                alt="Auliya Nailul Muna" 
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div>
          </div>
        </section>

        {/* DATA DETAIL (Experience & Skills) - Dibuat Grid agar rapi */}
        <section style={{borderTop: "1px solid #e5e7eb", paddingTop: "50px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px"}}>
            
            {/* PENGALAMAN */}
            <div>
              <h3 style={{color: "#4c1d95", fontSize: "22px", marginBottom: "20px"}}>💼 Pengalaman Kerja</h3>
              
              <div style={{marginBottom: "20px"}}>
                <h4 style={{margin: "0 0 5px 0", color: "#1f2937"}}>Admin Toko Perlengkapan Bayi</h4>
                <span style={{fontSize: "14px", color: "#7c3aed", fontWeight: "600"}}>2020 – 2021</span>
                <ul style={{color: "#4b5563", fontSize: "14px", paddingLeft: "20px", marginTop: "10px", lineHeight: "1.6"}}>
                  <li>Pencatatan transaksi & laporan penjualan</li>
                  <li>Manajemen stok & inventory</li>
                  <li>Kelola Instagram, Facebook, TikTok</li>
                  <li>Operasional Shopee & Tokopedia</li>
                </ul>
              </div>

              <div>
                <h4 style={{margin: "0 0 5px 0", color: "#1f2937"}}>Magang Notaris</h4>
                <span style={{fontSize: "14px", color: "#7c3aed", fontWeight: "600"}}>2 Bulan</span>
                <ul style={{color: "#4b5563", fontSize: "14px", paddingLeft: "20px", marginTop: "10px", lineHeight: "1.6"}}>
                  <li>Data entry Microsoft Excel & Word</li>
                  <li>Penyusunan laporan harian & arsip</li>
                </ul>
              </div>
            </div>

            {/* PENDIDIKAN & SKILLS */}
            <div>
              <div style={{marginBottom: "30px"}}>
                <h3 style={{color: "#4c1d95", fontSize: "22px", marginBottom: "20px"}}>🎓 Pendidikan</h3>
                <div style={{background: "#f9fafb", padding: "15px", borderRadius: "12px", borderLeft: "4px solid #7c3aed"}}>
                  <strong style={{display:"block", color: "#1f2937"}}>S1 Manajemen SDM</strong>
                  <span style={{color: "#6b7280", fontSize: "14px"}}>Univ. Muhammadiyah Surakarta (2022–2026)</span>
                  <div style={{marginTop: "5px", fontWeight: "bold", color: "#7c3aed"}}>IPK: 3.58</div>
                </div>
              </div>

              <div>
                <h3 style={{color: "#4c1d95", fontSize: "22px", marginBottom: "20px"}}>🚀 Keahlian</h3>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                  {["Ms. Office", "Admin Data", "Instagram & TikTok", "Shopee Seller", "Copywriting", "Teamwork"].map((skill, index) => (
                    <span key={index} style={{
                      background: "#ede9fe", color: "#5b21b6", 
                      padding: "8px 16px", borderRadius: "20px", 
                      fontSize: "13px", fontWeight: "600"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
