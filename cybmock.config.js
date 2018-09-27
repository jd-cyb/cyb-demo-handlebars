import mockData from './mock'

module.exports = {
  'GET /api/index': mockData.indexData,
  'GET /api/list': mockData.listData,
  'GET /api/common': mockData.commonData,
  'POST /api/frames': mockData.framesData,
  'POST /api/detail': mockData.detailData
}
