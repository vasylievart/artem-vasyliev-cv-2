import { LanguageProvider } from "@/context/LanguageContext";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>
}) {
  const {lang} = await params;
  
  return (
    <LanguageProvider initialLang={lang as "en" | "es"}>
       {children}
    </LanguageProvider>

       
    
  );
}