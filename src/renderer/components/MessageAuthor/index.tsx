import React, { useState } from 'react'
import { Wrapper, StyledModal } from './styles'

export type MessageAuthorData = {
  id: string
  username: string
}

type Props = {
  author: MessageAuthorData
}

const MessageAuthor = ({ author }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)

  return (
    <Wrapper>
      <div onClick={toggleModal}>{author.username}</div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
      >
        <div>{author.username}</div>
      </StyledModal>
    </Wrapper>
  )
}

export default MessageAuthor
