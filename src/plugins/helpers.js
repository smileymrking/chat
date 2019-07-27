import _ from 'lodash'

let helpers = {
  /**
   * 处理后端表单验证结果
   * @param error
   * @param form
   * @returns {boolean}
   */
  setInputErrors: (error, form) => {
    if (typeof error.response.data['validations'] !== 'undefined') {
      let validations = error.response.data['validations']
      let options = {}
      let fieldsValue = form.getFieldsValue()
      _.forEach(validations, function (item, index) {
        options[index] = { value: typeof fieldsValue !== 'undefined' ? _.get(fieldsValue, index) : null, errors: [] }
        _.forEach(item, function (msg) {
          options[index].errors.push({ message: msg, field: index })
        })
      })
      form.setFields(options)
      return true
    }
    return false
  }
}

export default helpers
