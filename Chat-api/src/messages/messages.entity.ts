import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import UserEntity from '../users/users.entity';

@Entity('message')
export default class MessageEntity {
  //Declarar propiedad swager
  @ApiProperty({ description: 'id as uuid', type: 'string' })
  //crear columna primaria mensaje:id
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  //Declarar propiedad swager
  @ApiProperty({ description: 'Mensaje de un usuario', type: 'string' })
  //Crear columna mensaje:texto
  @Column()
  public message: string;

  @ApiProperty({
    description: 'Usuario que envio el mensaje',
    type: UserEntity,
  })
  @ManyToOne(() => UserEntity, (user) => user.messages)
  public sender: UserEntity;
}
