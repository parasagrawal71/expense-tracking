import { Injectable } from '@nestjs/common';
import { NoOpQueryService, Query } from '@ptc-org/nestjs-query-core';
import { UserDto } from '../dto/user.dto';
import { config } from '../../config/config';

@Injectable()
export class UserQueryService extends NoOpQueryService<UserDto> {
  constructor() {
    super();
  }

  async query(query: Query<UserDto>): Promise<UserDto[]> {
    const userId = query?.filter?.id?.eq;
    if (!userId) {
      return [];
    }

    return fetch(`${config.AUTH_API_SERVICE_URL}/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => [data]);
  }
}
