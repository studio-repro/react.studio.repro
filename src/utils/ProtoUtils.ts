import { ContactUs } from '@models/ContactUs';
import { ContactUs as ContactUsProto } from '@proto/contact_pb';

export function contactUsTransformToProto(contactUs: ContactUs): ContactUsProto {
	const contactUsProto: ContactUsProto = new ContactUsProto();
	if (contactUs.id) {
		contactUsProto.setId(contactUs.id);
	}
	if (contactUs.firstName) {
		contactUsProto.setFirstName(contactUs.firstName);
	}
	if (contactUs.lastName) {
		contactUsProto.setLastName(contactUs.lastName);
	}
	if (contactUs.emailAddress) {
		contactUsProto.setEmailAddress(contactUs.emailAddress);
	}
	if (contactUs.message) {
		contactUsProto.setMessage(contactUs.message);
	}
	return contactUsProto;
}

export function contactUsTransformFromProto(contactUsProto: ContactUsProto): ContactUs {
	const contactUs: ContactUs = {
		id: contactUsProto.getId(),
		firstName: contactUsProto.getFirstName(),
		lastName: contactUsProto.getLastName(),
		emailAddress: contactUsProto.getEmailAddress(),
		message: contactUsProto.getMessage()
	};
	return contactUs;
}
