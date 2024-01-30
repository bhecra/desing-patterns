export interface IHttpAdapter<T> {
  get({ url, args }: { url: string; args?: any }): Promise<Response>
  post({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response>
  put({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response>
  patch({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response>
  delete({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response>
}
