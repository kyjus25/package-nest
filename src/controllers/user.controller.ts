import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { DataSource } from 'typeorm';

@Controller()
export class UserController {
  constructor(private data: DataSource) {}

  @Get('login')
  @ApiOperation({ summary: 'Initiate an OAuth to GitHub in order to log in' })
  @ApiTags('auth')
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
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getOAuth(): string {
    return 'Hello World';
  }

  @Get('stars')
  @ApiOperation({ summary: 'All packages the authenticated user has starred' })
  @ApiTags('stars')
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
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
