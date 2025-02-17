import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @CacheTTL(0)
  @CacheKey('MYKEY')
  @Get()
  async getStudents() {
    return this.studentsService.getStudents();
  }
}
