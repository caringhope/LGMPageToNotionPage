document.getElementById('fill').addEventListener('click', async () => {
    chrome.storage.local.get('adData', async function(result) {
      const adData = result.adData;
      const notionPageId = 'your-notion-page-id'; // Remplacez par votre page Notion ID
      const notionToken = 'your-integration-token'; // Remplacez par votre jeton d'intégration Notion
  
      const response = await fetch(`https://api.notion.com/v1/pages/${notionPageId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${notionToken}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2021-05-13'
        },
        body: JSON.stringify({
          properties: {
            'Title': {
              title: [
                {
                  text: {
                    content: adData.title
                  }
                }
              ]
            },
            'Description': {
              rich_text: [
                {
                  text: {
                    content: adData.description
                  }
                }
              ]
            },
            'Price': {
              rich_text: [
                {
                  text: {
                    content: adData.price
                  }
                }
              ]
            },
            'Location': {
              rich_text: [
                {
                  text: {
                    content: adData.location
                  }
                }
              ]
            }
          }
        })
      });
  
      if (response.ok) {
        alert('Data sent to Notion');
      } else {
        alert('Failed to send data to Notion');
      }
    });
  });
  