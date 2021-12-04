export default {
  type: 'flex',
  altText: '活動',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '教程',
          margin: 'none',
          size: 'lg',
          weight: 'bold',
          style: 'italic'
        }
      ]
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '👉不知道有什麼活動的時候，先搜尋地名，可以找到當地的活動',
          contents: [],
          offsetBottom: 'lg'
        },
        {
          type: 'text',
          text: '👉希望知道活動的詳情，可以打活動名稱，能夠知道活動的時間、地點、特色等等'
        }
      ]
    },
    styles: {
      header: {
        backgroundColor: '#B9B973'
      }
    }
  }
}
