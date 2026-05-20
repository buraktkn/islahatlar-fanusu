// Padişah ID'leri -> 0: II. Mahmut, 1: Abdülmecit, 2: Abdülaziz, 3: II. Abdülhamit
const allIslahats = [
    // --- 2. MAHMUT DÖNEMİ İSLAHATLARI (0) ---
    { text: "Ayanlıklar kaldırılmış, köylere Muhtar, eyaletlere Müşir atanmış", pId: 0 },
    { text: "Tımar sistemi kaldırılmış", pId: 0 },
    { text: "Müsadere sistemi kaldırılmış", pId: 0 },
    { text: "Avrupa'ya öğrenci gönderilirken Pasaport uygulamasına geçilmiş", pId: 0 },
    { text: "İstanbul'a gelenlerden Mürur Tezkeresi istenmiştir", pId: 0 },
    { text: "İdari işlemleri ve ıslahatları düzenlemek için Dar-ı Şûray-ı Babıali kurulmuştur.", pId: 0 },
    { text: "Meclis-i Vala-yı Ahkam-ı Adliye kurulmuş.", pId: 0 },
    { text: "İlk resmi gazete Takvim-i Vekayi çıkarılmıştır.", pId: 0 },
    { text: "Memurlara maaş bağlanmış, dahiliye ve hariciye olarak ikiye ayrılmıştır.", pId: 0 },
    { text: "Memurların ceket, pantolon ve fes giymesi zorunlu hale gelmiştir.", pId: 0 },
    { text: "Memurlar yetiştirmek için Mekteb-i Maarif-i Adliye açılmıştır.", pId: 0 },
    { text: "Divan-ı Hümayun kaldırılmış yerine Heyet-i Vükela (Bakanlar Kurulu) getirilmiştir.", pId: 0 },
    { text: "Reisülküttab -> Hariciye Nezareti (Dışişleri Bakanlığı)", pId: 0 },
    { text: "Şeyhülislam -> Babımeşihat Dairesi", pId: 0 },
    { text: "Sekban-ı Cedit ve Eşkinci Ocağı kurulmuştur.", pId: 0 },
    { text: "Yeniçeri ocağı kaldırılmış bu olaya Vaka-i Hayriye adı verilmiştir.", pId: 0 },
    { text: "Yeniçeri yerine Asakir-i Mansure-i Muhammediye ordusu kurulmuştur.", pId: 0 },
    { text: "Ordunun ihtiyacı için Mekteb-i Fünun-ı Harbiye kurulmuştur.", pId: 0 },
    { text: "Askerlik çağına gelmiş kişileri ve vergi almak amacı ile ilk kez nüfus sayımı yapılmıştır.", pId: 0 },
    { text: "Dar-ı Şûray-ı Askeri kurulmuştur.", pId: 0 },
    { text: "Mekteb-i Şahane ve Mekteb-i Tıbbiye açılmıştır.", pId: 0 },
    { text: "Köy ve kasabaların güvenliği için Redif birlikleri kurulmuştur.", pId: 0 },
    { text: "Seraskerlik kurulmuştur.", pId: 0 },
    { text: "Mekteb-i Ulum-u Edebiye ve Rüştiyeler açılmıştır.", pId: 0 },
    { text: "Bulaşıcı hastalıkları önlemek amacı ile karantina uygulaması yapılmıştır", pId: 0 },
    { text: "İstanbul'da ilköğretim zorunlu hale getirilmiştir.", pId: 0 },
    { text: "Mehterhane kapatılıp Donizetti Paşa tarafından Mızıkay-ı Hümayun kurulmuştur.", pId: 0 },
    { text: "Yabancı dil bilen diplomat yetiştirilmek amacı ile Tercüme Odası kurulmuştur.", pId: 0 },
    { text: "Tarım ve ticaret işlerini düzene koymak için Ticaret Nezareti kurulmuştur", pId: 0 },

    // --- SULTAN ABDÜLMECİT DÖNEMİ İSLAHATLARI (1) ---
    { text: "Tanzimat Fermanı'nın yayınlanması", pId: 1 },
    { text: "Islahat Fermanı'nın yayınlanması", pId: 1 },
    { text: "Meclis-i Ali-i Tanzimat ve Meclis-i Ahkam-ı Adliye açılmıştır.", pId: 1 },
    { text: "Meclis-i Maarif-i Umumiye Nezareti (MEB) kurulmuştur.", pId: 1 },
    { text: "Encümen-i Daniş kurulmuştur.", pId: 1 },
    { text: "Darülmuallim açılmıştır", pId: 1 },
    { text: "Jandarma, Polis ve Posta teşkilatları kurulmuştur.", pId: 1 },
    { text: "İlk defa İzmir-Aydın arasında demir yolu açılmıştır.", pId: 1 },
    { text: "Vapur işlerini düzenlemek için Şirket-i Hayriye kurulmuştur.", pId: 1 },
    { text: "Edirne-İstanbul-Varna arasına telgraf hatları çekilmiştir.", pId: 1 },
    { text: "Muhassıllık Meclisleri açılmıştır.", pId: 1 },
    { text: "Kırım Savaşı sırasında İngiltere'den ilk dış borç alınmıştır.", pId: 1 },
    { text: "Kaime adıyla ilk kağıt para basılmıştır.", pId: 1 },
    { text: "Bank-ı Dersaadet adında ilk banka açılmıştır. (Galatalı Bankerler tarafından)", pId: 1 },
    { text: "Bank-ı Osmani adında yabancı sermayeli İngiliz bankası açılmış, para basma yetkisine sahiptir.", pId: 1 },
    { text: "Vekayi-i Tıbbiye adında ilk dergi basılmıştır.", pId: 1 },
    { text: "İlk özel gazete olan Tercüman-ı Ahval çıkarılmıştır.", pId: 1 },
    { text: "Yarı resmi olan Ceride-i Havadis çıkarılmıştır.", pId: 1 },
    { text: "Güllü Agop ilk Osmanlı modern tiyatrosunu çıkarmıştır.", pId: 1 },
    { text: "Devlet memurlarının ihtiyacını karşılamak için Mekteb-i Mülkiye açılmıştır.", pId: 1 },
    { text: "Islah-ı Sanayi Komisyonu kurulmuştur.", pId: 1 },

    // --- SULTAN ABDÜLAZİZ DÖNEMİ İSLAHATLARI (2) ---
    { text: "Divan-ı Ahkam-ı Adliye (Yargıtay) ve Şura-yı Devlet (Danıştay) açılmıştır.", pId: 2 },
    { text: "Mecelle yürürlüğe girmiştir.", pId: 2 },
    { text: "Dünyanın üçüncü en büyük deniz filosu oluşturulmuştur.", pId: 2 },
    { text: "Yetim çocukların eğitimi için Darüşşafaka açılmıştır.", pId: 2 },
    { text: "Hilal-i Ahmer Cemiyeti kurulmuştur.", pId: 2 },
    { text: "Nizamiye Mahkemeleri kurulmuştur.", pId: 2 },
    { text: "Ramazan Kararnamesi yayınlanmıştır.", pId: 2 },
    { text: "Vilayet Nizamnamesi çıkarılmıştır. (Köy-Nahi-Kaza-Liva-Vilayet)", pId: 2 },
    { text: "İlk defa bir padişah seyahat amacı ile yurt dışına çıkmıştır. (Fransa)", pId: 2 },
    { text: "Beylerbeyi ve Çırağan Sarayları yapılmıştır.", pId: 2 },
    { text: "Maarif Nizamnamesi Fransa örnek alınarak yayınlanmıştır.", pId: 2 },
    { text: "Robert Koleji, Galatasaray Sultanisi ve Darülmuallimat açılmıştır.", pId: 2 },

    // --- 2. ABDÜLHAMİT DÖNEMİ İSLAHATLARI (3) ---
    { text: "1. Meşrutiyet'i ilan etmiştir.", pId: 3 },
    { text: "Osmanlı tarihinde çift parlamentolu sistem başlamıştır. (Ayan ve Mebusan Meclisi)", pId: 3 },
    { text: "1876 Kanun-i Esasi yayınlanmıştır.", pId: 3 },
    { text: "1863'te açılan memleket sandıkları 1888'de Ziraat Bankası'na dönüştürülmüştür.", pId: 3 },
    { text: "Tercüman-ı Hakikat adında gazete çıkarılmıştır.", pId: 3 },
    { text: "Hamidiye Alayları kurulmuştur.", pId: 3 },
    { text: "Jurnal Teşkilatı kurulmuştur.", pId: 3 },
    { text: "Hamidiye Etfal açılmıştır.", pId: 3 },
    { text: "İlk defa Müze-i Hümayun adında müze açılmıştır.", pId: 3 },
    { text: "Osman Hamdi Bey tarafından Sanayi-i Nefise Mektebi açılmıştır.", pId: 3 },
    { text: "Anadolu-Osmanlı Şimendifer Kumpanyası kurulmuştur.", pId: 3 },
    { text: "2. Wilhelm'in başlattığı 3B (Berlin-Boğazlar-Bağdat) Demir yolu projesinin yapımına başlanmıştır", pId: 3 },
    { text: "1881'de Muharrem Kararnamesi yayınlanmıştır.", pId: 3 },
    { text: "Duyun-u Umumiye alacaklı devletler tarafından kurulmuştur.", pId: 3 },
    { text: "2. Meşrutiyet ilan edilmiştir.", pId: 3 },
    { text: "Bulgaristan bağımsızlığını ilan etmiş", pId: 3 },
    { text: "Girit Yunanistan'a bağlanmış", pId: 3 },
    { text: "Bosna-Hersek Avusturya-Macaristan İmparatorluğu tarafından ilhak edilmiştir.", pId: 3 },
    { text: "1909'da Kanun-i Esasi'de değişiklikler yapılmıştır. (Sürgün ve angarya cezası kaldırılmış, Herkesin siyasi parti kurabilmesi sağlanmıştır.)", pId: 3 }
];

