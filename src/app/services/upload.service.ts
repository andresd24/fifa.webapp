import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  make_file_request(url: string, params: Array<String>, files: Array<File>, token: string, name: string) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
//      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);

    });
  }
}
