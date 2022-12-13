import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class UserController {
  constructor() {}

  @Get('login')
  @ApiOperation({ summary: 'Initiate an OAuth to GitHub in order to log in' })
  @ApiTags('auth')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getLogin(): string {
    return 'Hello World';
  }

  @Get('oauth')
  @ApiOperation({ summary: 'The return from GitHub to login' })
  @ApiTags('auth')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getOAuth(): string {
    return 'Hello World';
  }

  @Get('stars')
  @ApiOperation({ summary: 'All packages the authenticated user has stared' })
  @ApiTags('stars')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getStars(): string {
    return 'Hello World';
  }

  @Get('users/:email/stars')
  @ApiOperation({ summary: 'Endpoint that returns another users Star Gazers List' })
  @ApiTags('stars')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getUserStars(): string {
    return 'Hello World';
  }
}
