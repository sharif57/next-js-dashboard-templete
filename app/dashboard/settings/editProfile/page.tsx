"use client"

import type React from "react"

import { ArrowLeft, Upload } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "Chelofer",
    email: "alkhahlaksaikgkgaik@hmail.com",
    phone: "3000597212",
  })

  const [previewImage, setPreviewImage] = useState<string>("/user.avif")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewImage(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitting profile data:", profileData)
    console.log("New profile image:", previewImage)

    // Redirect back to the profile page after saving
    window.location.href = "/dashboard/settings/myProfile"
  }

  return (
    <div className="min-h-screen text-black dark:text-white">
      {/* Header */}
      <div className="p-4 flex items-center border-b border-gray-800">
        <Link href="/dashboard/settings/myProfile" className="flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="text-lg">Back to Personal information</span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl text-red-500">Edit Profile</h1>
          {/* <p className="text-gray-500 dark:text-gray-400 mt-2">Update your personal information</p> */}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Image Section */}
          <div className="border p-6 rounded-md flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 cursor-pointer" onClick={handleImageClick}>
              <div className="absolute inset-0 rounded-full border-2 border-red-500 p-1">
                <div className="rounded-full overflow-hidden w-full h-full relative group">
                  <Image
                    src={previewImage || "/placeholder.svg"}
                    alt="Profile picture"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
            <p className="text-center">Profile</p>
            <p className="font-medium text-center">Admin</p>
            <Button type="button" variant="outline" size="sm" className="mt-4" onClick={handleImageClick}>
              Change Photo
            </Button>
          </div>

          {/* Information Form Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="border p-3 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="border p-3 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                className="border p-3 rounded-md"
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                Save Changes
              </Button>
         
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
