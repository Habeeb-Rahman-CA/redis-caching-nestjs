import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class StudentsService {
  constructor(@Inject('CACHE_MANAGER') private cacheManager: Cache) {}

  async getStudents() {
    // const cachedData = await this.cacheManager.get('students');
    // if (cachedData) {
    //   console.log('Got data from cache');
    //   return cachedData;
    // }
    const studentsData = this.retieveStudentsFromDb();
    // await this.cacheManager.set('students', studentsData, 60 * 1000);
    return studentsData;
  }

  async retieveStudentsFromDb() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const students = [
          { name: 'Habeeb', age: 22, GPA: 8.9 },
          { name: 'Rahman', age: 22, GPA: 6.5 },
          { name: 'Sonu', age: 22, GPA: 5.5 },
        ];
        resolve(students);
      }, 1000);
    });
  }
}