let gamePool = [];
let currentCard = null;
let isGameOver = false;
let totalCorrectAnswers = 0;
let totalPlacedAnswers = 0;

function initGame() {
    isGameOver = false;
    totalCorrectAnswers = 0;
    totalPlacedAnswers = 0;
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("fanus-container").style.display = "block";
    document.getElementById("game-info").innerText = "Kartı yerleştirmek için padişah tablosuna dokunun.";
    
    // Konteyner temizliği
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`container-${i}`).innerHTML = "";
    }

    // Havuzu tamamen sıfırlayıp 79 kartı kopyalıyoruz
    gamePool = []; 
    gamePool = [...allIslahats];

    // Karıştırma Algoritması (Fisher-Yates)
    for (let i = gamePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gamePool[i], gamePool[j]] = [gamePool[j], gamePool[i]];
    }

    drawNextCard();
}

function drawNextCard() {
    document.getElementById("fanus-status").innerText = `Fanustaki Kalan Kart: ${gamePool.length}`;
    
    if (gamePool.length > 0) {
        currentCard = gamePool.pop();
        document.getElementById("current-card").innerText = currentCard.text;
    } else {
        currentCard = null;
        document.getElementById("current-card").innerText = "Fanus Boşaldı!";
        endGameAndCheck();
    }
}

