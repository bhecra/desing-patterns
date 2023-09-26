import {
  FilterLogicalOperatorEnum,
  IFilter,
  filterObject,
  sortObjects,
  uuid,
} from '../utils/index';
import { Repository } from './repository';

export class MemoryRepository<T> implements Repository<T> {
  public items = new Map();

  /**
   *set initial data
   */
  constructor(items: T[]) {
    for (const item of items) this.set(item).then();
  }

  async get(id: string): Promise<T> {
    const item = this.items.get(id) || {};
    return Promise.resolve(this.inputFormat(item));
  }
  async set(items: T | T[]): Promise<any> {
    if (!Array.isArray(items)) items = [items];

    for (const item of items) {
      item['id'] = item['id'] || uuid();
      this.items.set(item['id'], item);
    }
  }
  async update(items: T | T[]): Promise<any> {
    if (!Array.isArray(items)) items = [items];

    for (const item of items) {
      await this.set(item);
    }
  }
  async delete(id: string | string[] | T | T[]): Promise<void> {
    if (!id) return;

    const ids = Array.isArray(id) ? id : [id];

    for (const item of ids) {
      if (typeof item === 'string') {
        this.items.delete(item);
      } else if (typeof item === 'object' && item['id']) {
        this.items.delete(item['id']);
      }
    }
  }
  async count(filter?: IFilter): Promise<number> {
    const data = (await this.search(filter)) || []
    return Promise.resolve(data.length)
  }
  async search(filter?: IFilter): Promise<T[]> {
    const args = filter?.args || null;
    const order = filter?.order || null;
    const logicalOperator =
      filter?.logicalOperator || FilterLogicalOperatorEnum.AND;

    const data: T[] = [];
    this.items.forEach((item) => data.push(this.inputFormat(item)));
    let currentItems = args ? filterObject(logicalOperator, data, args) : data;

    if (order) {
      const key = filter.order.key;
      const sort = filter.order.sort;
      currentItems = sortObjects(key, currentItems, sort);
    }

    currentItems = this.sliceData(filter, currentItems);

    return Promise.resolve(currentItems || []);
  }
  async searchPaginator(
    filter?: IFilter
  ): Promise<{ data: T[]; count: number }> {
    const data = (await this.search(filter)) || []

    const countFilter = JSON.parse(JSON.stringify(filter)) || {}
    delete countFilter['page']
    const count = (await this.count(countFilter)) || 0

    return { data, count }
  }
  inputFormat(data: any): T {
    return data;
  }

  outputFormat(data: any): any {
    return data;
  }

  sliceData(filter: IFilter, data): any[] {
    data = data || [];
    if (!filter?.page) return data;

    const start = filter.page.start;
    const end = filter.page.end;

    if (start >= 0 && end >= start) {
      return data.slice(start, end);
    }

    return data;
  }
}
