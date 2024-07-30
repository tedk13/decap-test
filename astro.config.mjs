import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import DecapCMS from 'astro-decap-cms';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(), 
		sitemap(),
		DecapCMS({
      config: {
				// Location where files will be stored in the repo
				media_folder: "public/images", 
				// The src attribute for uploaded media
				public_folder: "public/images",
				publish_mode: "editorial_workflow",
				site_url: 'https://decap-test-rimdev.netlify.app',
				display_url: 'https://decap-test-rimdev.netlify.app',
        backend: {
          name: 'git-gateway',
          branch: 'master',
					commit_messages: {
						create: 'Create {{collection}} “{{slug}}”',
						update: 'Update {{collection}} “{{slug}}”',
						delete: 'Delete {{collection}} “{{slug}}”',
						uploadMedia: 'Upload “{{path}}”',
						deleteMedia: 'Delete “{{path}}”',
						openAuthoring: '{{message}}'
					}
        },
				disableIdentityWidgetInjection: true,
        collections: [
          {
						name: 'carriers',
						label: 'Carriers',
						folder: 'src/content/carriers',
						create: true,
						delete: true,
						format: "frontmatter",
						preview_path: "carriers/{{slug}}",
						fields: [
							{ label: "Layout", name: "layout", widget: "hidden", default: "../../layouts/CarrierLayout.astro", required: false},
							{ label: "Carrier Title", name: "title", widget: "string" },
							{ label: "Draft", name: "isDraft", widget: "boolean", required: false, default: false},
							{
								label: "Company Information",
								name: "companyInformation",
								widget: "object",
								fields: [
									{ label: "Carrier Logo", name: "carrierLogo", widget: "image" },
									{ 
										label: "Administrative Office Mailing Address", name: "adminMailingAddress", widget: "object",
										fields: [
											{ label: 'Address Line 1', name: 'addressLine1', widget: 'string' },
											{ label: 'Address Line 2', name: 'addressLine2', widget: 'string', required: false },
										]
									},
									{ 
										label: "Overnight Mailing Address", name: "overnightMailingAddress", widget: "object",
										fields: [
											{ label: 'Address Line 1', name: 'addressLine1', widget: 'string' },
											{ label: 'Address Line 2', name: 'addressLine2', widget: 'string', required: false },
										]
									},
									{
										label: 'Broker Support',
										name: 'brokerSupport',
										widget: 'object',
										fields: [
											{ label: 'Phone', name: 'phone', widget: 'string' },
											{ label: 'Email', name: 'email', widget: 'string' },
											{ label: 'Fax', name: 'fax', widget: 'string' },
										]
									},
									{
										label: 'New Business',
										name: 'newBusiness',
										widget: 'object',
										fields: [
											{ label: 'Phone', name: 'phone', widget: 'string' },
											{ label: 'Email', name: 'email', widget: 'string' },
											{ label: 'Fax', name: 'fax', widget: 'string' },
										]
									},
									{
										label: 'Policyowner Services/Member Services/Customer Service',
										name: 'policyOwnerServices',
										widget: 'object',
										fields: [
											{ label: 'Phone', name: 'phone', widget: 'string' },
											{ label: 'Email', name: 'email', widget: 'string' },
											{ label: 'Fax', name: 'fax', widget: 'string' },
										]
									},
									{ label: "Producer Portal", name: "producerPortal", widget: "string"},
								]
							},
							{
								label: "Certification Information",
								name: "certificationInformation",
								widget: "object",
								summary: "[Carrier] [Year] Certification",
								fields: [
									{ label: "Instructions for the Following Products:", name: "productInstructions", widget: "text"},
									{ 
										label: "Certification Start Date:", 
										name: "certStartDate", 
										widget: "datetime",
										default: "",
										// e.g. 24.12.2021,
										date_format: "DD.MM.YYYY",
										// e.g. 21:07,
										time_format: "HH:mm",
										format: "LLL",
										picker_utc: true
									},
									{ 
										label: "Is there a Deadline to Complete Certifications for New Agents?:", 
										name: "agentDeadline", 
										widget: "string"
									},
									{ 
										label: "Is there a Deadline to Complete Certifications for Current Agents to Receive Renewal Commissions?:", 
										name: "agentDeadlineRenewalCommissions", 
										widget: "string"
									},
									{ label: "Certification Link:", name: "certLink", widget: "string"},
									{ label: "Certification Reference Materials Available:", name: "certReferenceMaterials", widget: "string"},
									{ label: "Is AHIP or Other Equivalent Provider Training Required?", name: "equivalentProviderTrainingRequired", widget: "string"},
									{ label: "What is the Cost of AHIP or Other Equivalent Provider Training?", name: "CostEquivalentProviderTraining", widget: "string"},
									{ label: "Does Carrier Reimburse for AHIP or Other Equivalent Provider Training?", name: "carrierReimburseEquivalentProviderTraining", widget: "string"},
									{ label: "Can AHIP or Other Equivalent Provider Training Be Used for Compliance Credit?", name: "equivalentProviderTrainingComplianceCredit", widget: "string"},
									{ label: "Certification Compliance Modules:", name: "certificationComplianceModules", widget: "string"},
									{ label: "Certification Product Modules", name: "certificationProductModules", widget: "string"},
									{ label: "Is Face-to-Face Training Required?", name: "faceToFaceTrainingRequired", widget: "string"},
									{ label: "Will Certifying for [Upcoming Certification Year] Allow Me to Sell [Previous Certification Year] Products?", name: "certifyingToSellProducts", widget: "string"},
									{ label: "Are Additional Steps Required for Those Certifying for the First Time Versus Those Who Are Recertifying?", name: "areAdditionalStepsRequired", widget: "string"},
									{ label: "How Do I Retrieve My Username and Password?", name: "retrieveUsernameAndPassword", widget: "string"},
									{ label: "Who Do I Contact at Carrier to Confirm Certification?", name: "contactCarrierCornfirmCert", widget: "string"},
								]
							},
							{
								label: "Submitting Business",
								name: "submittingBusiness",
								widget: "object",
								fields: [
									{ label: "Important Information:", name: "importantInformation", widget: "string"},
									{ label: "How to Submit Business with [Carrier Name]:", name: "howToSubmitBusiness", widget: "string"},
									{
										label: 'Paper Applications',
										name: 'paperApplications',
										widget: 'object',
										fields: [
											{ label: 'Fax Number', name: 'faxNumber', widget: 'string' },
											{ label: 'Mailing Address', name: 'mailingAddress', widget: 'string' },
										]
									},
									{
										label: 'Online Enrollments',
										name: 'onlineEnrollments',
										widget: 'object',
										fields: [
											{ label: 'Website', name: 'website', widget: 'string' },
											{ label: 'Other Information', name: 'otherInformation', widget: 'string', required: false },
											{ label: 'Other Information', name: 'otherInformation2', widget: 'string', required: false },
										]
									},
									{ label: "Contact for Submitting Business Inquiries", name: "contactForSubmittingBusinessInquiries", widget: "string"},
								]
							},
							{
								label: "Commissions",
								name: "commissions",
								widget: "object",
								fields: [
									{ label: "General Information:", name: "generalInformation", widget: "string"},
									{ label: "How to Access [Carrier Name] Commission Statements Online:", name: "accessCommissionStatesmentsOnline", widget: "string"},
									{ label: "Contact for Commission-Related Inquiries:", name: "contactForCommissionRelatedInquiries", widget: "string"},
								]
							},
							{
								label: "Supplies",
								name: "supplies",
								widget: "object",
								fields: [
									{ label: "How to Order Supplies for [Carrier Name]:", name: "howToOrderSupplies", widget: "string"},
									{ label: "Contact for Ordering Supplies Inquiries:", name: "contactForOrderingSupplies", widget: "string"}
								]
							},
							{ label: "Body", name: "body", widget: "markdown", required: false }
						],
					},
        ],
      },
    }),
	],
});
