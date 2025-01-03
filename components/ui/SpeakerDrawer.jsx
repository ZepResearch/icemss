import { motion } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function SpeakerDrawer({ isOpen, onClose, speaker }) {
  if (!speaker) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[540px] bg-white/90 backdrop-blur-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-3xl font-bold text-blue-800">{speaker.name}</SheetTitle>
          <SheetDescription className="text-xl text-blue-600">{speaker.role}</SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {speaker.image && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={`https://icemss.pockethost.io/api/files/speakers/${speaker.id}/${speaker.image}`}
              alt={speaker.name}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          )}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            {speaker.bio}
          </motion.p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