function placeCard(padişahId) {
    if (isGameOver || !currentCard) return;

    const container = document.getElementById(`container-${padişahId}`);
    
    const cardEl = document.createElement("div");
    cardEl.className = "placed-card";
    
    const correctPid = currentCard.pId;
    totalPlacedAnswers++;

    // ANINDA KONTROL SİSTEMİ
    if (correctPid === padişahId) {
        // Doğruysa hemen yeşil yap ve metni yaz
        cardEl.classList.add("correct");
        cardEl.innerText = currentCard.text;
        totalCorrectAnswers++;
    } else {
        // Yanlışsa kırmızı yap ve doğrusunu anında yanında göster
        cardEl.classList.add("wrong");
        const padisahIsimleri = ["II. Mahmut", "Abdülmecit", "Abdülaziz", "II. Abdülhamit"];
        cardEl.innerText = `${currentCard.text} (Doğrusu: ${padisahIsimleri[correctPid]})`;
    }

    container.appendChild(cardEl);
    container.scrollTop = container.scrollHeight; // Otomatik aşağı kaydırma

    drawNextCard();
}

function endGameAndCheck() {
    isGameOver = true;
    document.getElementById("fanus-container").style.display = "none";
    
    const infoText = document.getElementById("game-info");
    const basariOrani = totalCorrectAnswers / totalPlacedAnswers;

    if (basariOrani === 1) {
        infoText.innerHTML = `🔥 <strong>Skor: ${totalCorrectAnswers}/${totalPlacedAnswers}</strong><br>"Muazzam bir derece hocam! 79'da 79 yaptın, tarih branşında sana rakip yok!"`;
    } else if (basariOrani >= 0.8) {
        infoText.innerHTML = `✨ <strong>Skor: ${totalCorrectAnswers}/${totalPlacedAnswers}</strong><br>"Harika hocam! Derece kadrosuna çok yakınsın, ufak tefek kaçanlar nazar boncuğu olsun."`;
    } else if (basariOrani >= 0.5) {
        infoText.innerHTML = `📐 <strong>Skor: ${totalCorrectAnswers}/${totalPlacedAnswers}</strong><br>"Gayet makul bir skor hocam, eksikleri gördük. Şimdi tekrar karıştırıp hafızayı tazeleyelim!"`;
    } else {
        infoText.innerHTML = `⚠️ <strong>Skor: ${totalCorrectAnswers}/${totalPlacedAnswers}</strong><br>"Hocam ne yaptın? Hemen videolara geri dönüp ıslahatları baştan eritiyoruz, düşmüyoruz!"`;
    }

    document.getElementById("restart-btn").style.display = "inline-block";
}

window.onload = initGame;