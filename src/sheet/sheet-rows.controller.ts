import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

import { SheetRowsService } from './sheet-rows.service';
import { SheetRow } from './sheet-row.entity';
import { Log } from 'src/logging/log.decorator';

@ApiTags('sheet-rows')
@Controller('sheet-rows')
export class SheetRowsController {
  constructor(private readonly sheetRowsService: SheetRowsService) {}

  @Post(':id')
  @ApiOperation({ summary: 'Save sheet row by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sheet row' })
  @ApiBody({
    description: 'JSON object containing sheet row data',
    schema: {
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Sheet row successfully saved',
  })
  @Log()
  async save(
    @Param('id') id: number,
    @Body() columns: Record<string, string>,
  ): Promise<void> {
    await this.sheetRowsService.save(id, columns);
  }

  @Get()
  @ApiOperation({ summary: 'Get all saved sheet rows' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all sheet rows',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          columns: {
            type: 'object',
            additionalProperties: { type: 'string' },
            example: { A: 'value1', B: 'value2' },
          },
        },
      },
    },
  })
  @Log()
  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sheet row by ID' })
  @ApiParam({ name: 'id', description: 'ID of the sheet row' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved sheet row',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        columns: {
          type: 'object',
          additionalProperties: { type: 'string' },
          example: { A: 'value1', B: 'value2' },
        },
      },
    },
  })
  @Log()
  async getById(@Param('id') id: number): Promise<SheetRow> {
    return await this.sheetRowsService.getById(id);
  }
}
