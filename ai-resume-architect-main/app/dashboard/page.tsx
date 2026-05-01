import Link from "next/link";

const mockResumes = [
  { id: "1" },
  { id: "2" },
];

export default function DashboardPage() {
  return (
    <div>
      {mockResumes.map((resume) => (
        <div key={resume.id} className="flex gap-2 mb-2">

          {/* EDIT */}
          <Link
            href={`/builder?id=${resume.id}`}
            className="px-3 py-1 text-xs bg-slate-700 text-white rounded"
          >
            Edit
          </Link>

          {/* PDF */}
          <button
            onClick={() => window.open(`/api/pdf?id=${resume.id}`)}
            className="px-3 py-1 text-xs bg-violet-600 text-white rounded"
          >
            PDF
          </button>

          {/* DELETE */}
          <button
            onClick={async () => {
              await fetch(`/api/resumes/${resume.id}`, {
                method: "DELETE",
              });
              alert("Deleted!");
            }}
            className="px-3 py-1 text-xs bg-red-600 text-white rounded"
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
}