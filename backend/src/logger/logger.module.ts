import { Module, Global } from '@nestjs/common';
import { RequestContextService } from './request-context.service';
import { CustomLogger } from './logger.service';

@Global()
@Module({
  providers: [RequestContextService, CustomLogger],
  exports: [RequestContextService, CustomLogger],
})
export class LoggerModule {}
