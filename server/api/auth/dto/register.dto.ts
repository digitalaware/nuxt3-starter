import { H3Event } from 'h3';
import { validateLoginDto } from '~/server/api/auth/dto/login.dto';

export const validateRegisterDto = (event: H3Event) => validateLoginDto(event); // при расширении регистрации описать схему
