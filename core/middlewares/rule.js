module.exports = {
    phone: function (rule, value) {
        if (rule.required) {
            let reg = /^1[3456789]\d{9}$/
            if (!reg.test(value)) {
                return this.t('should be a phone number')
            }
        }
    }
}