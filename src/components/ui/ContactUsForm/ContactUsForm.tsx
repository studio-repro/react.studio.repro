import { Col, Form, Input, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Button from '@bit/nicolaspearson.interaction.button';

import { ContactUs } from '@models/ContactUs';

import { ContactUsStore } from '@store/ContactUsStore';

const FormItem = Form.Item;
const { TextArea } = Input;

import './style.less';

export interface ContactUsFormProps {
	contactUsStore?: ContactUsStore;
	handleContactFormFieldsValidated: (contactUs: ContactUs) => void;
}

type AllProps = ContactUsFormProps & FormComponentProps;

@inject('contactUsStore')
@observer
class ContactUsForm extends React.Component<AllProps> {
	private onSubmitForm = () => {
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const contactUs: ContactUs = {
					firstName: values.firstName,
					lastName: values.lastName,
					emailAddress: values.email,
					message: values.message
				};
				this.props.handleContactFormFieldsValidated(contactUs);
			}
		});
	};

	private renderForm() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 24 }
			}
		};

		return (
			<div className="ContactUsForm__Form">
				<Form layout="vertical">
					<FormItem className="Name__Container">
						<Col xs={24} md={11}>
							<FormItem {...formItemLayout}>
								{getFieldDecorator('firstName', {
									rules: [{ required: true, message: 'Please provide a first name' }]
								})(<Input className="ContactUsForm__Input" placeholder="First Name" />)}
							</FormItem>
						</Col>
						<Col xs={0} md={2} className="Name__Spacer">
							<span style={{ display: 'inline-block', width: '100%' }} />
						</Col>
						<Col xs={24} md={11}>
							<FormItem>
								{getFieldDecorator('lastName', {
									rules: [{ required: true, message: 'Please provide a last name' }]
								})(<Input className="ContactUsForm__Input" placeholder="Last Name" />)}
							</FormItem>
						</Col>
					</FormItem>
					<FormItem>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'You have not entered a valid email address'
								},
								{
									required: true,
									message: 'Please provide an email address'
								}
							]
						})(<Input className="ContactUsForm__Input" placeholder="Email Address" />)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('message', {
							rules: [
								{
									required: true,
									message: 'Please provide a message'
								}
							]
						})(<TextArea className="ContactUsForm__Input" rows={8} placeholder="Your Message" />)}
					</FormItem>
					<FormItem>
						<Row>
							<Button className="CTA__Button" onClick={this.onSubmitForm}>
								Submit
							</Button>
						</Row>
					</FormItem>
				</Form>
			</div>
		);
	}

	public render() {
		return (
			<div className="ContactUsForm__Main">
				<div className="ContactUsForm__Content">{this.renderForm()}</div>
			</div>
		);
	}
}

export default Form.create<ContactUsFormProps>()(ContactUsForm);
