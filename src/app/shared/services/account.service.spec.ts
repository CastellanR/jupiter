import { Injectable, ReflectiveInjector } from '@angular/core';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import {
  Http,
  BaseRequestOptions,
  ConnectionBackend,
  RequestOptions,
  Response,
  ResponseOptions,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import '../../operators';

import { AccountService } from './account.service';
import { AuthToken } from '../models';

describe('AccountService', () => {
  let service: AccountService;
  let backend: MockBackend;
  let lastConnection: MockConnection;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      AccountService
    ]);

    service = this.injector.get(AccountService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    backend.connections
      .subscribe((connection: MockConnection) => lastConnection = connection);
  });

  it('should exist', () => {
    expect(service).toBeDefined();
    expect(service.login).toBeDefined();
  });

  it('should make http requests', () => {
    service.login('admin@admin.com', '123456');
    expect(lastConnection).toBeDefined();
  });

  it('should login()', fakeAsync(() => {
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({authToken: '0000'})
    })));
    service.login('admin@admin.com', '123456').subscribe(authToken => {
      expect(authToken).toEqual({authToken: '0000'});
    });
    tick();
    expect(lastConnection.request.method).toBe(RequestMethod.Post);
    expect(lastConnection.request.url.endsWith('account/login')).toBeTruthy();
  }));

  // TODO
  it('should not getDetails() if is not logged in', fakeAsync(() => {
    const body = {
      id: '22',
      name: 'NAME',
      email: 'email@email.com',
      addresses: ['ADDRESS'],
      carts: [{
        createdAt: '2017-05-05T21:11:07.011Z',
        id: '73db9ca5-fd11-4ea5-b7c7-daacd10c11ec',
        products: [],
        userId: 'b7509256-faed-4c58-843a-7553dada1c09'
      }],
      scope: ['admin'],
      createdAt: '2016-02-02'
    }
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(body)
    })));
    service.getDetails().subscribe(account => {
      expect(account).toEqual(body);
    });
    tick();
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.url.endsWith('account')).toBeTruthy();
  }));

  it('should getDetails()', fakeAsync(() => {
    const body = {
      id: '22',
      name: 'NAME',
      email: 'email@email.com',
      addresses: ['ADDRESS'],
      carts: [{
        createdAt: '2017-05-05T21:11:07.011Z',
        id: '73db9ca5-fd11-4ea5-b7c7-daacd10c11ec',
        products: [],
        userId: 'b7509256-faed-4c58-843a-7553dada1c09'
      }],
      scope: ['admin'],
      createdAt: '2016-02-02'
    }
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(body)
    })));
    service.getDetails().subscribe(account => {
      expect(account).toEqual(body);
    });
    tick();
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.method).toBe(RequestMethod.Get);
    expect(lastConnection.request.url.endsWith('account')).toBeTruthy();
  }));

});
