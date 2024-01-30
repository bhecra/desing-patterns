import { IHttpAdapter } from '../interface/http-adapter.interface'
import { AxiosAdpater } from '../type/axios-adapter'
import { FetchAdapter } from '../type/fetch-adapter'

interface HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T>
}

class FetchFactory<T> implements HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T> {
    return new FetchAdapter()
  }
}
class AxiosFactory<T> implements HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T> {
    return new AxiosAdpater<T>()
  }
}

function appFactory(factory: HttpCreatorFactory<string>) {
  const http = factory.createHttp()
  http.get({ url: 'https://pokeapi.co/api/v2/pokemon/ditto', args: '' }).then(response => {
    console.log({ response })
  })
}

appFactory(new FetchFactory())
// appFactory(new AxiosFactory())
