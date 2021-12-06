import flex from './flex3.js'
export default async (event) => {
  try {
    if (event.message.text === '了解更多') {
      event.reply(flex)
      console.log(flex)
    }
  } catch (error) {
    console.log(error)
    event.reply('錯誤')
  }
}
