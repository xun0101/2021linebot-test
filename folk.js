import { data } from './data.js'
import { data as data2 } from './data2.js'
import flex from './flex.js'
import flex2 from './flex2.js'

export default async (event) => {
  try {
    if (event.message.type === 'text') {
      console.log(123)
      const newflex = JSON.parse(JSON.stringify(flex))
      const newflex2 = JSON.parse(JSON.stringify(flex2))
      const replies = []
      const numbers = []
      let a = 0
      let b = 0

      for (let i = 0; i < data.length; i++) {
        if (data[i].caseName === event.message.text) {
          newflex.contents.header.contents.text = data[i].caseName
          newflex.contents.hero.url = data[i].representImage
          newflex.contents.body.contents[0].action.text = `${data[i].caseName}特點`
          newflex.contents.body.contents[1].action.text = `${data[i].caseName}地址`
          a = 1
          break
        } else if (`${data[i].caseName}地址` === event.message.text) {
          replies.push(`地址:\n${data[i].hostContactorAddress}`)
        } else if (`${data[i].caseName}特點` === event.message.text) {
          replies.push(`活動特點:\n${data[i].ceremonyFeature}\n名俗特點:\n${data[i].judgeCriteria.join('\n')}`)
        } else if (data[i].belongCity === event.message.text) {
          replies.push(`特有名俗:\n${data[i].caseName}\n活動介紹:\n${data[i].registerReason}}`)
        }
      }
      for (let j = 0; j < data2.length; j++) {
        if (data2[j].actName === event.message.text) {
          newflex.contents.header.contents.text = data2[j].actName
          newflex.contents.hero.url = 'https://cloud.culture.tw/' + data2[j].imageUrl

          newflex.contents.body.contents[0].action.text = `${data2[j].actName}詳情`
          newflex.contents.body.contents[1].action.text = `${data2[j].actName}地址`
          a = 1
          break
        } else if (`${data2[j].actName}詳情` === event.message.text) {
          replies.push(
            `活動現況:\n${data2[j].cycle}\n活動說明:\n${data2[j].description}\n活動網址:\n${data2[j].website}`
          )
        } else if (`${data2[j].actName}地址` === event.message.text) {
          replies.push(`活動地址:\n${data2[j].address}`)
        } else if ((data2[j].cityName) === event.message.text) {
          replies.push(`活動:\n${data2[j].actName}\n活動時間:\n${data2[j].startTime}\n${data2[j].endTime}`)
        }

        if (event.message.text === '推薦') {
          b = 1
          const rand = (min, max) => {
            return Math.round(Math.random() * (max - min)) + min
          }
          console.log(456)
          while (numbers.length < 3) {
            console.log(789)
            const num = rand(1, data2.length)
            if (!numbers.includes(num)) {
              // 1204
              console.log(data2[num].imageUrl)
              numbers.push({
                img: data2[num].imageUrl,
                act: data2[num].actName,
                web: data2[num].website
              })
              console.log(numbers)
            }
            // console.log(newflex2)
            // console.log(numbers)
          }
          newflex2.contents.contents[0].hero.url = 'https://cloud.culture.tw/' + numbers[0].img
          newflex2.contents.contents[0].body.contents.text = numbers[0].act
          // newflex2.contents.contents[0].body.contents.action.uri = numbers[0].web
          newflex2.contents.contents[1].hero.url = 'https://cloud.culture.tw/' + numbers[1].img
          newflex2.contents.contents[1].body.contents.text = numbers[1].act
          // newflex2.contents.contents[1].body.contents.action.uri = numbers[1].web
          newflex2.contents.contents[2].hero.url = 'https://cloud.culture.tw/' + numbers[2].img
          newflex2.contents.contents[2].body.contents.text = numbers[2].act
          // newflex2.contents.contents[2].body.contents.action.uri = numbers[2].web
        }
      }

      if (replies.length > 0) {
        event.reply(replies.slice(0, 5))
        console.log(replies)
      } else if (a === 1) {
        event.reply(newflex)
      } else if (b === 1) {
        event.reply(newflex2)
        console.log(newflex2)
      } else {
        event.reply('無此資料')
      }
    }
  } catch (error) {
    console.log(error)
    event.reply('錯誤')
  }
}
