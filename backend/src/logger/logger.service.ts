import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { RequestContextService } from './request-context.service';

@Injectable({ scope: Scope.DEFAULT })
export class CustomLogger implements LoggerService {
  private readonly logger = new Logger();

  constructor(private readonly requestContext: RequestContextService) {}

  log(message: any, context?: string) {
    const requestId = this.requestContext.getRequestId();
    const prefix = requestId ? `[${requestId}] ` : '';
    this.logger.log(prefix + message, context);
  }

  error(message: any, trace?: string, context?: string) {
    const requestId = this.requestContext.getRequestId();
    const prefix = requestId ? `[${requestId}] ` : '';
    this.logger.error(prefix + message, trace, context);
  }

  warn(message: any, context?: string) {
    const requestId = this.requestContext.getRequestId();
    const prefix = requestId ? `[${requestId}] ` : '';
    this.logger.warn(prefix + message, context);
  }

  debug(message: any, context?: string) {
    const requestId = this.requestContext.getRequestId();
    const prefix = requestId ? `[${requestId}] ` : '';
    this.logger.debug(prefix + message, context);
  }

  verbose(message: any, context?: string) {
    const requestId = this.requestContext.getRequestId();
    const prefix = requestId ? `[${requestId}] ` : '';
    this.logger.verbose(prefix + message, context);
  }
}
