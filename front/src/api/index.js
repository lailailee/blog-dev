import axios from '@/utils/request'
import Tool from '@/utils/tool'
import qs from 'qs'

// const BASE_URL = '/aiot_wx_webapp'

// const getChartData = () => {
//   return axios.get(BASE_URL + '/chart/data')
// }

// const getImageList = param => {
//   let url = BASE_URL + '/image/list'
//   if (!Tool.isEmptyObject(param)) {
//     url += '?' + qs.stringify(param)
//   }
//   return axios.get(url)
// }

// const getAlarmList = param => {
//   let url = BASE_URL + '/alarm/list'
//   if (!Tool.isEmptyObject(param)) {
//     url += '?' + qs.stringify(param)
//   }
//   return axios.get(url)
// }

// const getAlarmDetail = id => {
//   const url = BASE_URL + `/alarm/${id}/detail`
//   return axios.get(url)
// }

// const getFolderList = param => {
//   let url = BASE_URL + '/folder/list'
//   url += '?' + qs.stringify(param)
//   return axios.get(url)
// }
// const getCameraImageList = param => {
//   let url = BASE_URL + '/history/list'
//   url += '?' + qs.stringify(param)
//   return axios.get(url)
// }

// const getTemList = param => {
//   let url = BASE_URL + '/history/list'
//   url += '?' + qs.stringify(param)
//   return axios.get(url)
// }

// const getHistoryList = param => {
//   let url = BASE_URL + '/history/list'
//   url += '?' + qs.stringify(param)
//   return axios.get(url)
// }

// const getProfileList = () => {
//   const url = BASE_URL + '/profile/list'
//   return axios.get(url)
// }

// const postAweakDevice = ipcDeviceId => {
//   const url = BASE_URL + `/aweak_device/${ipcDeviceId}?enable=true`
//   return axios.post(url)
// }

// const getIpcDeviceInfo = ipcDeviceId => {
//   const url = `aiot_wx_h5/aweak/camera/${ipcDeviceId}`
//   return axios.get(url)
// }

// const getFireMessageData = ipcDeviceId => {
//   const url = BASE_URL + '/fire_message_data'
//   return axios.get(url)
// }
// /aiot_wx_webapp/huaxin/data
// aiot_wx_h5/aweak/camera/
// const url = `http://${baseUrl}:2611/aiot_wx_webapp/aweak_device/${deviceId}?enable=true`

const Api = {
  // getFolderList,
  // getChartData,
  // getImageList,
  // getAlarmList,
  // getAlarmDetail,
  // getCameraImageList,
  // getTemList,
  // getHistoryList,
  // getProfileList,
  // postAweakDevice,
  // getIpcDeviceInfo,
  // getFireMessageData
}

export default Api
