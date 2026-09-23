import Link from "next/link";
import { FileEdit, ToggleLeft } from "lucide-react";

export default function AdminDashboardPage() {
  const blobConnected = !!process.env.BLOB_READ_WRITE_TOKEN;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage your website's homepage content and page visibility.</p>

      {!blobConnected && (
        <div className="mb-8 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 text-sm">
          <strong>Storage not connected yet.</strong> Changes you make here won't be saved until Blob
          storage is connected to this project on Vercel.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <Link
          href="/admin/homepage"
          className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-red-200 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
            <FileEdit className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Homepage Content</h2>
          <p className="text-gray-500 text-sm">
            Edit the hero, services, capabilities, about, testimonials, industries and contact
            sections — including images.
          </p>
        </Link>

        <Link
          href="/admin/pages"
          className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-red-200 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
            <ToggleLeft className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Pages On/Off</h2>
          <p className="text-gray-500 text-sm">
            Turn any page on the site on or off. A disabled page redirects visitors back to the
            homepage.
          </p>
        </Link>
      </div>
    </div>
  );
}
