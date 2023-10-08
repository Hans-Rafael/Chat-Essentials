import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity('message')  
export class MessageEntity {
    //Declarar propiedad swager
    @ApiProperty({})
    //crear columna primaria mensaje:id
    @PrimaryGeneratedColumn('uuid')
    public id:string;
    
    //Declarar propiedad swager
    @ApiProperty({})
    //Crear columna mensaje:texto
    @Column()
    public message:string;
}