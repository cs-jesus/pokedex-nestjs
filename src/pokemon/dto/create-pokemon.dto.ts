import { Prisma } from "@prisma/client";
import { Pokemon } from "../entities/pokemon.entity";
import { IsOptional, IsString, IsInt } from "class-validator";

export class CreatePokemonDto extends Pokemon {
    
    @IsString()
    name: string;

    @IsInt()
    @IsOptional()
    height?: number | null;
}
