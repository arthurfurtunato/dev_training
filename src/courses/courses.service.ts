import { Injectable } from '@nestjs/common';
import { Course } from './enitities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Aprenda a criar aplicações com o framework NestJS',
      tags: ['nestjs', 'framework', 'nodejs'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course: Course) => course.id === +id);
  }

  create(createCourseDto: any) {
    return this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === +id,
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === +id,
    );

    if (indexCourse >= 0) {
      return this.courses.splice(+id - 1, 1);
    }

    return `Não foi encontrado um curso com esse index`;
  }
}
