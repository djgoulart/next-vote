import { ScrollArea } from '@/components/ui/scroll-area'
import { HistoryItem } from './history-item'

export function HistoryList() {
  return (
    <>
      <ScrollArea className="h-[400px] w-full pr-2">
        <div className="flex flex-col gap-1 pr-2">
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
      </ScrollArea>
    </>
  )
}
