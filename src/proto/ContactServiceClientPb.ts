/**
 * @fileoverview gRPC-Web generated client stub for contact
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  ContactUs,
  EchoReply,
  EchoRequest,
  FindContactUsItemByEmailReply,
  FindContactUsItemByEmailRequest,
  SaveContactUsItemReply,
  SaveContactUsItemRequest} from './contact_pb';

export class ContactManagerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoEcho = new grpcWeb.AbstractClientBase.MethodInfo(
    EchoReply,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    EchoReply.deserializeBinary
  );

  echo(
    request: EchoRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: EchoReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/contact.ContactManager/Echo',
      request,
      metadata,
      this.methodInfoEcho,
      callback);
  }

  methodInfoFindContactUsItemByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    FindContactUsItemByEmailReply,
    (request: FindContactUsItemByEmailRequest) => {
      return request.serializeBinary();
    },
    FindContactUsItemByEmailReply.deserializeBinary
  );

  findContactUsItemByEmail(
    request: FindContactUsItemByEmailRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: FindContactUsItemByEmailReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/contact.ContactManager/FindContactUsItemByEmail',
      request,
      metadata,
      this.methodInfoFindContactUsItemByEmail,
      callback);
  }

  methodInfoSaveContactUsItem = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveContactUsItemReply,
    (request: SaveContactUsItemRequest) => {
      return request.serializeBinary();
    },
    SaveContactUsItemReply.deserializeBinary
  );

  saveContactUsItem(
    request: SaveContactUsItemRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SaveContactUsItemReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/contact.ContactManager/SaveContactUsItem',
      request,
      metadata,
      this.methodInfoSaveContactUsItem,
      callback);
  }

}

