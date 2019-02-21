import ContactService from '@api/ContactService';

import { ContactUsStore } from '@store/ContactUsStore';
import { FlagStore } from '@store/FlagStore';
import { RouterStore } from '@store/RouterStore';

import { ContactManagerClient } from '@proto/ContactServiceClientPb';

import ApiUtils from '@utils/ApiUtils';

// tslint:disable no-null-keyword
export class RootStore {
	public contactUsStore: ContactUsStore;
	public flagStore: FlagStore;
	public routerStore: RouterStore;

	private contactManagerClient: ContactManagerClient;
	public contactService: ContactService;

	constructor() {
		this.contactUsStore = new ContactUsStore(this);
		this.flagStore = new FlagStore(this);
		this.routerStore = new RouterStore(this);

		this.contactManagerClient = new ContactManagerClient(ApiUtils.getApiEndpoint(), null, null);
		this.contactService = new ContactService(this.contactManagerClient);
	}
}
