import { Injectable } from '@nestjs/common'
import { customAlphabet, nanoid } from 'nanoid'

@Injectable()
export class NanoIdHelper {
  private readonly customnanoid = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    22,
  )

  generate(size?: number): string {
    return nanoid(size)
  }

  generateCustomNanoId(size?: number): string {
    return this.customnanoid(size)
  }
}