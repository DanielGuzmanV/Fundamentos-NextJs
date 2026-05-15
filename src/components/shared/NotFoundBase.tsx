import { Frown } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  message: string;
  linkText: string;
  linkHref: string;
}

export const NotFoundBase = ({title, message, linkText, linkHref}: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-50 text-slate-800">
      <div className="flex items-center gap-5">
        <Frown className="text-indigo-600" size={64} />
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold tracking-tight text-center">{title}</h2>
        <p className="text-xl font-medium text-center">{message}</p>
        <Link
          href={linkHref}
          className="mt-6 inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}