import Api from 'views/public/utils/api'

export default {
  renderData() {
    let rtnData = []
    return new Promise((resolve, reject) => {

      Api.post('/api/frames').then(data => {
        for (let v of data) {
          let dataItem = {}
          dataItem.title = v.title
          dataItem.desc = v.desc
          dataItem.id = v.title
          rtnData.push(dataItem)
        }
        resolve(rtnData)
      })
    })
  }
}
