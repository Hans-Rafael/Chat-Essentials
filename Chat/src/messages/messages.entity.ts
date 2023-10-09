import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity('message')  
export default class MessageEntity {
    //Declarar propiedad swager
    @ApiProperty({description: 'id as uuid', type: 'string'})
    //crear columna primaria mensaje:id
    @PrimaryGeneratedColumn('uuid')
    public id?:string;
    
    //Declarar propiedad swager
    @ApiProperty({ description: 'Mensaje de un usuario', type: 'string'})
    //Crear columna mensaje:texto
    @Column()
    public message:string;
}