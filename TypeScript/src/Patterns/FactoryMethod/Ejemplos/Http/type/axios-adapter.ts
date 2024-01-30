import { IHttpAdapter } from '../interface/http-adapter.interface'

export class AxiosAdpater<T> implements IHttpAdapter<T> {
  get({ url, args }: { url: string; args?: any }): Promise<Response> {
    throw new Error('Method not implemented.')
  }
  post({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response> {
    throw new Error('Method not implemented.')
  }
  put({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response> {
    throw new Error('Method not implemented.')
  }
  patch({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response> {
    throw new Error('Method not implemented.')
  }
  delete({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response> {
    throw new Error('Method not implemented.')
  }
}
