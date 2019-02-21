import { flow, observable } from 'mobx';

import { ContactUs } from '@models/ContactUs';

import { BaseStore } from '@store/BaseStore';
import { RootStore } from '@store/RootStore';

export class ContactUsStore extends BaseStore<ContactUs> {
	public rootStore: RootStore;

	constructor(rootStore: RootStore) {
		super(rootStore);
		this.rootStore = rootStore;
	}

	public echoRequest = flow(function*(this: ContactUsStore, message: string) {
		this.initState();
		this.loading = true;
		try {
			const res = yield this.rootStore.contactService.echo(message);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});

	public contactUsRequest = flow(function*(this: ContactUsStore, contactUs: ContactUs) {
		this.initState();
		this.loading = true;
		try {
			const res = yield this.rootStore.contactService.saveContactUsItem(contactUs);
			this.handleResponse(res);
		} catch (error) {
			this.handleError(error);
		}
	});
}
