/**
 * Created by natan on 12/10/2016.
 */
import {Component} from 'angular2/core'
import {CoursesService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
            <h2>Courses</h2>
            {{ title }}
            <ul>
                <li *ngFor="#course of courses">
                {{ course }}
                </li>
            </ul>
            `,
    providers: [CoursesService]
})
export class CoursesComponent {
    title = "The title of courses page";
    courses;

    constructor(courseService:CoursesService) {
        this.courses = courseService.getCourses();
    }
}
