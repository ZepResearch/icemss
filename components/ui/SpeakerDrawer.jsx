import { motion } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { CopySlashIcon, GraduationCap, MapPin, Mic } from 'lucide-react';

export function SpeakerDrawer({ isOpen, onClose, speaker }) {
  if (!speaker) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[540px] bg-white/90 backdrop-blur-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-3xl font-bold text-blue-800">{speaker.name}</SheetTitle>
          {/* <SheetDescription className="text-xl text-blue-600">{speaker.role}</SheetDescription> */}
        </SheetHeader>
        <div className="mt-6 space-y-1">
          {speaker.image && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={`https://icemss.pockethost.io/api/files/speakers/${speaker.id}/${speaker.image}`}
              alt={speaker.name}
              className="w-full h-[270px] object-contain rounded-lg shadow-lg mb-4"
            />
          )}
            <p className="text-blue-600 font-semibold text-base mb-3">{speaker.role}</p>
            <hr />
                                <p className="text-blue-600 font-medium text-sm mb-1 inline-flex items-center gap-3"><GraduationCap/>{speaker.college}</p>
                                <p className="text-blue-600 font-medium text-sm mb-1 inline-flex items-center gap-3"><CopySlashIcon/>{speaker.field}</p>
                                <p className="text-blue-600 font-medium text-sm mb-3 inline-flex items-center gap-3"><MapPin/>{speaker.country}</p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 leading-relaxed overflow-y-scroll max-h-80 p-3 text-sm"
          >
            {speaker.bio}
          </motion.p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

