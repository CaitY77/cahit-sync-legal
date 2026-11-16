# Cahit Sync — Discord Bot Legal Pages

Cahit Sync için GitHub Pages üzerinde yayımlanabilecek **Türkçe ve İngilizce** (TR/EN) yasal bilgilendirme sitesi.

## Dosyalar

- `index.html` — ana sayfa
- `terms.html` — Hizmet Koşulları / Terms of Service
- `privacy.html` — Gizlilik Politikası / Privacy Policy
- `style.css` — tasarım
- `script.js` — TR / EN dil düğmeleri
- `.nojekyll` — statik dosyaları olduğu gibi yayımlamak için

## YAYINLAMADAN ÖNCE DÜZENLE

**Bunlar genel şablon metinlerdir ve botun veri işleyişini bilmediğimiz için henüz yayıma hazır yasal beyanlar değildir.**

1. `terms.html`: Her iki dildeki **iletişim adresi** alanlarını doldur.
2. `privacy.html`: Her iki dildeki **işlenen gerçek veri kategorileri**, **saklama süresi ve silme yöntemi**, **üçüncü taraflarla paylaşım** ve **iletişim** alanlarını doldur. Botun yapmadığı şeyi iddia etme.
3. Her iki sayfadaki **son güncelleme tarihini** yayımladığın günün tarihiyle değiştir.
4. Botun ilave işlevleri (ör. müzik, otomatik mesaj, log, senkronizasyon, mesaj içeriği analizi, harici API, abonelik) varsa bu işlevlere özgü koşulları açıklamaya ekle.

## GitHub Pages kurulumu

1. GitHub'da `cahit-sync-legal` adlı **Public** depo oluştur (README eklemene gerek yok).
2. Bu ZIP'i bilgisayarında **çıkart**. Depoda **Add file → Upload files** yoluyla klasörün *içindeki dosyaları* yükle; ZIP dosyasını yükleme.
3. **Commit changes** düğmesiyle kaydet.
4. **Settings → Pages** sayfasında **Build and deployment** altından **Deploy from a branch** seç. **Branch: main**, **Folder: /(root)** seç ve **Save** de.
5. Site yayına girdikten sonra şu bağlantıları açıp test et. `GITHUB_KULLANICI_ADI` kısmını kendi kullanıcı adınla değiştir:

   - Hizmet Koşulları: `https://GITHUB_KULLANICI_ADI.github.io/cahit-sync-legal/terms.html`
   - Gizlilik Politikası: `https://GITHUB_KULLANICI_ADI.github.io/cahit-sync-legal/privacy.html`

6. Discord Developer Portal → Applications → Cahit Sync uygulamasının ilgili ayarlarında **Terms of Service URL** ve **Privacy Policy URL** alanlarına bu iki bağlantıyı yapıştır.

**Önemli:** Sitenin açılması belgelerin içeriğinin otomatik olarak Discord tarafından onaylanacağı anlamına gelmez. Gerçek, ulaşılabilir ve botunun işleyişine uygun metinler kullan.

Resmi GitHub Pages anlatımı: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
