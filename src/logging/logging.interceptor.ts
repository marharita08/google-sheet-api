import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import { LOGGING_KEY } from './log.decorator';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    const isLoggingEnabled = this.reflector.get<boolean>(
      LOGGING_KEY,
      context.getHandler(),
    );

    const now = Date.now();

    if (isLoggingEnabled) {
      const { method, url } = request;

      this.logger.log(`Request: ${method} ${url}`);
    }

    return next.handle().pipe(
      tap(() => {
        if (isLoggingEnabled) {
          const responseTime = Date.now() - now;
          this.logger.log(
            `Response: ${response.statusCode} ${responseTime}ms`, 
          );
        }
      }),
    );
  }
}
