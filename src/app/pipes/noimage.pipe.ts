import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    let result = null;
    
    if(images && images.length > 0){
      result = images[0].url;
    }else{
      result = 'assets/img/noimage.png';  
    }
    return result;
  }
}
