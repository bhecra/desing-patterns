import { IHttpAdapter } from "../interface/http-adapter.interface";


export class AxiosAdpater<T> implements IHttpAdapter<T> {
  headers: Headers;
  baseUrl: string;
  get(): T {
    console.log('axios get');
    return 
    
  }
  post(value: T): void {
    throw new Error("Method not implemented.");
  }
  put(value: T): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
  
}