"use client"

import { useState, useRef } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TermsEditor() {
  const [content, setContent] = useState("")
  const quillRef = useRef<ReactQuill>(null)
    const router = useRouter()

  // Define the toolbar options to match the screenshot
  const modules = {
    toolbar: {
      container: [
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        ["link", "image"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
  }

  const handleUpdate = () => {
    // Handle the update action here
    console.log("Updated content:", content)
    router.push('/dashboard/settings/terms')
    // You could send this to your API, etc.
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
            <h1 className="text-xl font-medium text-gray-800">Terms & Condition Edit</h1>
          </div>

          {/* Editor */}
          <div className="p-4">
            <div className="quill-container">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                placeholder="Enter your update terms & conditions..."
                className="min-h-[300px] text-black"
              />
            </div>
          </div>
        </div>

        {/* Update button */}
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdate} className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 rounded-full">
            Update
          </Button>
        </div>
      </div>

      {/* Custom styles to match the design */}
      <style jsx global>{`
        .quill-container {
          border-radius: 0.375rem;
        }
        .ql-toolbar {
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          background-color: #f9fafb;
          border-color: #e5e7eb;
        }
        .ql-container {
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
          border-color: #e5e7eb;
          min-height: 250px;
        }
        .ql-editor {
          min-height: 250px;
          font-size: 14px;
        }
        .ql-editor.ql-blank::before {
          font-style: italic;
          color: #9ca3af;
        }
      `}</style>
    </div>
  )
}
