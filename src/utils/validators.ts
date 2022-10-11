import type { Validator } from '../types'
import isEmpty from 'validator/lib/isEmpty'
import isLength from 'validator/lib/isLength'

const passwordLength = { min: 8, max: 16 }

export const nameValidator: Validator = (input) => {
  return { result: !isEmpty(input), errMsg: '用户名不能为空' }
}

export const passwordValidator: Validator = (input) => {
  return {
    result: !isEmpty(input) && isLength(input, passwordLength),
    errMsg: `${passwordLength.min} 到 ${passwordLength.max} 位密码`
  }
}
