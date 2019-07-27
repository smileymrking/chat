import { message } from 'ant-design-vue'

let object = {
  success: (content = '成功', duration, onClose) => {
    return message.success(content, duration, onClose)
  },
  error: (error, duration, onClose) => {
    let content = '未知错误'
    if (typeof error.response !== 'undefined') {
      content = typeof error.response.data.message !== 'undefined' ? error.response.data.message : error.message
    } else {
      if (typeof error.message !== 'undefined') {
        content = error.message
      } else if (typeof error === 'string') {
        content = error
      }
    }
    return message.error(content, duration, onClose)
  },
  warning: message.warning,
  warn: message.warn,
  info: message.info,
  loading: message.loading,
  open: message.open,
  config: message.config,
  destroy: message.destroy
}

export default object
