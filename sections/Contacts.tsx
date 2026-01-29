import {  Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-3xl h-104">
      <h1 className="text-4xl font-bold mb-6">Contacts</h1>

      <div className="space-y-4 text-neutral-300">
        <a href="https://www.instagram.com/av.programmer/" target="_blank" className="flex items-center gap-3 hover:text-white">
          <Image src={"/contacts/instagram_icon.png"} alt={"Instagram"} width={20} height={20}/> 
          Instagram
        </a>

        <a href="https://www.linkedin.com/in/artem-vasyliev-882b02392/" target="_blank" className="flex items-center gap-3 hover:text-white">
          <Image src={"/contacts/linkedin_icon.png"} alt={"Linkedin"} width={20} height={20}/> 
          LinkedIn
        </a>

        <a href="https://github.com/vasylievart" target="_blank" className="flex items-center gap-3 hover:text-white">
          <Image src={"/contacts/github_icon.png"} alt={"GitHub"} width={20} height={20}/> 
          GitHub
        </a>

        <a href="https://www.facebook.com/profile.php?id=100077804970384" target="_blank" className="flex items-center gap-3 hover:text-white">
          <Image src={"/contacts/facebook_icon.png"} alt={"Facebook"} width={20} height={20}/> 
          Facebook
        </a>

        <div className="flex items-center gap-3">
          <Mail size={20} /> artemass3@gmail.com
        </div>

        <div className="flex items-center gap-3">
          <Phone size={20} /> +34-674-586-845
        </div>
      </div>
    </div>
  );
}
