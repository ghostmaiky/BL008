/**
 * GAMEPULSE — Web Application Script
 * งานชิ้นที่ 2: ออกแบบเว็บหน้าแรก ของเว็บที่คิดว่าจะทำ (แนวแนะนำเกม)
 * ผู้จัดทำ: นายณัฐพงษ์ ปัดทุมมา (ออมแบงค์) 6829010001
 */

// ฐานข้อมูลเกมแนะนำ (Game Recommendation Database)
const GAMES_DATABASE = [
    {
        id: "wukong",
        title: "Black Myth: Wukong",
        subtitle: "มหากาพย์ไซอิ๋ว Action RPG กราฟิกระดับเทพ",
        category: "pc",
        genre: "Action RPG / Soulslike",
        score: "9.8",
        isGoty: true,
        price: "1,790 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
        platforms: ["Steam", "PS5", "Epic Games"],
        tags: ["Single-player", "Unreal Engine 5", "Mythology"],
        desc: "เกมแอ็กชันสวมบทบาทที่สร้างจากวรรณกรรมคลาสสิกไซอิ๋ว ผู้เล่นจะได้สวมบทบาทเป็น 'ผู้ถูกลิขิต' ออกเดินทางสู่การผจญภัยอันตื่นเต้น เผชิญหน้ากับเหล่าปีศาจด้วยกระบองวิเศษและการแปลงกาย 72 ท่า",
        specs: {
            os: "Windows 10 / 11 64-bit",
            cpu: "Intel Core i7-9700 / AMD Ryzen 5 5500",
            ram: "16 GB RAM",
            gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT",
            storage: "130 GB SSD"
        },
        whyRecommend: "กราฟิกระดับ AAA ที่สวยงามสมจริงที่สุดของปีด้วย Unreal Engine 5 ระบบการต่อสู้ดุเดือด ลื่นไหล และเรื่องราวที่น่าติดตาม เหมาะสำหรับผู้ที่ชอบเกมท้าทายสไตล์ Soulslike"
    },
    {
        id: "elden-ring",
        title: "Elden Ring: Shadow of the Erdtree",
        subtitle: "สุดยอดเกม Open World ระดับ Game of the Year",
        category: "pc",
        genre: "Open World / RPG",
        score: "9.9",
        isGoty: true,
        price: "1,490 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
        platforms: ["Steam", "PS5", "Xbox Series X"],
        tags: ["Masterpiece", "Open World", "Dark Fantasy"],
        desc: "ดินแดนแห่งมัชฌิมาที่เต็มไปด้วยความลับ บอสสุดอลังการ และอิสระในการสำรวจโลกกว้างที่ไม่มีใครเทียบได้ พร้อมเนื้อเรื่องภาคเสริมในดินแดนแห่งเงา (Shadow of the Erdtree)",
        specs: {
            os: "Windows 10 / 11",
            cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
            ram: "16 GB RAM",
            gpu: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56",
            storage: "60 GB SSD"
        },
        whyRecommend: "การันตีรางวัล Game of the Year ดนตรีประกอบและการออกแบบฉากยอดเยี่ยม มอบอิสระในการสร้างบิลด์ตัวละครที่หลากหลาย เล่นซ้ำได้หลายร้อยชั่วโมง"
    },
    {
        id: "valorant",
        title: "Valorant",
        subtitle: "เกมยิงปืนเชิงกลยุทธ์ 5v5 เล่นฟรีขวัญใจสาย E-Sports",
        category: "free",
        genre: "Tactical FPS / E-Sports",
        score: "9.2",
        isGoty: false,
        price: "ฟรี (Free to Play)",
        priceType: "free",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80",
        platforms: ["PC (Riot Client)", "PS5", "Xbox Series"],
        tags: ["Multiplayer", "Competitive", "Hero Shooter"],
        desc: "เกมยิงมุมมองบุคคลที่หนึ่งเชิงกลยุทธ์ 5 ต่อ 5 ที่ผสมผสานการเล็งปืนที่แม่นยำเข้ากับความสามารถเฉพาะตัวของเหล่า Agent แต่ละคน เพื่อวางแผน ชิงพื้นที่ และกู้ระเบิด Spike",
        specs: {
            os: "Windows 10 / 11 64-bit",
            cpu: "Intel Core i3-4150 / AMD Ryzen 3 1200",
            ram: "4 GB RAM",
            gpu: "GeForce GT 730 / Radeon R7 240",
            storage: "30 GB"
        },
        whyRecommend: "เล่นฟรี ไม่กินสเปกคอม ระบบเซิร์ฟเวอร์ 128-tick ลื่นไหล ชุมชนผู้เล่นในไทยใหญ่มาก เหมาะสำหรับเล่นประชันฝีมือกับเพื่อนร่วมทีม"
    },
    {
        id: "genshin",
        title: "Genshin Impact",
        subtitle: "ท่องโลกแฟนตาซี Teyvat ภาพการ์ตูนอนิเมะสุดตระการตา",
        category: "mobile",
        genre: "Open World / Anime RPG",
        score: "9.4",
        isGoty: false,
        price: "ฟรี (Free to Play)",
        priceType: "free",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80",
        platforms: ["PC", "PS5", "iOS", "Android"],
        tags: ["Cross-Platform", "Anime", "Gacha", "Co-op"],
        desc: "ออกสำรวจดินแดน Teyvat ทั้ง 7 เมืองตามธาตุธรรมชาติ ค้นหาฝาแฝดที่พลัดพราก พร้อมระบบต่อสู้สลับตัวละครผสมผสานธาตุทั้ง 7 อันเป็นเอกลักษณ์ อัปเดตเนื้อเรื่องและพื้นที่ใหม่อย่างต่อเนื่อง",
        specs: {
            os: "Windows 10 64-bit / iOS 12+ / Android 8.0+",
            cpu: "Intel Core i7 หรือเทียบเท่า / Snapdragon 845+",
            ram: "16 GB (PC) / 4 GB (Mobile)",
            gpu: "NVIDIA GeForce GTX 1060 6GB",
            storage: "100 GB"
        },
        whyRecommend: "ภาพสวยสไตล์อนิเมะระดับแนวหน้า เพลงประกอบระดับวงออเคสตรา เล่นข้ามแพลตฟอร์มระหว่างคอมพิวเตอร์และมือถือได้ทุกที่ทุกเวลา"
    },
    {
        id: "gta5",
        title: "Grand Theft Auto V & FiveM",
        subtitle: "สุดยอดเกมจำลองชีวิตและเมืองเสมือนจริง Los Santos",
        category: "coop",
        genre: "Open World / Sandbox / Roleplay",
        score: "9.7",
        isGoty: true,
        price: "700 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1552824722-ddab1374e622?auto=format&fit=crop&w=1000&q=80",
        platforms: ["PC (Steam/Epic)", "PS5", "Xbox Series"],
        tags: ["Roleplay", "Co-op", "Vehicles", "Action"],
        desc: "สัมผัสชีวิตในมหานคร Los Santos ทำภารกิจ ปล้นธนาคาร ซื้อยานพาหนะ และเล่นโหมดสวมบทบาทสมมติ (Roleplay ผ่าน FiveM) ที่จำลองอาชีพ หมอ ตำรวจ ประชาชน ช่าง และแก๊งสเตอร์อย่างสมจริง",
        specs: {
            os: "Windows 10 64-bit",
            cpu: "Intel Core i5 3470 / AMD FX-8350",
            ram: "8 GB - 16 GB (สำหรับ FiveM)",
            gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
            storage: "110 GB"
        },
        whyRecommend: "ชุมชน FiveM Roleplay ในไทยคึกคักมาก เหมาะสำหรับสร้างคอนเทนต์ สตรีมมิง และเล่นบทบาทสมมติร่วมกับเพื่อนๆ เป็นเกมที่สนุกไม่รู้จบ"
    },
    {
        id: "minecraft",
        title: "Minecraft",
        subtitle: "เกมบล็อกสร้างสรรค์จินตนาการและการเอาชีวิตรอดอันดับ 1",
        category: "coop",
        genre: "Sandbox / Survival / Crafting",
        score: "9.6",
        isGoty: true,
        price: "990 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1000&q=80",
        platforms: ["PC (Java/Bedrock)", "Mobile", "Switch", "PS5"],
        tags: ["Creativity", "Multiplayer", "Mod Support"],
        desc: "โลกแห่งบล็อก 3 มิติไร้ขีดจำกัดที่คุณสามารถสร้างอะไรก็ได้ตามจินตนาการ ตั้งแต่กระท่อมไม้เล็กๆ ไปจนถึงปราสาทและระบบกลไกวงจร Redstone อันซับซ้อน หรือเล่นโหมดเอาชีวิตรอดจากมอนสเตอร์",
        specs: {
            os: "Windows 10 / 11",
            cpu: "Intel Core i5-4690 / AMD A10-7800",
            ram: "8 GB RAM",
            gpu: "GeForce 700 Series / AMD Radeon R7",
            storage: "4 GB"
        },
        whyRecommend: "เกมที่เปิดกว้างสำหรับทุกวัย เสริมสร้างความคิดสร้างสรรค์ มีม็อดและเซิร์ฟเวอร์มินิเกมมากมาย เล่นกับเพื่อนได้สนุกเพลิดเพลิน"
    },
    {
        id: "palworld",
        title: "Palworld",
        subtitle: "ผจญภัยเอาชีวิตรอด สร้างฐาน และจับคู่หู Pals สุดมหัศจรรย์",
        category: "coop",
        genre: "Survival / Monster Taming / Open World",
        score: "9.0",
        isGoty: false,
        price: "590 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
        platforms: ["Steam", "Xbox Game Pass", "PS5"],
        tags: ["Co-op", "Base Building", "Farming", "Shooter"],
        desc: "เกมแนวเอาชีวิตรอดในโลกกว้างที่เต็มไปด้วยสิ่งมีชีวิตลึกลับชื่อว่า 'Pal' คุณสามารถจับพวกมันมาช่วยต่อสู้ ทำฟาร์ม ขุดแร่ หรือสร้างระบบโรงงานอัตโนมัติ พร้อมระบบคราฟต์อาวุธและสร้างฐานสุดมันส์",
        specs: {
            os: "Windows 10 or later (64-Bit)",
            cpu: "i5-3570K 3.4 GHz 4 Core",
            ram: "16 GB RAM",
            gpu: "GeForce GTX 1050 (2GB)",
            storage: "40 GB"
        },
        whyRecommend: "ระบบเกมเพลย์ติดงอมแงม ผสมผสานการจับมอนสเตอร์กับการสร้างฐานและเอาชีวิตรอดได้อย่างลงตัว เล่น Co-op กับเพื่อนได้ถึง 32 คนต่อเซิร์ฟเวอร์"
    },
    {
        id: "cyberpunk",
        title: "Cyberpunk 2077: Phantom Liberty",
        subtitle: "ท่องมหานครแห่งอนาคต Night City สุดล้ำสมัย",
        category: "pc",
        genre: "Sci-Fi RPG / Open World",
        score: "9.5",
        isGoty: false,
        price: "1,290 บาท",
        priceType: "paid",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1000&q=80",
        platforms: ["PC", "PS5", "Xbox Series X"],
        tags: ["Ray Tracing", "Cyberpunk", "Story Rich", "RPG"],
        desc: "สวมบทเป็น V ทหารรับจ้างไซเบอร์เนติกส์ใน Night City เมืองที่มีเสน่ห์แต่มืดมน ปรับแต่งร่างด้วยชิ้นส่วนไซเบอร์ ดำดิ่งสู่เรื่องราวสายลับสุดระทึกในย่าน Dogtown พร้อมนักแสดงชั้นนำ Keanu Reeves และ Idris Elba",
        specs: {
            os: "Windows 10 64-bit",
            cpu: "Core i7-6700 / Ryzen 5 1600",
            ram: "12 GB RAM",
            gpu: "GeForce GTX 1060 6GB / Radeon RX 580",
            storage: "70 GB SSD"
        },
        whyRecommend: "ภาพกราฟิกสวยงามระดับไฮเอนด์ด้วยเทคโนโลยี Ray Tracing / Path Tracing และเพลงประกอบแนว Synthwave ที่ยอดเยี่ยม เนื้อเรื่องกินใจและมีฉากจบหลากหลายแบบ"
    },
    {
        id: "freefire",
        title: "Garena Free Fire / ROV",
        subtitle: "เกมมือถือยอดนิยมอันดับ 1 ของวัยรุ่นไทย",
        category: "mobile",
        genre: "Battle Royale / MOBA Mobile",
        score: "9.1",
        isGoty: false,
        price: "ฟรี (Free to Play)",
        priceType: "free",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
        platforms: ["iOS", "Android"],
        tags: ["Fast-Paced", "Multiplayer", "Esports Mobile"],
        desc: "สมรภูมิเอาชีวิตรอด 50 คนใน 10 นาที และเกมต่อสู้ MOBA 5v5 บนมือถือที่มีการแข่งขันระดับประเทศและระดับโลกอย่างต่อเนื่อง ควบคุมง่าย เข้าถึงไว เล่นกับเพื่อนได้ทุกที่",
        specs: {
            os: "Android 4.1+ / iOS 9.0+",
            cpu: "Quad-core 1.2 GHz ขึ้นไป",
            ram: "2 GB - 3 GB RAM",
            gpu: "Mali / Adreno ทั่วไป",
            storage: "3 GB - 5 GB"
        },
        whyRecommend: "เล่นง่าย ไม่กินสเปกมือถือ ใช้เวลาเล่นต่อรอบสั้น เหมาะสำหรับเล่นคลายเครียดในเวลาว่างและพบปะเพื่อนฝูง"
    }
];

