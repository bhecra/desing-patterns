import { IUbitsFilter, uuid } from "../utils/index";
import { Repository } from "./repository";

export class MemoryRepository<T> implements Repository<T>{

  public items = new Map()

  /**
   *set initial data
   */
  constructor(items: T[]) {
    for (const item of items) this.set(item).then()
  }

  async get(id: string): Promise<T> {
    const item = this.items.get(id) || {}
    return Promise.resolve(this.inputFormat(item))
  }
  async set(items: T | T[]): Promise<any> {
    if (!Array.isArray(items)) items = [items]

    for (const item of items) {
      item['id'] = item['id'] || uuid()
      this.items.set(item['id'], item)
    }
  }
  async update(items: T | T[]): Promise<any> {
    if (!Array.isArray(items)) items = [items]

    for (const item of items) {
      await this.set(item)
    }
  }
  async delete(id: string | string[] | T | T[]): Promise<void> {
    if (!id) return

    const ids = Array.isArray(id) ? id : [id]

    for (const item of ids) {
      if (typeof item === 'string') {
        this.items.delete(item)
      } else if (typeof item === 'object' && item['id']) {
        this.items.delete(item['id'])
      }
    }
  }
  count(filter?: IUbitsFilter): Promise<number> {
    throw new Error("Method not implemented.");
  }
  search(filter?: IUbitsFilter): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  searchPaginator(filter?: IUbitsFilter): Promise<{ data: T[]; count: number; }> {
    throw new Error("Method not implemented.");
  }
  inputFormat(data: any): T {
    return data
  }

  outputFormat(data: any): any {
    return data
  }

}