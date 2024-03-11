import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesHttpService } from './services/courses-http.service';
import { CourseActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';
import { allCoursesLoaded } from './course.actions';

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap(() => this.courseHttpService.findAllCourses()),
        map(courses => allCoursesLoaded({ courses }))
      )
  })

  saveSource$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CourseActions.courseUpdated),
        concatMap((action) => this.courseHttpService.saveCourse(
          action.update.id,
          action.update.changes
        ))
      )
  }, {dispatch: false})

  constructor(private actions$: Actions, private courseHttpService: CoursesHttpService) {
  }
}
