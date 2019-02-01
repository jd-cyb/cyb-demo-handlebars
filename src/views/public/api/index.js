import fetch from './request'

export const index = params => fetch('/api/index', params, 'GET')
export const list = params => fetch('/api/list', params, 'GET')
export const common = params => fetch('/api/common', params, 'GET')
export const frames = params => fetch('/api/frames', params, 'POST')
export const detail = params => fetch('/api/detail', params, 'POST')

