import * as grpcWeb from 'grpc-web';

import { ContactUs } from '@models/ContactUs';
import {
	EchoReply,
	EchoRequest,
	SaveContactUsItemReply,
	SaveContactUsItemRequest
} from '@proto/contact_pb';
import { ContactManagerClient } from '@proto/ContactServiceClientPb';
import ApiUtils from '@utils/ApiUtils';
import * as ProtoUtils from '@utils/ProtoUtils';

export default class ContactService {
	private contactManagerClient: ContactManagerClient;

	constructor(contactManagerClient: ContactManagerClient) {
		this.contactManagerClient = contactManagerClient;
	}

	public async echo(message: string): Promise<string> {
		const request = new EchoRequest();
		request.setMessage(message);
		return new Promise<string>((resolve, reject) => {
			this.contactManagerClient.echo(request, {}, (error: grpcWeb.Error, reply: EchoReply) => {
				if (error) {
					reject(error);
				} else {
					resolve(reply.getMessage());
				}
			});
		});
	}

	public async saveContactUsItem(contactUs: ContactUs): Promise<ContactUs> {
		const request = new SaveContactUsItemRequest();
		request.setContactUs(ProtoUtils.contactUsTransformToProto(contactUs));
		return new Promise<ContactUs>((resolve, reject) => {
			this.contactManagerClient.saveContactUsItem(
				request,
				{ 'x-access-token': ApiUtils.getApiAccessToken() },
				(error: grpcWeb.Error, reply: SaveContactUsItemReply) => {
					if (error) {
						reject(error);
					} else {
						resolve(ProtoUtils.contactUsTransformFromProto(reply.getContactUs()));
					}
				}
			);
		});
	}
}
