// 'use client';

// import { useState } from 'react';
// import { useAuth } from '@/lib/auth';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from '@/components/ui/tabs';

// export default function SettingsPage() {
//   const { user } = useAuth();
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [marketingEmails, setMarketingEmails] = useState(false);

//   return (
//     <div className="space-y-6">
//       <Tabs defaultValue="general" className="space-y-6">
//         <TabsList>
//           <TabsTrigger value="general">General</TabsTrigger>
//           <TabsTrigger value="notifications">Notifications</TabsTrigger>
//           <TabsTrigger value="security">Security</TabsTrigger>
//         </TabsList>

//         <TabsContent value="general">
//           <Card>
//             <CardHeader>
//               <CardTitle>Profile Settings</CardTitle>
//               <CardDescription>
//                 Update your personal information and preferences.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" defaultValue={user?.name} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" defaultValue={user?.email} />
//               </div>
//               <Button>Save Changes</Button>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="notifications">
//           <Card>
//             <CardHeader>
//               <CardTitle>Notification Preferences</CardTitle>
//               <CardDescription>
//                 Manage how you receive notifications.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <div className="space-y-0.5">
//                   <Label>Email Notifications</Label>
//                   <p className="text-sm text-muted-foreground">
//                     Receive notifications about your account activity.
//                   </p>
//                 </div>
//                 <Switch
//                   checked={emailNotifications}
//                   onCheckedChange={setEmailNotifications}
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="space-y-0.5">
//                   <Label>Marketing Emails</Label>
//                   <p className="text-sm text-muted-foreground">
//                     Receive emails about new features and updates.
//                   </p>
//                 </div>
//                 <Switch
//                   checked={marketingEmails}
//                   onCheckedChange={setMarketingEmails}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="security">
//           <Card>
//             <CardHeader>
//               <CardTitle>Security Settings</CardTitle>
//               <CardDescription>
//                 Manage your password and security preferences.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="current-password">Current Password</Label>
//                 <Input id="current-password" type="password" />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="new-password">New Password</Label>
//                 <Input id="new-password" type="password" />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirm-password">Confirm New Password</Label>
//                 <Input id="confirm-password" type="password" />
//               </div>
//               <Button>Update Password</Button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-normal text-gray-800  dark:text-white py-4 border-b border-gray-200">
        Settings
      </h1>

      <div className="py-4 space-y-4">
        <div>
          <Link href={"/dashboard/settings/myProfile"}>
            {" "}
            <SettingsItem label="Personal Information" />
          </Link>
        </div>
        <SettingsItem label="Change Password" />
        <div>
          <Link href={"/dashboard/settings/terms"}>
            {" "}
            <SettingsItem label="Terms & Condition" />
          </Link>
        </div>
        <SettingsItem label="Privacy Policy" />
        <SettingsItem label="Trust & Safety" />
      </div>
    </div>
  );
}

function SettingsItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-100 cursor-pointer">
      <span className="text-gray-800 font-medium">{label}</span>
      <ChevronRight className="h-5 w-5 text-gray-500" />
    </div>
  );
}
