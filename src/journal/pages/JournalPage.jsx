import { JournalLayout } from "../layout/JournalLayout"
import { PropertyView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView/> */}
      {/* <NoteView/> */}
      <PropertyView/>

    </JournalLayout>
  )
}
