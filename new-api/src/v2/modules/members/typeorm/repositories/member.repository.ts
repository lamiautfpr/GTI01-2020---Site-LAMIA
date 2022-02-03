import IFindConflictDTO from '@modules/members/dtos/IFindConflict.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, getRepository, Like, Repository } from 'typeorm';
import ICreateMemberDTO from '../../dtos/ICreateMember.dto';
import IOrderByMember from '../../dtos/IOrderByMember.dto';
import IRepositoryMember from '../../repositories/IRepositoryMember';
import { EntityMember } from '../entities/member.entity';

@EntityRepository(EntityMember)
export class RepositoryMember
  extends Repository<RepositoryMember>
  implements IRepositoryMember {
  private ormRepository: Repository<EntityMember>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityMember);
  }

  public async createSave(data: ICreateMemberDTO): Promise<EntityMember> {
    const member = this.ormRepository.create(data);

    return this.ormRepository.save(member);
  }

  public async updateSave(data: EntityMember): Promise<EntityMember> {
    await this.ormRepository.save(data);
    return this.findById(data.id);
  }

  public async findById(id: string): Promise<EntityMember | undefined> {
    return !id
      ? undefined
      : this.ormRepository.findOne(id, { relations: ['works'] });
  }

  public async findByEmail(email: string): Promise<EntityMember | undefined> {
    return this.ormRepository.findOne({
      where: { email },
      relations: ['works'],
    });
  }

  public async findByLogin(login: string): Promise<EntityMember | undefined> {
    const members = await this.ormRepository
      .createQueryBuilder('member')
      .leftJoinAndSelect('member.patent', 'patent')
      .leftJoinAndSelect('member.works', 'work')
      .leftJoinAndSelect('work.types', 'type')
      .leftJoinAndSelect('work.areaExpertise', 'areaExpertise')
      .leftJoinAndSelect('work.categories', 'categories')
      .where('member.login = :login', { login });

    return members.getOne();
  }

  public async findConflict(
    uniqueDatas: Partial<IFindConflictDTO>,
  ): Promise<EntityMember | undefined> {
    if (Object.keys(uniqueDatas).length === 0) {
      throw new InternalServerErrorException([
        'It should define  at least one attribute de uniqueDatas: email, login, linkedin, lattes, gitHub, quoteName',
      ]);
    }

    return this.ormRepository.findOne({ where: { ...uniqueDatas } });
  }

  public async findByLikeName(
    name: string,
    order?: IOrderByMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({
      where: { name: Like(`%${name}%`) },
      relations: ['works'],
      order,
    });
  }

  public async findAll(
    order?: IOrderByMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({ order, relations: ['works'] });
  }

  public async countLogin(login: string): Promise<[EntityMember[], number]> {
    return this.ormRepository.findAndCount({
      where: { login: Like(`${login}%`) },
      relations: ['works'],
    });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
