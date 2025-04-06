'use client';

import { useState } from 'react';
import { Bell, Mail, MessageSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const notifications = [
  {
    id: 1,
    title: 'Account Activity',
    description: 'Get notified about sign in activities and security updates',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Messages',
    description: 'Get notified when someone sends you a message',
    icon: MessageSquare,
  },
  {
    id: 3,
    title: 'Marketing Updates',
    description: 'Receive updates about new features and promotions',
    icon: Mail,
  },
];

export default function NotificationsPage() {
  const [emailDigest, setEmailDigest] = useState('daily');
  const [notificationStates, setNotificationStates] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
  });

  const toggleNotification = (id: number) => {
    setNotificationStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notification Preferences</CardTitle>
          </div>
          <CardDescription>
            Choose what notifications you want to receive and how.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {notifications.map((notification) => (
            <div key={notification.id}>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-secondary rounded-lg">
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notificationStates[notification.id]}
                  onCheckedChange={() => toggleNotification(notification.id)}
                />
              </div>
              {notification.id !== notifications.length && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Digest</CardTitle>
          <CardDescription>
            Configure how frequently you want to receive email summaries.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <p className="font-medium">Digest Frequency</p>
              <p className="text-sm text-muted-foreground">
                How often would you like to receive digest emails?
              </p>
            </div>
            <Select value={emailDigest} onValueChange={setEmailDigest}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">Save Preferences</Button>
        </CardContent>
      </Card>
    </div>
  );
}