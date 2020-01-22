import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'grouped'
})
export class GroupedPipe implements PipeTransform {

  transform(value: any, groupsCount: number): any {
    if (!value || value.length < groupsCount || !groupsCount || groupsCount < 2) {
      return [value];
    }
    const resultArray = [];
    const itemsCount = Math.ceil(value.length / groupsCount);
    let itemIndex = 0;
    for (let i = 0; i < groupsCount; i++) {
      const group = [];
      let lastItemIndex = itemIndex + itemsCount;
      if (lastItemIndex >= value.length) {
        lastItemIndex = value.length;
      }
      for (let k = itemIndex; k < lastItemIndex; k++) {
        group.push(value[itemIndex++]);
      }
      resultArray.push(group);
    }
    return resultArray;
  }
}
