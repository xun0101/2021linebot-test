export default {
  type: 'flex',
  altText: 'ζ΄»ε',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'ζη¨',
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
              text: 'πδΈη₯ιζδ»ιΊΌζ΄»ε'
            },
            {
              type: 'span',
              text: 'οΌεζε°ε°ε'
            }
          ]
        },
        {
          type: 'text',
          text: 'hello, world',
          contents: [
            {
              type: 'span',
              text: 'πζ³η₯ιζ΄»εηθ©³ζ'
            },
            {
              type: 'span',
              text: 'οΌζζ΄»εεη¨±'
            }
          ]
        },
        {
          type: 'text',
          text: 'hello, world',
          contents: [
            {
              type: 'span',
              text: 'πζιΈζε°ι£η'
            },
            {
              type: 'span',
              text: 'οΌζδΈζ¨θ¦ε§οΌ'
            }
          ]
        }
      ]
    }
  }
}
