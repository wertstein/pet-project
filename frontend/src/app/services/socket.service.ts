import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { config } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(config.api);

    this.socket.on('connect', (data: any) => {
      console.log(data);
    });
    console.log(this.socket);

    setTimeout(() => {
      console.log(this.socket);
    }, 10000);
  }

  public send(message: any): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
