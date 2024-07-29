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
        backend: {
          name: 'git-gateway',
          branch: 'master',
        },
        collections: [
          {
						name: 'carriers',
						label: 'Carriers',
						folder: 'src/pages/carriers',
						create: true,
						delete: true,
						fields: [
							{ label: "Layout", name: "layout", widget: "hidden", default: "../../layouts/CarrierLayout.astro", required: false},
							{ label: "Carrier Title", name: "carrierTitle", widget: "string" } ,
							{ label: "Draft", name: "isDraft", widget: "boolean", required: false, default: false},
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
						],
					},
        ],
      },
    }),
	],
});
