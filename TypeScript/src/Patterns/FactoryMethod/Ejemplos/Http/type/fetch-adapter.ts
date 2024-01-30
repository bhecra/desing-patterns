import { IHttpAdapter } from '../interface/http-adapter.interface'

export class FetchAdapter<T> implements IHttpAdapter<T> {
  private _headers: Headers
  private _baseUrl: string

  /**
   *
   */
  constructor(baseUrl: string, headers: Headers) {
    this._baseUrl = baseUrl
    this._headers = headers
  }
  get({ url, args }: { url: string; args?: any }): Promise<T> {
    throw new Error('Method not implemented.')
  }
  post({ url, body, args }: { url: string; body: T; args?: any }): Promise<void> {
    throw new Error('Method not implemented.')
  }
  put({ url, body, args }: { url: string; body: T; args?: any }): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete({ url, body, args }: { url: string; body: T; args?: any }): Promise<void> {
    throw new Error('Method not implemented.')
  }

  private async httpFetch(request: Request): Promise<Response> {
    let response: Response

    try {
      response = await fetch(request)
      if (response.ok) {
        return response
      } else {
        throw new Error(response.status.toString(), { cause: response }) // Lanzar un error con el código de estado HTTP
      }
    } catch (error) {
      let errorMessage = ''

      ;(errorMessage = error.message), (error['detail'] = await error?.cause?.json())

      // if (process.env.ENV !== 'production')
      //   console.error(
      //     errorMessage,
      //     '\nError cause: ',
      //     error?.cause,
      //     '\nError detail: ',
      //     error['detail']
      //   );

      throw error // Lanzar un error con el código de estado HTTP
    }
  }
}
