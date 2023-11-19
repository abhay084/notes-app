// src/components/NoteList.tsx
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import NoteCard from './NoteCard'
import NoteInterface from '@/types/note'

interface NoteListProps {
  notes: NoteInterface[]
  onEditNote: (editedNote: NoteInterface) => void
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEditNote }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={6}
    >
      {notes.map((note) => (
        <GridItem key={note._id} colSpan={1}>
          <NoteCard note={note} onEditNote={onEditNote} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default NoteList
