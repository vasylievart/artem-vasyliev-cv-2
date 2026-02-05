import dynamic from "next/dynamic";

const ContactContent = dynamic(() => import("@/components/ContactContent"), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />,
})

export default function Contact() {
  return (
    <div className="max-w-3xl mb-40">
      <h1 className="mb-6 text-3xl">Contacts</h1>
      <ContactContent/>
    </div>
  );
}
