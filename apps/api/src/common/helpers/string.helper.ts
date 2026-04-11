import { Injectable } from '@nestjs/common'
import slugify from 'slugify'

@Injectable()
export class StringHelper {
  emailMask(email: string): string {
    return email.replace(/(?<=.{2}).(?=[^@]*?.@)/g, '*')
  }

  convertAllToString(value: any): string {
    switch (typeof value) {
      case 'string':
        return value
      case 'number':
        return value.toString()
      case 'bigint':
        return value.toString()
      case 'boolean':
        return value.toString()
      case 'object':
        return JSON.stringify(value)
      default:
        return ''
    }
  }

  encodingToCharset(encoding: string): string {
    switch (encoding) {
      case 'ISO-8859-1':
        return 'latin1'
      case 'UTF-8':
        return 'utf8'
      default:
        return 'utf8'
    }
  }

  slugify(text: string): string {
    return slugify(text, {
      replacement: '_',
      trim: true,
      lower: true,
    })
  }

  slugifyCustomKey(text: string): string {
    return slugify(text, {
      replacement: '_',
      remove: /[*+~.()'"!:@]/g,
      lower: false,
      strict: true,
      trim: true,
    })
  }
}