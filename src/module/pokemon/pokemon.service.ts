import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pokemon, Prisma } from '@prisma/client';


@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  create(createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new pokemon';
  }



  findOne(id: number) {
    return `This action returns a #${1} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }

  async findAllPokemons(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PokemonWhereUniqueInput;
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithRelationInput;
  }): 
    Promise<Pokemon[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.pokemon.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPokemon(data: Prisma.PokemonCreateInput): Promise<Pokemon> {
    return this.prisma.pokemon.create({
      data: CreatePokemonDto
    })
  }

}
