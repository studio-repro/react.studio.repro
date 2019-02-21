import { notification } from 'antd';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';
import ContactUsForm from '@components/ui/ContactUsForm';

import { ContactUs } from '@models/ContactUs';

import { ContactUsStore } from '@store/ContactUsStore';

import {
	CONTACT_US_API_ERROR_MESSAGE,
	CONTACT_US_API_ERROR_TITLE,
	CONTACT_US_SUBMITTED_MESSAGE,
	CONTACT_US_SUBMITTED_TITLE,
	CONTACT_US_SUCCESS_MESSAGE,
	CONTACT_US_SUCCESS_TITLE
} from '@utils/Constants';

import './style.less';

export interface ContactUsProps {
	contactUsStore?: ContactUsStore;
}

interface State {
	contactUs?: ContactUs;
}

@inject('contactUsStore')
@observer
class Contact extends React.Component<ContactUsProps, State> {
	private contactFormSubmitted: boolean = false;

	private notificationType: 'success' | 'info' | 'error' | undefined;
	private notificationTitle: string | undefined;
	private notificationMessage: string | undefined;

	private contactUsRef?: any;

	public state: State = {
		contactUs: undefined
	};

	public componentDidUpdate() {
		if (this.props.contactUsStore && !this.props.contactUsStore.loading) {
			if (this.notificationTitle && this.notificationMessage) {
				if (this.notificationType === 'success') {
					notification.success({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				} else if (this.notificationType === 'info') {
					notification.info({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				} else {
					notification.error({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				}
				this.notificationType = undefined;
				this.notificationTitle = undefined;
				this.notificationMessage = undefined;
			}
		}
	}

	public componentWillUnmount() {
		this.contactUsRef = undefined;
	}

	private handleSubmitContactForm = (contactUs: ContactUs) => {
		if (this.props.contactUsStore) {
			this.props.contactUsStore.contactUsRequest(contactUs);
			this.contactFormSubmitted = true;
		}
	};

	private evaluateContactFormSubmission = (data?: ContactUs, errors?: any) => {
		// Check the results of the contact form request
		if (data && data.id) {
			// Successful contact form submission
			this.notificationType = 'success';
			this.notificationTitle = CONTACT_US_SUCCESS_TITLE;
			this.notificationMessage = CONTACT_US_SUCCESS_MESSAGE;
			if (this.contactUsRef) {
				this.contactUsRef.resetFields();
			}
		} else if (errors) {
			// Assign the title and default message
			this.notificationType = 'error';
			this.notificationTitle = CONTACT_US_API_ERROR_TITLE;
			this.notificationMessage = CONTACT_US_API_ERROR_MESSAGE;
			// Try to obtain a more detailed message from the request
			if (errors && errors.message) {
				this.notificationMessage = errors.message;
			}
		}
		this.contactFormSubmitted = false;
	};

	private handleContactFormFieldsValidated = (contactUs: ContactUs) => {
		this.notificationType = 'info';
		this.notificationTitle = CONTACT_US_SUBMITTED_TITLE;
		this.notificationMessage = CONTACT_US_SUBMITTED_MESSAGE;
		this.handleSubmitContactForm(contactUs);
	};

	public render() {
		if (this.props.contactUsStore) {
			const { data, errors, loading } = this.props.contactUsStore;
			if (!loading && this.contactFormSubmitted) {
				this.evaluateContactFormSubmission(data, errors);
			}
		}

		return (
			<Page>
				<Head>
					<title>Contact Us</title>
					<meta name="Description" content="Contact Us" />
				</Head>
				<Header />
				<section className="ContactUs__Main">
					<div className="ContactUs__Card">
						<section className="Content__Wrapper">
							<h1>Get In Touch</h1>
							<p>
								<span>
									Have a question?
									<br />
									Submit the form below to leave us a message!
								</span>
							</p>
							<ContactUsForm
								ref={(instance: any) => (this.contactUsRef = instance)}
								handleContactFormFieldsValidated={this.handleContactFormFieldsValidated}
							/>
						</section>
					</div>
				</section>
			</Page>
		);
	}
}

export default Contact;
