import { Injectable } from "@angular/core";
@Injectable()
export class Utils {
  isEmpty(input:any): boolean {
    if (input == null || input == '' || input == undefined) {
      return true;
    } else {
      return false;
    }
  }

  ucfirst(_string:any) {
    return _string.charAt(0).toUpperCase() + _string.slice(1);
  }

  ucwords(_string:any) {
    var string = _string;
    string = string.toLowerCase().replace(/\b[a-z]/g, function (word:any) {
      return word.toUpperCase();
    });
    return string;
  }
}