(function(){
  var html=document.documentElement;
  var saved=null;
  try { saved=localStorage.getItem('cahit-sync-language'); } catch(e) {}
  var initial=saved==='tr'||saved==='en' ? saved : 'tr';
  function update(lang){
    html.setAttribute('data-lang',lang);
    html.setAttribute('lang',lang);
    document.querySelectorAll('[data-set-lang]').forEach(function(button){
      button.setAttribute('aria-pressed',String(button.getAttribute('data-set-lang')===lang));
    });
    var titles={home:{tr:'Cahit Sync | Yasal Bilgiler',en:'Cahit Sync | Legal Information'},terms:{tr:'Cahit Sync | Hizmet Koşulları',en:'Cahit Sync | Terms of Service'},privacy:{tr:'Cahit Sync | Gizlilik Politikası',en:'Cahit Sync | Privacy Policy'}};
    var page=html.getAttribute('data-page')||'home';
    if(titles[page])document.title=titles[page][lang];
  }
  document.querySelectorAll('[data-set-lang]').forEach(function(button){button.addEventListener('click',function(){var lang=button.getAttribute('data-set-lang');update(lang);try{localStorage.setItem('cahit-sync-language',lang)}catch(e){}})});
  update(initial);
})();
