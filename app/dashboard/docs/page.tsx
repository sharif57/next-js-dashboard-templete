'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Essential information to get you up and running quickly.',
    items: [
      {
        title: 'Introduction',
        content:
          'Welcome to our dashboard! This documentation will help you understand how to use and customize the dashboard to meet your needs.',
      },
      {
        title: 'Quick Start Guide',
        content:
          'Follow these steps to get started:\n1. Log in to your account\n2. Navigate to the dashboard\n3. Customize your widgets\n4. Set up your preferences',
      },
      {
        title: 'System Requirements',
        content:
          'Ensure your system meets these requirements:\n- Modern web browser\n- JavaScript enabled\n- Minimum screen resolution: 1280x720',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Detailed information about dashboard features and capabilities.',
    items: [
      {
        title: 'Analytics',
        content:
          'The analytics section provides detailed insights into your data, including:\n- User engagement metrics\n- Performance statistics\n- Trend analysis',
      },
      {
        title: 'User Management',
        content:
          'Manage users efficiently with these features:\n- User roles and permissions\n- Activity monitoring\n- Account settings',
      },
      {
        title: 'Customization',
        content:
          'Customize your dashboard:\n- Widget arrangement\n- Color themes\n- Display preferences',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    items: [
      {
        title: 'Common Issues',
        content:
          'Solutions to frequent problems:\n- Login issues\n- Data not loading\n- Display problems',
      },
      {
        title: 'FAQ',
        content:
          'Answers to frequently asked questions about using and managing the dashboard.',
      },
      {
        title: 'Support',
        content:
          'Need help? Contact our support team:\n- Email: support@example.com\n- Help desk: help.example.com\n- Community forum: forum.example.com',
      },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <div className="space-y-6">
      {documentationSections.map((section) => (
        <Card key={section.id}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose dark:prose-invert max-w-none">
                      {item.content.split('\n').map((line, i) => (
                        <p key={i} className="my-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}