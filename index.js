import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    try {
      const { data } = await axios.get('https://data.boch.gov.tw/data/opendata/v2/assetsCase/5.1.json')
      for (let i = 0; i < data.caseName.length; i++) {
        if (data.caseName === 'text') {
          event.reply(`名俗由來:\n${data.assetsClassifyName}`)
          return
        }
      }
    } catch (error) {
      console.log(error)
      event.reply('錯誤')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