// ฟังก์ชันเริ่มต้นทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
    renderGameCards(GAMES_DATABASE);
    initFilterTabs();
    initSearch();
    initModals();
});

// ฟังก์ชันสร้างการ์ดเกมในหน้าเว็บ
function renderGameCards(games) {
    const grid = document.getElementById("games-grid");
    if (!grid) return;

    if (games.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #94a3b8;">
                <i class="fas fa-gamepad" style="font-size: 3rem; margin-bottom: 1rem; color: #64748b;"></i>
                <h3>ไม่พบเกมที่ค้นหา</h3>
                <p>ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่อื่นดูนะครับ</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = games.map(game => `
        <article class="game-card" data-id="${game.id}">
            <div class="card-media">
                <img src="${game.image}" alt="${game.title}" class="card-img" loading="lazy">
                <div class="card-badges">
                    <span class="tag-genre">${game.genre}</span>
                    <span class="score-badge ${parseFloat(game.score) >= 9.5 ? 'gold' : ''}">
                        <i class="fas fa-star"></i> ${game.score}
                    </span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${game.title}</h3>
                <p class="card-subtitle">${game.subtitle}</p>
                <p class="card-desc">${game.desc}</p>
                
                <div class="card-features">
                    ${game.tags.map(t => `<span class="feature-pill">${t}</span>`).join('')}
                </div>

                <div class="card-footer">
                    <div class="card-price">
                        <span class="price-label">ราคา</span>
                        <span class="price-val ${game.priceType === 'free' ? 'free' : ''}">${game.price}</span>
                    </div>
                    <button class="btn-card-detail" onclick="openGameModal('${game.id}')">
                        <i class="fas fa-info-circle"></i> ดูรีวิว & สเปก
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// ระบบ Filter ตามแท็บหมวดหมู่
function initFilterTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");
            if (filter === "all") {
                renderGameCards(GAMES_DATABASE);
            } else if (filter === "trending") {
                const trending = GAMES_DATABASE.filter(g => parseFloat(g.score) >= 9.5);
                renderGameCards(trending);
            } else {
                const filtered = GAMES_DATABASE.filter(g => g.category === filter);
                renderGameCards(filtered);
            }
        });
    });
}

// ระบบค้นหาเกมแบบ Real-time
function initSearch() {
    const input = document.getElementById("search-games");
    if (!input) return;

    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderGameCards(GAMES_DATABASE);
            return;
        }

        const filtered = GAMES_DATABASE.filter(g => 
            g.title.toLowerCase().includes(query) ||
            g.subtitle.toLowerCase().includes(query) ||
            g.genre.toLowerCase().includes(query) ||
            g.desc.toLowerCase().includes(query) ||
            g.tags.some(t => t.toLowerCase().includes(query))
        );
        renderGameCards(filtered);
    });
}

// ระบบ Modal ดูรายละเอียดเกม
function openGameModal(gameId) {
    const game = GAMES_DATABASE.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById("game-detail-modal");
    const container = document.getElementById("modal-dynamic-content");
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="modal-header-img-box">
            <img src="${game.image}" alt="${game.title}" class="modal-header-img">
            <div class="modal-img-gradient"></div>
        </div>

        <div class="modal-content-body">
            <h2 class="modal-game-title">${game.title}</h2>
            <div class="modal-meta">
                <span class="score-badge ${parseFloat(game.score) >= 9.5 ? 'gold' : ''}">
                    <i class="fas fa-star"></i> คะแนนรีวิว: ${game.score} / 10
                </span>
                <span class="tag-genre"><i class="fas fa-gamepad"></i> ${game.genre}</span>
                <span class="feature-pill"><i class="fas fa-tag"></i> ${game.price}</span>
            </div>

            <h4 class="modal-section-title"><i class="fas fa-thumbs-up"></i> ทำไมเราถึงแนะนำเกมนี้?</h4>
            <p class="modal-desc" style="color: #67e8f9; font-weight: 500;">
                "${game.whyRecommend}"
            </p>

            <h4 class="modal-section-title"><i class="fas fa-book-open"></i> รายละเอียดเนื้อเรื่องและเกมเพลย์</h4>
            <p class="modal-desc">${game.desc}</p>

            <h4 class="modal-section-title"><i class="fas fa-microchip"></i> สเปกคอมพิวเตอร์ที่แนะนำ (System Requirements)</h4>
            <div class="specs-grid">
                <div class="spec-item">
                    <span class="spec-label">ระบบปฏิบัติการ (OS)</span>
                    <span class="spec-val">${game.specs.os}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">หน่วยประมวลผล (CPU)</span>
                    <span class="spec-val">${game.specs.cpu}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">หน่วยความจำ (RAM)</span>
                    <span class="spec-val">${game.specs.ram}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">การ์ดจอ (GPU)</span>
                    <span class="spec-val">${game.specs.gpu}</span>
                </div>
                <div class="spec-item" style="grid-column: 1/-1;">
                    <span class="spec-label">พื้นที่จัดเก็บ (Storage)</span>
                    <span class="spec-val">${game.specs.storage}</span>
                </div>
            </div>

            <h4 class="modal-section-title"><i class="fas fa-desktop"></i> แพลตฟอร์มที่เปิดให้เล่น</h4>
            <div class="card-features">
                ${game.platforms.map(p => `<span class="feature-pill" style="color: #fff; background: rgba(0,240,255,0.1); border-color: rgba(0,240,255,0.3);"><i class="fas fa-check"></i> ${p}</span>`).join('')}
            </div>

            <div class="modal-footer">
                <button class="btn-glass" onclick="closeAllModals()">ปิดหน้าต่าง</button>
                <a href="#featured" class="btn-primary" onclick="closeAllModals(); alert('ขอบคุณที่สนใจเกม ${game.title} ! สามารถติดตามรีวิวเพิ่มเติมได้ในเว็บ');">
                    <i class="fas fa-heart"></i> ถูกใจเกมนี้
                </a>
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ปิด Modal ทั้งหมด
function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
    document.body.style.overflow = "";
}

// จัดการการปิด Modal ด้วยปุ่ม Esc หรือคลิกพื้นหลัง
function initModals() {
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeAllModals();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllModals();
    });
}

// เปิด Modal ข้อมูลส่งงานอาจารย์
function openSubmissionModal() {
    const modal = document.getElementById("submission-modal");
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

// สั่งพิมพ์หน้าเว็บเป็น PDF เพื่อส่งงานใน Classroom
function printSubmission() {
    window.print();
}
