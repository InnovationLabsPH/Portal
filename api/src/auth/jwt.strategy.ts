import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

// check env variables
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_ISSUER = process.env.AUTH0_ISSUER;

if (!AUTH0_DOMAIN) throw new Error('Missing AUTH0_DOMAIN environment variable');
if (!AUTH0_AUDIENCE) throw new Error('Missing AUTH0_AUDIENCE environment variable');
if (!AUTH0_ISSUER) throw new Error('Missing AUTH0_ISSUER environment variable');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
      algorithms: ['RS256'],
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}.well-known/jwks.json`,
      }),
    });
  }

  // return ID and Username for now
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }
  }
}
