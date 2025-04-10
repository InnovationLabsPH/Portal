import { Controller, Get, Query, Redirect, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Using AUTH0 universal login
  @Get('login')
  @Redirect()
  getLogin() {
    let domain = process.env.AUTH0_DOMAIN;
    let client_id = process.env.AUTH0_CLIENT_ID;
    let login_redirect = encodeURIComponent('http://localhost:3000/callback');

    return { url: `https://${domain}/authorize?response_type=token&client_id=${client_id}&redirect_uri=${login_redirect}`}
  }

  // sample protected endpoint WILL BE REMOVED
  @Get('secured')
  @UseGuards(JwtAuthGuard)
  sampleSecuredEndpoint() {
    return 'Woah you accessed a secured endpoint!!!!!!!!!!';
  }

  // WILL BE REMOVED
  @Get('callback')
  sampleCallback() {
    return {
      message: 'Access token is now in the URL! Use postman for testing',
      endpoints: ['/secured', '/project', 'logout'],
    };
  }

  // WILL BE REMOVED
  @Get('logout')
  @Redirect()
  sampleLogout() {
    let logout_redirect = encodeURIComponent('http://localhost:3000/logout_callback');
    let domain = process.env.AUTH0_DOMAIN;
    let client_id = process.env.AUTH0_CLIENT_ID;
    return {url: `https://${domain}/v2/logout?client_id=${client_id}&returnTo=${logout_redirect}`}
  }

  // WILL BE REMOVED
  @Get('logout_callback')
  sampleLogoutCallback() {
    return 'You logged out!'
  }

}
