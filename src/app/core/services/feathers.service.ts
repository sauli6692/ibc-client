import { Injectable } from '@angular/core';

const feathers = require('@feathersjs/feathers');
const authentication = require('@feathersjs/authentication-client');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const feathersRx = require('feathers-reactive');

import { environment } from '../../../environment';

@Injectable()
export class Feathers {
  private _feathers: any;
  private _socket: any;
  private _server = `http://${environment.server.host}:${environment.server.port}`;

  constructor() {
    this._socket = io(this._server);
    this._feathers = feathers();
    this._feathers.configure(feathersRx({
      idField: 'id'
    }));
    this._feathers.configure(socketio(this._socket));
    this._feathers.configure(authentication({
      storage: window.localStorage
    }));
  }

  public service(name: string) {
    return this._feathers.service(name);
  }

  public authenticate(credentials?: any): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout() {
    return this._feathers.logout();
  }
}
