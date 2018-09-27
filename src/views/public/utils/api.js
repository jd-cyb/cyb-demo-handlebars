import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  withCredentials: true
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

let apiCacheGet = []
let apiCachePost = []
let apiPromiseGet
let apiPromisePost
export default {
  get(url, params) {
    if (apiCacheGet.indexOf(url) === -1) {
      apiCacheGet.push(url)
      apiPromiseGet = new Promise((resolve, reject) => {
        instance.get(url, {
            params: Object.assign({}, params, {
              t: new Date() * 1
            })
          })
          .then((response) => {

            if (response.status === 200 || response.status === undefined) {

              if (response.data && response.data.errno === 0) {
                resolve(response.data.data)
              } else {
                reject(response.data.msg)
              }
            } else {
              reject(response.status)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
      return apiPromiseGet
    } else {
      return new Promise((resolve, reject) => {
        Promise.race([apiPromiseGet]).then(function (value) {
          resolve(value)
        });
      })
    }
  },

  post(url, params) {
    if (apiCachePost.indexOf(url) === -1) {
      apiCachePost.push(url)
      apiPromisePost = new Promise((resolve, reject) => {
        instance.post(url, Object.assign({}, params))
          .then((response) => {
            if (response.status === 200 || response.status === undefined) {
              if (response.data && response.data.errno === 0) {
                resolve(response.data.data)
              } else {
                reject(response.data.msg)
              }
            } else {
              reject(response.status)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
      return apiPromisePost
    } else {
      return new Promise((resolve, reject) => {
        Promise.race([apiPromisePost]).then(function (value) {
          resolve(value)
        });
      })
    }
  }
}
