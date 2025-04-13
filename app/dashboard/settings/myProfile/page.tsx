import { ArrowLeft, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PersonalInformationPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="p-4 flex items-center border-b border-gray-800 text-black dark:text-white">
        <Link href="/settings" className="flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="text-lg">Personal information</span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl text-red-500">Personal Information</h1>
          <Link href={'/dashboard/settings/editProfile'} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center">
            <Pencil className="h-4 w-4 mr-2" />
            Edit Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="border p-6 rounded-md flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-red-500 p-1">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image
                    src="/user.avif"
                    alt="Profile picture"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <p className="text-black  dark:text-white text-center">Profile</p>
            <p className="text-black dark:text-white font-medium text-center">
              Admin
            </p>
          </div>

          {/* Information Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <label className="block text-black dark:text-white">Name</label>
              <div className="border text-black dark:text-white p-3 rounded-md">
                Chelofer
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-black dark:text-white">E-mail</label>
              <div className="border text-black dark:text-white p-3 rounded-md">
                alkhahlaksaikgkgaik@hmail.com
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-black dark:text-white">
                Phone Number
              </label>
              <div className="border text-black dark:text-white p-3 rounded-md">
                3000597212
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
