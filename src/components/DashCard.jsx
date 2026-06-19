import { Link } from "react-router-dom";

export default function DashCard({ title, desc, href, icon, internal }) {
  const Tag = internal ? Link : "a";
  const props = internal
    ? { to: href }
    : { href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Tag
      {...props}
      className="card p-6 flex flex-col gap-3
                 hover:shadow-md hover:border-brand-300 dark:hover:border-brand-500
                 transition-all duration-200 cursor-pointer group"
    >
      <span
        className="text-3xl w-12 h-12 flex items-center justify-center
                   rounded-xl bg-brand-50 dark:bg-brand-900/30 group-hover:scale-110
                   transition-transform duration-200"
      >
        {icon}
      </span>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </Tag>
  );
}
