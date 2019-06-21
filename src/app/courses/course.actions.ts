import {createAction, props} from '@ngrx/store';
import {Course} from './model/course';
import {Lesson} from './model/lesson';
import {UpdateNum} from '@ngrx/entity/src/models';


export interface PageQuery {
  pageIndex: number;
  pageSize:number;
}

export const loadLessonsPage = createAction(
  '[Course Landing Page] Load Lessons Page',
   props<{courseId:number, page:PageQuery}>()
);

export const lessonsPageLoaded = createAction(
  '[Courses API] Lessons Page Loaded',
  props<{lessons: Lesson[]}>()
);

export const lessonsPageCancelled = createAction(
  '[Courses API] Lessons Page Cancelled'
);

export const loadCourse = createAction(
  '[View Course Page] Course Requested',
  props<{ courseId: number }>()
);

export const courseLoaded = createAction(
  '[Courses API] Course Loaded',
  props<{ course: Course }>()
);

export const loadAllCourses = createAction(
  '[Courses Home Page] All Courses Requested'
);

export const allCoursesLoaded = createAction(
  '[Courses API] All Courses Loaded',
  props<{ courses: Course[] }>()
);

export const saveCourse = createAction(
  '[Save Course Dialog] Save Course',
  props<{update: UpdateNum<Course>}>()
);




