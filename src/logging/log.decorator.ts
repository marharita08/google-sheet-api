import { SetMetadata } from '@nestjs/common';

export const LOGGING_KEY = 'logging';

export const Log = () => SetMetadata(LOGGING_KEY, true);
