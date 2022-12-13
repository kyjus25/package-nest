import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { from, map, Observable } from 'rxjs';
import { Package } from 'src/shared/entities/package.entity';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { DataSource, Repository } from 'typeorm';

@Controller('packages')
@ApiTags('packages')
export class PackageController {
  constructor(
    private data: DataSource,
  ) {}

  @Get('')
  @ApiOperation({ summary: 'Get all packages', description: 'Based on any filtering applied via query parameters.' })
  @ApiOkResponse({
    status: 200,
    type: Package,
  })
  public getPackages(): Observable<Package[]> {
    return from(this.data.getRepository(Package).find())
  }

  @Post('')
  @ApiOperation({ summary: 'Add a new package', description: 'Determines if it can be published, then goes about doing so' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public addPackage(): string {
    return 'Hello World';
  }

  @Get('featured')
  @ApiOperation({ summary: 'Get all featured packages', description: 'This endpoint was originally undocumented.<br> \
    The decision to return 200 is based off similar endpoints.<br> \
    Additionally for the time being this list is created manually, the same method used on Atom.io for now. Although there are plans to have this become automatic later on.<br> \
    <a href="https://github.com/atom/apm/blob/master/src/featured.coffee" target="_blank">Atom Source Code</a> \
    <a href="https://github.com/confused-Techie/atom-community-server-backend-JS/issues/23" target="_blank">View Discussion</a>' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getFeaturedPackages(): Observable<Package[]> {
    return from(this.data.getRepository(Package).find());
  }

  @Get('search')
  @ApiOperation({ summary: 'Search through all packages' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public searchPackages(): string {
    return 'Hello World';
  }

  @Get(':packageName')
  @ApiOperation({ summary: 'Get full details about a package' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getPackage(): string {
    return 'Hello World';
  }

  @Delete(':packageName')
  @ApiOperation({ summary: 'Delete a package you have ownership of' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public deletePackage(): string {
    return 'Hello World';
  }

  @Post(':packageName/versions')
  @ApiOperation({ summary: 'Allows a new version of a package to be published', description: 'Can also allow a user to rename their application during this process.' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public addPackageVersion(): string {
    return 'Hello World';
  }

  @Post(':packageName/versions/:version')
  @ApiOperation({ summary: 'Retrieve full details of a specific version of a package', description: 'This should be moved to getPackage().' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getPackageVersion(): string {
    return 'Hello World';
  }

  @Delete(':packageName/versions/:version')
  @ApiOperation({ summary: 'Delete a specific version of your package' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public deletePackageVersion(): string {
    return 'Hello World';
  }

  @Get(':packageName/versions/:version/tarball')
  @ApiOperation({ summary: 'Get the tarball for a specific package version', description: 'Should initiate a download of said tarball on their end.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getPackageTarball(): string {
    return 'Hello World';
  }

  @Post(':packageName/versions/:version/events/uninstall')
  @ApiOperation({ summary: 'Used when a package is uninstalled', description: 'Decreases the Download count by 1. \
    And saves this data, Originally an undocumented endpoint. \
    The decision to return a 201 was based on how other POST endpoints return, \
    during a successful event.' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public decrementDownloads(): string {
    return 'Hello World';
  }

  @Get(':packageName/stargazers')
  @ApiOperation({ summary: 'Returns the stargazers of a package' })
  @ApiTags('stars')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public getPackageStargazers(): string {
    return 'Hello World';
  }

  @Post(':packageName/star')
  @ApiOperation({ summary: 'Submit a new star to a package' })
  @ApiTags('stars')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public addStar(): string {
    return 'Hello World';
  }

  @Delete(':packageName/star')
  @ApiOperation({ summary: 'Remove a star that you have given a package' })
  @ApiTags('stars')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: String,
  })
  public deleteStar(): string {
    return 'Hello World';
  }


}