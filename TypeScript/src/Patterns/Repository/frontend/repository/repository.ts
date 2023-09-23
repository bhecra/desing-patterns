import { IUbitsFilter } from "../utils/index";

export abstract class Repository<T> {
  abstract get(id: string): Promise<T>

  abstract set(item: T | T[]): Promise<any>

  abstract update(item: T | T[]): Promise<any>

  abstract delete(id: string | string[] | T | T[]): Promise<any>

  abstract count(filter?: IUbitsFilter): Promise<number>

  abstract search(filter?: IUbitsFilter): Promise<T[]>

  abstract searchPaginator(filter?: IUbitsFilter): Promise<{ data: T[]; count: number }>

  abstract inputFormat(data: any): T

  abstract outputFormat(data: any): any
}