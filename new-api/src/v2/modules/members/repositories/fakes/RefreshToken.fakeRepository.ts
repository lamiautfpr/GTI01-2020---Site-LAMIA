import ICreateRefreshTokenDto from '@modules/members/dtos/ICreateRefreshToken.dto';
import { EntityRefreshToken } from '@modules/members/typeorm/entities/refreshToken.entity';
import IRepositoryRefreshToken from '../IRepositoryRefreshToken';

export class FakeRefreshTokenRepository implements IRepositoryRefreshToken {
  private tokens: EntityRefreshToken[];

  constructor() {
    this.tokens = [];
  }

  public async createSave(
    data: ICreateRefreshTokenDto,
  ): Promise<EntityRefreshToken> {
    const token = new EntityRefreshToken(data);

    this.tokens.push(token);

    return token;
  }

  public async updateSave(
    data: EntityRefreshToken,
  ): Promise<EntityRefreshToken> {
    const tokenIndex = this.tokens.findIndex((token) => data.id === token.id);

    this.tokens[tokenIndex] = data;

    return this.tokens[tokenIndex];
  }

  public async findById(id: string): Promise<EntityRefreshToken> {
    return this.tokens.find((token) => token.id === id);
  }
  public async findByHash(hash: string): Promise<EntityRefreshToken> {
    return this.tokens.find((token) => token.hash === hash);
  }
  public async findByLogin(login: string): Promise<EntityRefreshToken> {
    return this.tokens.find((token) => token.login === login);
  }
  public async findValidByLogin(login: string): Promise<EntityRefreshToken> {
    return this.tokens.find((token) => token.login === login);
  }
  public async findValidByHash(login: string): Promise<EntityRefreshToken> {
    console.log('oi');
    return this.tokens.find(
      (token) => token.login === login && token.status == true,
    );
  }
}
