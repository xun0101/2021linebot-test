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
          size: 'lg',
          style: 'italic',
          align: 'center',
          weight: 'bold'
        }
      ],
      backgroundColor: '#B9B973'
    },
    hero: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/ROC_Ministry_of_Culture_Seal.svg/1050px-ROC_Ministry_of_Culture_Seal.svg.png',
      size: 'full'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'hello, world',
          contents: [
            {
              type: 'span',
              text: '👉不知道有什麼活動'
            },
            {
              type: 'span',
              text: '：先搜尋地名'
            }
          ]
        },
        {
          type: 'text',
          text: 'hello, world',
          contents: [
            {
              type: 'span',
              text: '👉想知道活動的詳情'
            },
            {
              type: 'span',
              text: '：打活動名稱'
            }
          ]
        },
        {
          type: 'text',
          text: 'hello, world',
          contents: [
            {
              type: 'span',
              text: '👉有選擇困難症'
            },
            {
              type: 'span',
              text: '：按下推薦吧！'
            }
          ]
        }
      ]
    }
  }
}
