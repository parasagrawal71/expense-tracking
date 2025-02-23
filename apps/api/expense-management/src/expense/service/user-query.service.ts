import { Injectable } from '@nestjs/common';
import { NoOpQueryService, Query } from '@ptc-org/nestjs-query-core';
import { Logger } from '@packages/common';
import { UserDto } from '../dto/user.dto';
import { config } from '../../config/config';

@Injectable()
export class UserQueryService extends NoOpQueryService<UserDto> {
  constructor(private readonly logger: Logger) {
    super();
  }

  async query(query: Query<UserDto>): Promise<UserDto[]> {
    const userId = query?.filter?.id?.eq;
    if (!userId) {
      return [];
    }

    try {
      const res = await fetch(`${config.AUTH_API_SERVICE_URL}/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return [data];
    } catch (e) {
      this.logger.error(e, `Error fetching user - userId = ${userId}`);
      return [];
    }
  }
}
