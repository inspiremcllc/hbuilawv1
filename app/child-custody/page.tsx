import type { Metadata } from 'next'
import { PracticePage } from '@/components/PracticePage'
import { getPracticeArea } from '@/lib/site-data'

const area = getPracticeArea('child-custody')!

export const metadata: Metadata = {
  title: area.metadataTitle,
  description: area.metadataDescription,
  openGraph: {
    title: area.metadataTitle,
    description: area.metadataDescription,
  },
}

export default function ChildCustodyPage() {
  return <PracticePage area={area} />
}
