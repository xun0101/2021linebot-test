export default {
  type: 'flex',
  altText: '活動',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: []
        },
        hero: {
          type: 'image',
          // imageUrl  1204
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'hello, world',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#B9B973'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: []
        },
        hero: {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'hello, world',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#B9B973'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: []
        },
        hero: {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'hello, world',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#B9B973'
          }
        }
      }
    ]
  }
}
