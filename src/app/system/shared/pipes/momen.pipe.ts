import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
    name: 'app-moment'
})
export class MomentPipe implements PipeTransform {
    transform(value: string, formatFrom: string = 'yyyy-MM-dd', formatTo: string = 'dd.MM.yyyy'): string {
        return moment(value, formatFrom).format(formatTo)
    }
}