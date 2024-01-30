export interface IHttpAdapter<T> {
  get({ url, args }: { url: string; args?: any }): Promise<T>
  post({ url, body, args }: { url: string; body: T; args?: any }): Promise<void>
  put({ url, body, args }: { url: string; body: T; args?: any }): Promise<void>
  delete({ url, body, args }: { url: string; body: T; args?: any }): Promise<void>
}
