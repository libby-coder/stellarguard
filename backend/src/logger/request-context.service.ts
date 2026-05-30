import { Injectable, Scope } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

export interface RequestContext {
  requestId: string;
}

@Injectable({ scope: Scope.DEFAULT })
export class RequestContextService {
  private readonly asyncLocalStorage = new AsyncLocalStorage<RequestContext>();

  run<T>(context: RequestContext, callback: () => T): T {
    return this.asyncLocalStorage.run(context, callback);
  }

  getRequestId(): string | undefined {
    const store = this.asyncLocalStorage.getStore();
    return store?.requestId;
  }
}
