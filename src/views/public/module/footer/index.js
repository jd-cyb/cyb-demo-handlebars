import temp from './index.hbs'

export default async ($box = $("body"),data) => {
  $box.html(temp(data.data.footerText))
}
