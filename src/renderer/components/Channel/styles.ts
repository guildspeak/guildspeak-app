import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-items: left;
  flex-direction: row;
`

const ChannelName = styled.div`
  padding: 8px;
  color: #eeeeee;
  font-size: 16px;
  padding-top: 0.5rem;
  cursor: pointer;
  text-transform: none;
  ${props => ((props as any).channelId === props.id ? 'background: #2d2d31;font-weight: 500;' : '')} &:hover + Button {
    color: #fff;
    background: #2d2d31;
  }
`

const Button = styled.div`
  cursor: pointer;
`

export { Wrapper, ChannelName, Button }
