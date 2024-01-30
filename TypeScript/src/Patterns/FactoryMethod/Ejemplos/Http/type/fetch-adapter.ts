import { IHttpAdapter } from '../interface/http-adapter.interface'

export class FetchAdapter<T> implements IHttpAdapter<T> {
  async get({ url, args }: { url: string; args?: any }): Promise<Response> {
    const headers = new Headers({
      ...args?.headers,
    })

    const init: RequestInit = { method: 'GET', headers }
    const request = new Request(url, init)
    let result = await this.httpFetch(request).catch(err => {
      throw err
    })

    return await result.json()
  }
  async post({ url, body, args }: { url: string; body: T; args?: any }): Promise<any> {
    const headers = new Headers({
      ...args.headers,
    })
    const init: RequestInit = { method: 'POST', headers: headers, body: JSON.stringify(body) }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }
  async put({ url, body, args }: { url: string; body: T; args?: any }): Promise<any> {
    const init: RequestInit = {
      method: 'PUT',
      headers: args.headers,
      body: JSON.stringify(body),
    }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }

  async patch({ url, body, args }: { url: string; body: T; args?: any }): Promise<Response> {
    const init: RequestInit = {
      method: 'PATCH',
      headers: args.headers,
      body: JSON.stringify(body),
    }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }
  async delete({ url, body, args }: { url: string; body: T; args?: any }): Promise<any> {
    const init: RequestInit = {
      method: 'DELETE',
      headers: args.headers,
    }

    if (body) init['body'] = JSON.stringify(body)

    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }

  private async httpFetch(request: Request): Promise<Response> {
    let response: Response

    try {
      response = await fetch(request)
      if (response.ok) {
        return response
      } else {
        throw new Error(response.status.toString()) // Lanzar un error con el código de estado HTTP
      }
    } catch (error) {
      throw error // Lanzar un error con el código de estado HTTP
    }
  }
}
