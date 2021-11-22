export default {
  type: 'flex',
  altText: '123456',
  contents: {
    "type": "bubble",
    "size": "mega",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "民俗活動",
          "color": "#FFFFFF",
          "weight": "bold",
          "style": "normal",
          "size": "xl"
        }
      ]
    },
    "hero": {
      "type": "image",
      "url": "https://data.boch.gov.tw/upload/representImageFile/2017-11-23/5791d8a8-3987-4052-8c19-27c1c1bc84a6/%E9%9B%9E%E7%B1%A0%E4%B8%AD%E5%85%83%E7%A5%AD25.jpg",
      "size": "full"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "活動名稱：",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "鷄籠中元祭",
              "color": "#696969",
              "weight": "bold"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "活動特點："
            },
            {
              "type": "text",
              "text": " 傳統性：具有古昔生活傳承，風俗形成與發展者,       地方性：民俗其形成與發展具地方特色，或與其他地區有顯著差異者,       歷史性：由歷史事件形成，具有紀念性意義者       \"文化性：具有特殊生活文化價值者\",       \"典範性：民俗活動具有示範作用，可顯示其特色者\""
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "活動特點"
                },
                {
                  "type": "text",
                  "text": "1.開龕門儀式  2.立燈篙儀式  3.主普壇開燈放彩儀式  4.放水燈及遊行  \\r\n5.關龕門儀式\\r\n敘述整個民俗活動或風俗習慣舉行的過程，包括各項儀式流程與重要特徵內容。"
                }
              ]
            }
          ]
        }
      ],
      "backgroundColor": "#F5F5F5",
      "position": "relative"
    },
    "action": {
      "type": "postback",
      "label": "action",
      "data": "hello"
    },
    "styles": {
      "header": {
        "backgroundColor": "#CCCCFF"
      },
      "body": {
        "backgroundColor": "#F5F5F5"
      }
    }
  }