document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['adData'], function(result) {
    if (result.adData) {
      document.getElementById('adData').innerText = JSON.stringify(result.adData, null, 2);
    } else {
      document.getElementById('adData').innerText = 'No data found.';
    }
  });

  document.getElementById('copyButton').addEventListener('click', function() {
    const adDataText = document.getElementById('adData').innerText;
    navigator.clipboard.writeText(adDataText).then(function() {
      alert('Copied to clipboard');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  });
});
