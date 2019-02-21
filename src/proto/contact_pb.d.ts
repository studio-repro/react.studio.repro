export class ContactUs {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getFirstName(): string;
  setFirstName(a: string): void;
  getLastName(): string;
  setLastName(a: string): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): ContactUs.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ContactUs;
}

export namespace ContactUs {
  export type AsObject = {
    Id: number;
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Message: string;
  }
}

export class EchoReply {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): EchoReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoReply;
}

export namespace EchoReply {
  export type AsObject = {
    Message: string;
  }
}

export class EchoRequest {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): EchoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    Message: string;
  }
}

export class FindContactUsItemByEmailReply {
  constructor ();
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): FindContactUsItemByEmailReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindContactUsItemByEmailReply;
}

export namespace FindContactUsItemByEmailReply {
  export type AsObject = {
    ContactUs: ContactUs;
  }
}

export class FindContactUsItemByEmailRequest {
  constructor ();
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): FindContactUsItemByEmailRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindContactUsItemByEmailRequest;
}

export namespace FindContactUsItemByEmailRequest {
  export type AsObject = {
    EmailAddress: string;
  }
}

export class SaveContactUsItemReply {
  constructor ();
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): SaveContactUsItemReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveContactUsItemReply;
}

export namespace SaveContactUsItemReply {
  export type AsObject = {
    ContactUs: ContactUs;
  }
}

export class SaveContactUsItemRequest {
  constructor ();
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): SaveContactUsItemRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveContactUsItemRequest;
}

export namespace SaveContactUsItemRequest {
  export type AsObject = {
    ContactUs: ContactUs;
  }
}

