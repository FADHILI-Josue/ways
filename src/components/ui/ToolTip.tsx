import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode, useState } from 'react';
import { FC } from 'react'

interface ToolTipProps {
  children: ReactNode,
  content: string
}

const ToolTip: FC<ToolTipProps> = ({children,content}) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
      <Tooltip.Provider delayDuration={0} >
        <Tooltip.Root open={open}>
          <Tooltip.Trigger asChild>
            <button className="" onClick={()=>setOpen(!open)}>
              {children}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="bg-black text-white p-2" sideOffset={5}>
               {content}
              <Tooltip.Arrow className="-mt-[2%]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
}

export default ToolTip