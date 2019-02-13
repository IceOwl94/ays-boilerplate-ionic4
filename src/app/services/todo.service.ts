import {Injectable} from '@angular/core';

export interface Todo {
    id?: string;
    task: string;
    priority: number;
    createdAt: number;
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {

}
