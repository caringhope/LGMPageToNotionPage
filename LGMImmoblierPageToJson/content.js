(function() {
  const adData = {
    version: '6',
    title: document.querySelector('div.text-xl')?.innerText.trim() || '',
    description: document.querySelector('p.px-4.py-5.whitespace-pre-wrap.sm\\:px-6')?.innerText.trim() || '',
    price: document.querySelector('span.text-xl.text-lgm-blue')?.innerText.trim() || '',
    location: document.querySelector('div.flex.flex-col.space-y-4.xl\\:flex-row.xl\\:space-y-0.xl\\:justify-between.xl\\:items-center > div.text-xl')?.innerText.trim() || '',
  };

  chrome.storage.local.set({ adData: adData }, function() {
    console.log('Ad data saved', adData);
  });
})();
