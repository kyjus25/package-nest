import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('themes')
@ApiTags('themes')
export class ThemeController {
  constructor() {}

  @Get()
  @ApiOperation({ summary: 'Retreive all featured packages that are themes', description: 'Originally an undocumented endpoint. \
    Returns a 200 response based on other similar responses.<br> \
    Additionally for the time being this list is created manually, the same method used \
    on Atom.io for now. Although there are plans to have this become automatic later on.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getUserStars(): string {
    return 'Hello World';
  }
}
