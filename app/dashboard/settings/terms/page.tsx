
"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TermsView() {
  const router = useRouter()

  const handleEdit = () => {
    // Navigate to edit page or open edit mode
    router.push("/dashboard/settings/termsEdit")
  }

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button className="flex items-center text-lg font-medium">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Terms & Condition
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Title */}
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-medium text-gray-800">Terms & Condition</h1>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisi sed ante
                congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
                habitant. Imperdiet tincidunt nisi consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a
                vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisi magnis
                convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi
                posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae
                blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat
                quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin
                et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum
                orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspe ndisse vitae. Tellus
                interdum enim lorem vel morbi lectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisi sed ante
                congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
                habitant. Imperdiet tincidunt nisi consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a
                vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisi magnis
                convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi
                posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae
                blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat
                quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin
                et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum
                orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus
                interdum enim lorem vel morbi lectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisi sed ante
                congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
                habitant. Imperdiet tincidunt nisi consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a
                vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisi magnis
                convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi
                posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae
                blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat
                quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin
                et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum
                orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspe ndisse vitae. Tellus
                interdum enim lorem vel morbi lectus.
              </p>
            </div>
          </div>
        </div>

        {/* Edit button */}
        <div className="flex justify-end mt-4">
          <Button onClick={handleEdit} className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 rounded-full">
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}
