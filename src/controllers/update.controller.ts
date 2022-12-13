import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('updates')
@ApiTags('updates')
export class UpdateController {
  constructor() {}

  @Get()
  @ApiOperation({ summary: 'Retreive new editor update information', description: 'This function has never been implemented on this system. Since there is currently no update methodology.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getEditorUpdates(): string {
    return 'Hello World';
  }
  
}