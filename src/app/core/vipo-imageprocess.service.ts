import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VipoImageprocessService {

  constructor(private http: HttpClient) { }


  public processTakenPhoto(body: any) {
    const url = 'http://127.0.0.1:5000/process-img';
    const firstHeaders = new HttpHeaders();

    this.http.get(url).subscribe( data => {
      console.log(data as JSON);
    });
    // .toPromise()
    // .then(response =>
    //   this.resolveResult(response))
    // .catch(this.handleError);

    // return this.http.post(url, body, { headers: firstHeaders})
    //   .toPromise()
    //   .then(response =>
    //     this.resolveResult(response))
    //   .catch(this.handleError);
  }

  private resolveResult(response: any): any {
    const responseServer = response;
    if (responseServer.status === 'successful') {
        return responseServer.result;
    } else {
        throw (new Error(responseServer.errorReason));
    }
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
}
